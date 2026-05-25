(function($){
    'use strict';
    var debounce = function(fn, delay){
        var t;
        return function(){
            var args = arguments;
            var ctx = this;
            clearTimeout(t);
            t = setTimeout(function(){
                fn.apply(ctx, args);
            }, delay);
        };
    };
    var renderGrid = function($wrap, items){
        var $results = $wrap.find('.zozo-edd-results');
        console.log('Testing');
        if (items.length === 0) {
            $results.html('<div class="zozo-no-results">No products found.</div>');
            return;
        }
        var html = '<div class="zozo-edd-grid">';
        items.forEach(function(it){
            var thumb = it.thumb ? '<img src="'+ it.thumb +'" alt="'+ escapeHtml(it.title) +'" class="zozo-item-thumb"/>'
                : '<div class="zozo-item-thumb-placeholder"></div>';
            var price = it.price ? '<div class="zozo-item-price">'+ it.price +'</div>' : '';
            html += '<div class="zozo-edd-item" data-id="'+ it.id +'">' +
                        '<a href="'+ it.url +'" class="zozo-item-link">' +
                          thumb +
                          '<div class="zozo-item-title">'+ escapeHtml(it.title) +'</div>' +
                          price +
                        '</a>' +
                    '</div>';
        });
        html += '</div>';
        $results.html(html);
    };
    var renderSuggestions = function($wrap, items) {
        var $s = $wrap.find('.zozo-suggestions');
        if (!items || items.length === 0) {
            $s.hide().empty().attr('aria-hidden','true');
            return;
        }
        var html = '<ul class="zozo-suggest-list">';
        items.slice(0,10).forEach(function(it){
            html += '<li class="zozo-suggest-item" data-url="'+ it.url +'" data-id="'+ it.id +'">'+ escapeHtml(it.title) +'</li>';
        });
        html += '</ul>';
        $s.html(html).show().attr('aria-hidden','false');
    };
    // small utility to escape
    function escapeHtml(text) {
        return String(text).replace(/[&<>"'`=\/]/g, function(s) {
            return ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                '/': '&#x2F;',
                '`': '&#x60;',
                '=': '&#x3D;'
            })[s];
        });
    }

    $(document).ready(function () {
        /* -----------------------------------
         * LOAD MORE BUTTON
         * ----------------------------------- */
        $(document).on('click', '#zozo-edd-loadmore', function () {
            const button = $(this);
            const page = parseInt(button.data('page'));
            const perPage = button.data('per-page');
            $.ajax({
                url: zozoEDDLive.ajax_url,
                type: 'POST',
                data: {
                    action: 'zozo_edd_loadmore',
                    page: page,
                    per_page: perPage,
                },
                beforeSend: function () {
                    button.text('Loading...');
                },
                success: function (response) {
                    if (response.trim() === 'no-more') {
                        button.text('No More Products').prop('disabled', true);
                    } else {
                        $('.zozo-edd-grid').append(response);
                        button.attr('data-page', page + 1).text('Load More');
                    }
                }
            });
        });
        /* -----------------------------------
         * DROPDOWN FILTER + SEARCH (CATEGORY, TAG, SORT, SEARCH)
         * ----------------------------------- */
        let typingTimer;
        const doneTypingInterval = 300;
        function load_downloads() {
            const cat = $('#zozo-cat-filter').val();
            const tag = $('#zozo-tag-filter').val();
            const sort = $('#zozo-sort-filter').val();
            const search = $('#zozo-search-filter').val();
            $.ajax({
                url: zozoEDDLive.ajax_url,
                type: 'POST',
                data: {
                    action: 'zozo_downloads_filter',
                    category: cat,
                    tag: tag,
                    sort: sort,
                    search: search
                },
                beforeSend: function () {
                    $('#zozo-download-results').html('<p>Loading...</p>');
                },
                success: function (response) {
                    $('#zozo-download-results').html(response);
                }
            });
        }
        $(document).on('change', '#zozo-cat-filter, #zozo-tag-filter, #zozo-sort-filter', load_downloads);
        $('#zozo-search-filter').on('keyup', function () {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(load_downloads, doneTypingInterval);
        }).on('keypress', function (e) {
            if (e.which === 13) {
                clearTimeout(typingTimer);
                load_downloads();
                return false;
            }
        });
        load_downloads(); // Initial load
        /* -----------------------------------
         * SIDEBAR FILTERS (Checkbox + Search)
         * ----------------------------------- */
        // function getFilters() {
        //     let filters = {};
        //     const activeCategory = $(".edd-filter[data-type='category'].active");
        //     if (activeCategory.length) {
        //         filters['category'] = activeCategory.data('value');
        //     }
        //     $(".edd-filter").each(function () {
        //         const type = $(this).data("type");
        //         if (
        //             ($(this).is(":checkbox") && $(this).is(":checked")) ||
        //             ($(this).is("select") && $(this).val() !== "")
        //         ) {
        //             if (!filters[type]) filters[type] = [];
        //             filters[type].push($(this).val());
        //         }
        //     });
        //     filters['search'] = $('#edd-sidebar-search-input').val();
        //     filters['sort'] = $('.edd-sort-btn.active').data('sort') || 'trending';
        //     filters['view'] = $('.edd-view-btn.active').data('view') || 'grid';
        //     return filters;
        // }
        function getFilters() {
            let filters = {};

            const activeCategory = $(".edd-filter[data-type='category'].active");
            if (activeCategory.length) {
                filters['category'] = activeCategory.data('value');
            }

            // ADD THIS
            const currentTag = $('#current-tag').val();
            if (currentTag) {
                filters['tag'] = currentTag;
            }

            $(".edd-filter").each(function () {
                const type = $(this).data("type");

                if (
                    ($(this).is(":checkbox") && $(this).is(":checked")) ||
                    ($(this).is("select") && $(this).val() !== "")
                ) {
                    if (!filters[type]) filters[type] = [];
                    filters[type].push($(this).val());
                }
            });

            filters['search'] = $('#edd-sidebar-search-input').val();
            filters['sort'] = $('.edd-sort-btn.active').data('sort') || 'trending';
            filters['view'] = $('.edd-view-btn.active').data('view') || 'grid';

            return filters;
        }
        function fetch_downloads(page = 1) {
            const filters = getFilters();
            filters['page'] = page;
            filters['action'] = 'zozo_edd_sidebar';

            $.ajax({
                url: zozoEDDLive.ajax_url,
                type: 'POST',
                data: filters,
                beforeSend: function () {
                    $('#zozo-edd-items').addClass('loading');
                },
                success: function (response) {
                    if (response.success) {
                        $('#zozo-edd-items').removeClass('loading').html(response.data.products);

                        if (response.data.category && Object.keys(response.data.category).length > 0) {
                            const cat = response.data.category;
                            const seoTitle = cat.name || 'All Downloads';
                            const seoDesc = cat.description || '';
                            document.title = seoTitle + " | ZozoThemes";
                            if (cat.link) history.pushState({}, '', cat.link);
                            if ($('.tag-title').length) {
                                $('.tag-title').text(seoTitle);
                            } else if ($('.category-title').length) {
                                $('.category-title').text(seoTitle);
                            } else {
                                $(".zozo-edd-wrapper").before('<h1 class="tag-title">'+seoTitle+'</h1>');
                            }
                            // Update existing tag/category description only
                            if ($('.tag-description').length) {
                                $('.tag-description').html(seoDesc);
                            } else if ($('.category-description').length) {
                                $('.category-description').html(seoDesc);
                            }
                        } else {
                            $('.category-title').text('All Downloads');
                            $('.category-description').empty();
                        }
                        updateAppliedFilters();
                        $('html, body').animate({ scrollTop: $('#zozo-edd-items').offset().top - 100 }, 300);
                    }
                }
            });
        }
        function updateAppliedFilters() {
            let html = '';
            $(".edd-filter[data-type='category'].active").each(function () {
                const label = $(this).text().trim();
                html += `<span class="applied-filter" data-type="category" data-value="${$(this).data('value')}">${label} ×</span>`;
            });
            $(".edd-filter:checked").each(function () {
                const label = $(this).parent().text().trim();
                html += `<span class="applied-filter" data-type="${$(this).data('type')}" data-value="${$(this).val()}">${label} X</span>`;
            });
            $("#applied-filters").html(html);
        }
        $(document).on("change", ".edd-filter", function () {
            fetch_downloads(1);
        });
        $(document).on("click", ".edd-filter[data-type='category']", function (e) {
            e.preventDefault();
            
            const clicked = $(this);
            const slug = clicked.data('value');
            
            $(".edd-filter[data-type='category']").removeClass("active");
            clicked.addClass("active");
            
            clicked.parents('li').each(function () {
                const parentLi = $(this);
                const childList = parentLi.find('> .edd-child-list');
                if (childList.length && !childList.is(':visible')) {
                    childList.slideDown(200);
                    parentLi.find('> .edd-toggle').text('-');
                }
            });
            
            fetch_downloads(1);
            updateAppliedFilters();
        });
        $(window).on('load', function() {
            const currentCategory = $('#current-category').val();
            const currentTag = $('#current-tag').val();

            if (currentCategory) {
                const currentFilter = $('.edd-filter[data-value="' + currentCategory + '"]');
                currentFilter.addClass('active');

                currentFilter.parents('li').each(function() {
                    const parentLi = $(this);
                    const childList = parentLi.find('> .edd-child-list');

                    if (childList.length && !childList.is(':visible')) {
                        childList.slideDown(0);
                        parentLi.find('> .edd-toggle').text('-');
                    }
                });
            }

            // Single fetch only
            fetch_downloads(1);
        });
        $(document).on("click", ".applied-filter", function () {
            const type = $(this).data("type");
            const value = $(this).data("value");
            if (type === 'category') {
                $(`.edd-filter[data-type='category'][data-value='${value}']`).removeClass('active');
            } else {
                $(`.edd-filter[data-type='${type}'][value='${value}']`).prop("checked", false);
            }
            fetch_downloads(1);
        });
        $(document).on('click', '.zozo-pagination-list a', function (e) {
            e.preventDefault();
            const page = $(this).data('page');
            fetch_downloads(page);
        });
        $(document).on("click", ".tf-filter-title", function () {
            $(this).parent().toggleClass("active");
            $(this).next().slideToggle(200);
        });
        $(document).on("click", ".edd-toggle", function (e) {
            e.preventDefault();

            const toggle = $(this);
            const parentLi = toggle.closest("li");
            const childList = parentLi.find("> .edd-child-list");

            if (childList.is(":visible")) {
                parentLi.find(".edd-child-list").slideUp();
                parentLi.find(".edd-toggle").text("+");
            } else {
                parentLi.find(".edd-child-list").slideDown();
                parentLi.find(".edd-toggle").text("-");
            }
        });
        /* -----------------------------------
         * SIDEBAR LIVE SEARCH + SORT + VIEW
         * ----------------------------------- */
        let sidebarTypingTimer;
        const typingDelay = 300;
        function liveSearchProducts(search) {
            if (!search || search.trim() === '') {
                return; // Exit the function if search is empty
            }
            const filters = getFilters();
            $('#zozo-edd-items').addClass('loading');
            const $category = $(".edd-filter[data-type='category'].active").data("value");
            const $tag = $('#current-tag').val();
            $.ajax({
                url: zozoEDDLive.ajax_url,
                type: 'POST',
                data: {
                    action: 'zozo_edd_live_sidebar_search',
                    search: search,
                    sort: $('.edd-sort-btn.active').data('sort'),
                    view: $('.edd-view-btn.active').data('view'),
                    category: $category,
                    tag: $tag
                },
                success: function (response) {
                    $('#zozo-edd-items').removeClass('loading').html(response);
                },
            });
        }
        $(document).on('keyup', '#edd-sidebar-search-input', function () {
            clearTimeout(sidebarTypingTimer);
            const searchTerm = $(this).val();
            sidebarTypingTimer = setTimeout(() => liveSearchProducts(searchTerm), typingDelay);
        });
        $(document).on('click', '.zozo-edd-sidebar-search-clear', function () {
            $('#edd-sidebar-search-input').val('');
            fetch_downloads(1);
        });
        $(document).on('click', '.edd-sort-btn', function () {
            $('.edd-sort-btn').removeClass('active');
            $(this).addClass('active');
            if ( $('#edd-sidebar-search-input').val() != '' ) {
                liveSearchProducts($('#edd-sidebar-search-input').val());
            } else {
                fetch_downloads(1);
            }
        });
        $(document).on('click', '.edd-view-btn', function () {
            $('.edd-view-btn').removeClass('active');
            $(this).addClass('active');
            if ( $('#edd-sidebar-search-input').val() != '' ) {
                liveSearchProducts($('#edd-sidebar-search-input').val());
            } else {
                fetch_downloads(1);
            }
        });
        $('#tf-filter-toggle').on('click', function() {
            $('#zozo-edd-filters').addClass('active');
            $('body').addClass('sidebar-open');
        });
        $('.tf-filter-close-btn').on('click', function() {
            $('#zozo-edd-filters').removeClass('active');
            $('body').removeClass('sidebar-open');
        });
        $(document).on('click', function(e) {
            if (!$(e.target).closest('#zozo-edd-filters, #tf-filter-toggle').length) {
                $('#zozo-edd-filters').removeClass('active');
                $('body').removeClass('sidebar-open');
            }
        });
    });
})(jQuery);
jQuery(document).ready(function($) {

    /** -------------------------------
     * LIVE SEARCH WITH SUGGESTIONS
     * ------------------------------- */
    const $input = $('.filter-search-text');
    const $wrap  = $('<div class="zozo-search-suggestions"></div>').insertAfter($input).hide();
    let debounceTimer = null;

    $input.on('keyup', function() {
        const term = $(this).val().trim();
        clearTimeout(debounceTimer);

        if (term.length < 2) {
            $wrap.hide();
            return;
        }

        debounceTimer = setTimeout(function() {
            $.ajax({
                url: zozoEDDLive.ajax_url,
                type: 'GET',
                data: { action: 'zozo_live_search', term },
                beforeSend: function() {
                    $wrap.html('<div class="loading">Loading...</div>').show();
                },
                success: function(res) {
                    if (res.length) {
                        let html = '<ul>';
                        res.forEach(item => {
                            html += `<li class="zozo-suggestion-item" data-link="${item.link}">${item.title}</li>`;
                        });
                        html += '</ul>';
                        $wrap.html(html).show();
                    } else {
                        $wrap.html('<div class="no-results">No results found</div>');
                    }
                }
            });
        }, 200);
    });

    $(document).on('click', '.zozo-suggestion-item', function() {
        const link = $(this).data('link');
        if (link) window.location.href = link;
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.zozo-search-suggestions, .filter-search-text').length) {
            $wrap.hide();
        }
    });

    /** -------------------------------
     * AJAX PRODUCT FILTER
     * ------------------------------- */
    // function zozoRunEddAjaxFilter() {
    //     let filters = [];
    //     $('.edd-filter:checked, .tf-select').each(function() {
    //         const type = $(this).data('type');
    //         const value = $(this).val();
    //         if (value) filters.push({ type, value });
    //     });

    //     $.ajax({
    //         url: zozoEDDLive.ajax_url,
    //         type: 'POST',
    //         dataType: 'json',
    //         data: {
    //             action: 'zozo_edd_filter_products',
    //             filters: filters,
    //         },
    //         beforeSend: function() {
    //             $('#edd-products').addClass('loading');
    //         },
    //         success: function(response) {
    //             $('#edd-products').removeClass('loading');
    //             if (response.success) {
    //                 $('#zozo-edd-items').html(response.data.products);

    //                 if (response.data.category && response.data.category.description) {
    //                     $('.category-description').html(response.data.category.description);
    //                     $('.edd-cat-title').text(response.data.category.name);
    //                 } else {
    //                     $('.edd-cat-title').text('All Downloads');
    //                     $('.category-description').empty();
    //                 }

    //                 // Update selected state
    //                 $('.edd-filter[data-type="category"]').prop('checked', false);
    //                 if (response.data.category?.slug) {
    //                     $('.edd-filter[value="' + response.data.category.slug + '"]').prop('checked', true);
    //                 }

    //                 // Update page title
    //                 if (response.data.category?.name) {
    //                     document.title = response.data.category.name + " - ZozoThemes";
    //                 }

    //                 if (response.data.category?.link) {
    //                     history.pushState({}, '', response.data.category.link);
    //                 }
    //             }
    //         },
    //         error: function(xhr, status, error) {
    //             console.error("AJAX Error:", status, error, xhr.responseText);
    //         }
    //     });
    // }
    

    /** -------------------------------
     * SINGLE CATEGORY SELECTION
     * ------------------------------- */
    // $(document).on('change', '.edd-filter[data-type="category"]', function() {
    //     $('.edd-filter[data-type="category"]').not(this).prop('checked', false);
    //     zozoRunEddAjaxFilter();
    // });

    /** -------------------------------
     * LOAD CURRENT CATEGORY ON PAGE LOAD
     * ------------------------------- */
    // $(window).on('load', function() {
    //     const currentCategory = $('#current-category').val();
    //     if (currentCategory) {
    //         const checkbox = $('.edd-filter[data-type="category"][value="' + currentCategory + '"]');
    //         if (checkbox.length) {
    //             checkbox.prop('checked', true);
    //             zozoRunEddAjaxFilter();
    //         }
    //     }
    // })
});
