/*
 * Zozo Theme Js 
 */ 

(function( $ ) {

	"use strict";

	/* Document ready event */
	$( document ).ready(function() {
			
		/* Overlay form */
		$( ".overlay-search-trigger" ).on( "click", function() {
			$(".overlay-search-form").toggleClass("active");
			return false;
		});

		/* Escape events */
		document.onkeydown = function(evt) {
		    evt = evt || window.event;
		    if (evt.keyCode == 27) {
		        if( $(".overlay-search-form.active").length ){
		        	$(".overlay-search-form.active").removeClass("active");		        	
		        }
		        if( $(".zozo-single-review-wrapper.active").length ){
		        	$(".zozo-single-review-wrapper.active").removeClass("active");
		        }
		        if( $(".filter-toggle-wrap.active").length ){
		        	$(".filter-toggle-wrap.active").removeClass("active");
		        }	        
		    }
		};

		/* Background Image Set */
		if( $("*[data-bg], *[data-color], *[data-bg-color]").length ){
			$("*[data-bg], *[data-color], *[data-bg-color]").each(function( index ) {
				var cur_ele = $(this);
				var img_url = cur_ele.data( "bg" );
				var bg_clr = cur_ele.data( "bg-color" );
				var clr = cur_ele.data( "color" );
				if( img_url ) $(this).css({ 'background-image' : 'url(' + img_url + ')' });
				else if( bg_clr ) $(this).css({ 'background-color' : bg_clr });
				if( clr ) $(this).css({ 'color' : clr });
			});
		}

		$( "ul.mobile-menu li.menu-item-has-children" ).append('<span class="dropdown-toggle"></span>');
		$( ".mobile-menu-toggle" ).on( "click", function() {
			var cur_ele = $(this);
			$( ".mobile-menu-toggle" ).toggleClass("active");
			$("body").toggleClass("mobile-menu-active");
			$(".mobile-elements-wrapper").toggleClass("active");
			return false;
		});
		$( "ul.mobile-menu ul.sub-menu" ).slideUp(0);
		$( "ul.mobile-menu li.menu-item-has-children span.dropdown-toggle" ).on( "click", function() {
			var cur_ele = $(this);
			cur_ele.parent("li").toggleClass("active");
			cur_ele.parent("li").children("ul.sub-menu").slideToggle(350);
			return false;
		});

		/* Product help trigger */
		if( $(".product-help-trigger").length ){
			$( ".product-help-trigger" ).on( "click", function() {
				$( ".product-help-trigger" ).removeClass("active");
				$(".product-excerpt").removeClass("active");
				$(this).toggleClass("active");
				//$(this).next(".product-excerpt").fadeToggle(350);
				$(this).next(".product-excerpt").toggleClass("active");
				return false;
			});
		}

		if( $(".filter-toggle-wrap").length ){
			$( ".filter-toggle-wrap > a" ).on( "click", function() {
				$(this).parent(".filter-toggle-wrap").toggleClass("active");
				return false;
			});
			$( ".filter-result-wrap:not(.single-only) a" ).on( "click", function() {
				var paren_wrap = $(this).parent(".filter-result-wrap").length ? $(this).parent(".filter-result-wrap") : $(this).parents(".filter-result-wrap");
				$(this).toggleClass("active");
				if ( $(this).hasClass('active') ){ 
					$(this).next("input").attr('name', $(paren_wrap).data("name"));
					$(this).next("input").val($(this).data("id"));
				}else{ 
					$(this).next("input").attr('name', '');
					$(this).next("input").val(''); 
				}
				$(".zozo-edd-filter-wrap .zozo-search-ppp").val(1);
				return false;
			});
			$( ".filter-result-wrap.single-only a" ).on( "click", function() {
				var paren_wrap = $(this).parent(".filter-result-wrap");
				$(paren_wrap).children("a").removeClass("active");				
				$(this).addClass("active");
				
				$(paren_wrap).find("input").attr('name', '');
				$(paren_wrap).find("input").val(''); 

				$(this).next("input").attr('name', $(paren_wrap).data("name"));
				$(this).next("input").val($(this).data("value"));
				$(".zozo-edd-filter-wrap .zozo-search-ppp").val(1);
				return false;
			});
			$( ".filter-layout-search a.zozo-items-grid" ).on( "click", function() {
				var grid_val = $(this).data("grid");
				$(this).parents(".filter-layout-search").find("a").removeClass("active");
				$(this).addClass("active");
				$(this).parents(".filter-layout-search").find("input").val(grid_val);

				var zozo_masonry = $(this).parents(".zozo-edd-filter-wrap").find(".zozo-masonry");
				$(zozo_masonry).data("columns", grid_val);
				zozo_make_masonry(zozo_masonry);

				return false;
			});
			$( "a.zozo-search-items" ).on( "click", function() {
				$(document).find("form#zozo-items-filter-form").submit();
				return false;
			});

			$( ".zozo-edd-filter-wrap ul.pagination > li a" ).on( "click", function() {
				var search_txt = $("input.filter-search-text").val();
				var cur_page = $( ".zozo-edd-filter-wrap .zozo-search-ppp" ).val();
				if( search_txt ){
					$("input.zozo-search-ppp").val(1);
				}else{
					if( $(this).hasClass( "prev-page" ) ){
						cur_page = parseInt( cur_page ) - 1;
						$("input.zozo-search-ppp").val(cur_page);
					}else if( $(this).hasClass( "next-page" ) ){
						cur_page = parseInt( cur_page ) + 1;					
						$("input.zozo-search-ppp").val(cur_page);
					}else{
						$("input.zozo-search-ppp").val($(this).data("page"));
					}
				}
				$( ".zozo-edd-filter-wrap a.zozo-search-items" ).trigger("click");
				return false;
			});
		}
		
		$( "body:not(body .zozo-items-filter-form), body:not(body .product-help-trigger), a.zozo-review-toggle" ).on( "click", function() {
			$(".filter-toggle-wrap.active, .product-excerpt.active, .product-help-trigger.active, .zozo-single-review-wrapper.active").removeClass("active");
		});

		//Thumbnail Hover
		if( $(".zozo-new-products").length ){
			$( window ).on( "scroll", function() {
				$(document).find(".zozo-products-img-wrap").removeClass("active");
			});
			$(document).find( ".zozo-new-products .zozo-products-img-wrap > a" ).on( "mouseover", function() {
				var cur_ele = $(this);
				var parent_ele = $(this).parent(".zozo-products-img-wrap");
				var popup_ele = $(parent_ele).find(".zozo-popup-product-img");
				if( !$(parent_ele).hasClass("active") ){
					$(parent_ele).addClass("active");
					var win_width = $(window).width();
					var left_offset = $(cur_ele).offset().left + $(cur_ele).width();
					var remain_width = win_width - left_offset;
					if( $(popup_ele).width() < remain_width ) {
						$(popup_ele).css({ 'left' : left_offset });
					}else{
						left_offset = $(cur_ele).offset().left - $(popup_ele).width();
						$(popup_ele).css({ 'left' : left_offset });
					}

					var win_height = $(window).height();
					var ele_top = $(cur_ele).offset().top - $(window).scrollTop();
					var top_offset = ele_top + $(cur_ele).height();
					var remain_height = win_height - top_offset;
					var top_pos = top_offset - ( $(popup_ele).height() / 2 );
					$(popup_ele).css({ 'top' : top_pos });
				}
			}).on( "mouseout", function() {
				var parent_ele = $(this).parent(".zozo-products-img-wrap");
				$(parent_ele).removeClass("active");
			});
		}

		//Product Filter
		if( $(".zozo-download-filter").length ){
			$(document).find( ".zozo-download-filter a" ).on( "click", function() {
				var cur_ele = $(this);
				var cur_cat = cur_ele.data("id")
				var parent_ele = cur_ele.parents(".zozothemes-products-wrap");
				$(parent_ele).find(".zozo-products-img-wrap").removeClass("item-show");
				if( cur_cat == 'all' ){
					$(parent_ele).removeClass("deactivate-all");
				}else{
					$(parent_ele).find(".zozo-products-img-wrap.zozo-product-category-"+cur_cat).addClass("item-show");
					$(parent_ele).addClass("deactivate-all");
				}
				return false;
			});
		}
		
	    var t_json = localize_data.download_keys;
	    t_json = JSON.parse(t_json);
		// $('.filter-search-text').tinyAutocomplete({
		// 	minChars: 2,
		// 	keyboardDelay: 200,
		// 	maxItems: 10,
		// 	showNoResults: true,
		// 	data: function (query, callback) {
		// 		$.ajax({
		// 			url: zozo_ajax.url,
		// 			method: 'GET',
		// 			dataType: 'json',
		// 			data: {
		// 				action: 'zozo_edd_search',
		// 				q: query
		// 			},
		// 			success: function (response) {
		// 				callback(response);
		// 			}
		// 		});
		// 	},
		// 	onSelect: function (el, val) {
		// 		if (val && val.url) {
		// 			window.location.href = val.url;
		// 		} else if (val) {
		// 			$(this).val(val.title);
		// 		}
		// 	}
		// });

	    //Member login scripts
		$( ".login-form-trigger, .zozo-login-close" ).click(function() {
			$('.zozo-login-parent').toggleClass('login-open');
			return false;
		});
				
		$( ".move-to-prev-form" ).click(function() {
			$('.zozo-login-parent .lost-password-form, .zozo-login-parent .registration-form').removeClass('form-state-show').addClass('form-state-hide');
			$('.zozo-login-parent .login-form').removeClass('form-state-hide').addClass('form-state-show');	
			return false;
		});
		
		$( ".register-trigger" ).click(function() {
			$('.zozo-login-parent .lost-password-form, .zozo-login-parent .login-form').removeClass('form-state-show').addClass('form-state-hide');
			$('.zozo-login-parent .registration-form').removeClass('form-state-hide').addClass('form-state-show');	
			return false;
		});
		
		$( ".lost-password-trigger" ).click(function() {
			$('.zozo-login-parent .registration-form, .zozo-login-parent .login-form').removeClass('form-state-show').addClass('form-state-hide');
			$('.zozo-login-parent .lost-password-form').removeClass('form-state-hide').addClass('form-state-show');
			return false;
		});
		
		// Perform AJAX login on form submit
		$( document ).on( 'submit', 'form#login', function(e) {
			
			if( $('form#login #lusername').val() != '' && $('form#login #lpassword').val() != '' ){
				
				$('form#login p.status').show().text(localize_data.loadingmessage);
				
				$.ajax({
					type: 'post',
					dataType: 'json',
					url: localize_data.ajax_url,
					data: { 
						'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
						'username': $('form#login #lusername').val(),
						'password': $('form#login #lpassword').val(),
						'security': $('form#login #lsecurity').val() },
					success: function(data){
						$('form#login p.status').text(data.message);
						if( data.loggedin == true ){
							window.location.reload();
						}
					}
				});
				e.preventDefault();
			}else{
				$('form#login p.status').text(localize_data.valid_login);
				return false;
			}
		});
		
		// Perform AJAX register on form submit
		$( document ).on( 'submit', 'form#registration', function(e) {
			if( $('form#registration #uemail').val() != '' && $('form#registration #username').val() != '' && $('form#registration #password').val() != '' ){
				
				$('form#registration p.status').show().text(localize_data.loadingmessage);
	
				$.ajax({
					type: 'post',
					dataType: 'json',
					url: localize_data.ajax_url,
					data: { 
						'action': 'ajaxregister', //calls wp_ajax_nopriv_ajaxlogin
						'name': $('form#registration #name').val(),
						'email': $('form#registration #uemail').val(),
						'nick_name': $('form#registration #nick_name').val(),
						'username': $('form#registration #username').val(),
						'password': $('form#registration #password').val(), 
						'security': $('form#registration #security').val() },
					success: function(data){
						$('form#registration p.status').text(data.message);
						if (data.register == true){
							setTimeout(function() {
								$('.zozo-login-parent .lost-password-form, .zozo-login-parent .registration-form').removeClass('form-state-show').addClass('form-state-hide');
								$('.zozo-login-parent .login-form').removeClass('form-state-hide').addClass('form-state-show');	
							}, 1000);							
						}
					}
				});
				e.preventDefault();
			}else{
				$('form#registration p.status').text(localize_data.req_reg);
				return false;
			}
		});
		
		// Lost Password Ajax
		$( document ).on( 'submit', 'form#forgot_password', function(e) {
			if( $('#user_login').val() != '' ){
				
				$('p.status', this).show().text(localize_data.loadingmessage);

				$.ajax({
					type: 'post',
					dataType: 'json',
					url: localize_data.ajax_url,
					data: { 
						'action': 'lost_pass', 
						'user_login': $('#user_login').val(), 
						'security': $('#forgotsecurity').val(), 
					},
					success: function(data){					
						$('form#forgot_password p.status').text(data.message);
					}
				});
				e.preventDefault();
				return false;
			}else{
				$('form#forgot_password p.status').text(localize_data.valid_email);	
				return false;
			}
		});
		
		$( document ).on( 'click', '.google-login-trigger', function(e) {
			
			$.ajax({
				type: 'post',
				dataType: 'json',
				url: localize_data.ajax_url,
				data: { 
					action: "zozo_google_login",
					"nonce": localize_data.social_login
				},success: function(data){
					var gurl = data["result"];
					window.location.href = gurl;
				},error: function(xhr, status, error) {
					console.log( xhr );
				}
			});
			
			return false;
		});
		
		$( document ).on( 'click', '.fb-login-trigger', function(e) {
			
			$.ajax({
				type: 'post',
				dataType: 'json',
				url: localize_data.ajax_url,
				data: { 
					action: "zozo_fb_login",
					"nonce": localize_data.fb_login
				},success: function(data){
					var fburl = data["result"];
					window.location.href = fburl;
				},error: function(xhr, status, error) {
					console.log( xhr );
				}
			});
			
			return false;
		});

		//Review form
		$( ".zozo-rate-trigger, .zozo-review-close" ).click(function() {
			$('.zozo-review-parent').toggleClass('review-open');
			return false;
		});

		$( ".review-stars-group > span" ).click(function() {
			var sel_index = $(this).index();
			var filled_star = $(".review-stars-pack > span.filled-star").html();
			var empty_star = $(".review-stars-pack > span.empty-star").html();
			for( var i = 0; i < 5; i++ ){
				if( i > sel_index ){
					$( ".review-stars-group > span" ).eq(i).html(empty_star);
				}else{
					$( ".review-stars-group > span" ).eq(i).html(filled_star);
				}
			}
			$('input[name="review_rate"]').val(sel_index+1);
			return false;
		});

		$( document ).on( 'submit', 'form#zozo-review-form', function(e) {
			var review_form = 'action=zozo_review_process&' + $( "form#zozo-review-form" ).serialize();

			$(".review-msg").removeClass("success warning");
			$(".review-msg").html("");

			$.ajax({
				type: 'post',
				dataType: 'json',
				url: localize_data.ajax_url,
				data: review_form,
				success: function(data){
					if( data ){
						$(".review-msg").html(data['msg']);
						if( data['stat'] == 0 ) $(".review-msg").addClass("warning");
						if( data['stat'] == 1 ){
							$(".review-msg").addClass("success");
							setTimeout(function() {
								window.location.reload();
							}, 1000);
						}
					}
				},error: function(xhr, status, error) {
					console.log( xhr );
				}
			});

			return false;
		});

		/*$( document ).on( 'click', 'a.zozo-live-preview', function(e) {
			var target_url = $(this).attr("href");
			var form_out = '<form action="'+ target_url +'" method="post"><input type="hidden" name="zozothemes_product_id" value="" /></form>';
			$(body).
			$("form#live-preview-form").submit();
		});*/

		//Token
		$( "a.zozo-create-token" ).on( "click", function() {
			var nonce = $("#zozo_token_nonce").val();
			$.ajax({
				type: 'post',
				dataType: 'json',
				url: localize_data.ajax_url,
				data: {
					action : 'zozo_create_token',
					nonce : nonce
				},
				success: function(data){
					if( data && data['stat'] == 1 ){
						if( data['content'] ){
							$(".zozo-token-content").html(data['content']);
						}
					}
				},error: function(xhr, status, error) {
					console.log( xhr );
				}
			});
			return false;
		});
		$( document ).on( "click", "a.zozo-get-token", function() {
			zozo_copy_to_clipboard("zozo-user-token-hidden");
			return false;
		});

		/*Mailchimp Code*/
		if( $('.zozo-mc').length ){
			$('.zozo-mc').on( "click", function () {
				
				var c_btn = $(this);
				var mc_wrap = $( this ).parents('.mailchimp-wrapper');
				var mc_form = $( this ).parents('.zozo-mc-form');
				
				if( mc_form.find('input[name="zozo_mc_email"]').val() == '' ){
					mc_wrap.find('.mc-notice-msg').text( localize_data.must_fill );
				}else{
					c_btn.attr( "disabled", "disabled" );
					$.ajax({
						type: "POST",
						url: localize_data.ajax_url,
						data: 'action=zozo_mc_process&nonce='+localize_data.mc_nounce+'&'+mc_form.serialize(),
						success: function (data) {
							//Success
							c_btn.removeAttr( "disabled" );
							if( data == 'success' ){
								mc_wrap.find('.mc-notice-msg').text( mc_wrap.find('.mc-notice-group').attr('data-success') );
							}else{
								mc_wrap.find('.mc-notice-msg').text( mc_wrap.find('.mc-notice-group').attr('data-fail') );
							}
						},error: function(xhr, status, error) {
							c_btn.removeAttr( "disabled" );
							mc_wrap.find('.mc-notice-msg').text( mc_wrap.find('.mc-notice-group').attr('data-fail') );
						}
					});
				}
				return false;
			});
		} // if mailchimp exists

		if( $(".zozo-products-slide").length ){
			$(".zozo-products-slide").each(function( index ) {			
				var c_owlCarousel = $(this);
				var loop = c_owlCarousel.data( "loop" );
				var margin = c_owlCarousel.data( "margin" );
				var nav = c_owlCarousel.data( "nav" );
				var dots = c_owlCarousel.data( "dots" );
				var items = c_owlCarousel.data( "items" );

				$(this).owlCarousel({
				    loop: loop,
				    margin: margin,
				    nav: nav,
				    dots: dots,
				    items: items
				});
			});
		}

		/*Back to top*/
		if( $( "a.back-to-top" ).length ){
			$( document ).on('click', 'a.back-to-top', function(){
				$('html,body').animate({ 'scrollTop': 0 }, 1000 );
				return false;
			});
			$( document ).scroll(function() {
				var y = $( this ).scrollTop();
				if ( y > 300 )
					$( 'a.back-to-top' ).fadeIn();
				else
					$( 'a.back-to-top' ).fadeOut();
			});
		}
		
		if( $( ".sticky-social-share" ).length ){
			var win_width = $(window).width();
			var social_ele = $(document).find(".sticky-social-share");
			win_width = $(window).width();
			if( win_width < 768 ){
				$(social_ele).addClass("flexible-social-share");
			}else{
				$(social_ele).removeClass("flexible-social-share");
			}
			$(window).resize(function(event){
				$(social_ele).removeClass("active");
				win_width = $(window).width();
				if( win_width < 768 ){
					$(social_ele).addClass("flexible-social-share");
				}else{
					$(social_ele).removeClass("flexible-social-share");
				}
			});

			var lastSocialScrollTop = 0;			
			$(window).scroll(function(event){
				var social_st = $(this).scrollTop();
				if (social_st > lastSocialScrollTop){
					$(social_ele).removeClass("active");
				} else {
					$(social_ele).addClass("active");
				}
				lastSocialScrollTop = social_st;
			});
		}

		//Review Toggle
		if( $( ".zozo-review-toggle" ).length ){
			$( ".zozo-review-toggle" ).on('click', function(){
				$(".zozo-single-review-wrapper").toggleClass("active");
				return false;
			});
		}
		
	}); // doc ready end	

	/* Window load event */
	$( window ).load(function() {

		//Section full width
		if( $("section.fullwidth").length ){
			zozo_section_full_width();
			var fullwidth_on_time;
			$(window).resize(function(event){
				clearTimeout(fullwidth_on_time);
				fullwidth_on_time = setTimeout(function(){ zozo_section_full_width(); }, 300);
			});
		}

		//Zozo masonry
		if( $(".zozo-masonry").length ){
			$(".zozo-masonry").each(function( index ) {
				zozo_make_masonry($(this));
			});
			
		}

		//Sticky header
		if( $(".sticky-outer").length ){
			$(".sticky-outer").zozostickypart();
			var sticky_on_time;
			$(window).resize(function(event){
				clearTimeout(sticky_on_time);
				sticky_on_time = setTimeout(function(){ $(".sticky-outer").zozostickypart(); }, 300);
			});
		}

		/* Sticky Sidebar */
		if( $( ".zozo-sticky-obj" ).length ){
			var admin_bar_hgt = $("#wpadminbar").length ? $("#wpadminbar").outerHeight() : 0;
			var $sticky_sidebars = $( ".zozo-sticky-obj" );
			var top_offset = 120 + admin_bar_hgt;
			if( $( window ).width() > 767 ) {
				$sticky_sidebars.stick_in_parent({
					offset_top: top_offset
				});
			}
			$( window ).resize(function() {
				if( $( window ).width() > 767 ) {
					$sticky_sidebars.trigger( "sticky_kit:detach" );	
					$sticky_sidebars.stick_in_parent({
						offset_top: top_offset
					});
					$sticky_sidebars.trigger( "sticky_kit:recalc" );
				}else{
					$sticky_sidebars.trigger( "sticky_kit:detach" );
				}
			});
		}

		//Body active
		$('body').addClass("zozo-load-active");			
		
	}); // window load end	
	
	function zozo_section_full_width(){
		var win_width = $(window).width();		
		$("section.fullwidth").css({ 'left' : '' });
		var left_pos = $("section.fullwidth").offset().left;
		$("section.fullwidth").css({ 'width' : win_width, 'left' : -Math.abs(left_pos) });
	}

	function zozo_make_masonry( zozo_masonry ){
		var masonry_cols = $(zozo_masonry).data('columns');
		var masonry_gutter = $(zozo_masonry).data('gutter');
		$(zozo_masonry).zozomasonry({
				columns	: masonry_cols,
				gutter	: masonry_gutter
			});
			var masonry_on_time;

			$(window).resize(function(event){
				clearTimeout(masonry_on_time);
				masonry_on_time = setTimeout(function(){
					$(zozo_masonry).zozomasonry({
						columns	: masonry_cols,
						gutter	: masonry_gutter
					});
				}, 100);
			});
	}

	function zozo_copy_to_clipboard( containerid ){
		window.getSelection().removeAllRanges();
		var range = document.createRange();
		range.selectNode(document.getElementById(containerid));
		window.getSelection().addRange(range);
		document.execCommand("copy");	
	}

})( jQuery );

(function ( $ ) {

	//Make sticky
	$.fn.zozostickypart = function( options ){

		//Sticky help functions
		var zozostickyhelp = {
			sticky_stat: function( st, header_top, sticky_outer, t_header_h ){
				if( st > lastScrollTop ){
					if( st > header_top ) $(sticky_outer).children('.sticky-head').addClass('header-sticky');
				}else{
					if( st > ( header_top - t_header_h ) ) $(sticky_outer).children('.sticky-head').addClass('header-sticky');
					else $(sticky_outer).children('.sticky-head').removeClass('header-sticky');
				}
			},
			sticky_scroll_stat: function( st, lastScrollTop, header_top, sticky_outer, t_header_h ){
				if( st > lastScrollTop ){
					$(sticky_outer).children('.sticky-head').addClass("hide-up");
				}else{
					if( st > ( header_top - t_header_h ) ){
						if( st > header_top ) $(sticky_outer).children('.sticky-head').addClass('header-sticky').removeClass("hide-up");
					}else{
						$(sticky_outer).children('.sticky-head').removeClass('header-sticky').removeClass("hide-up");					
					}
				}
			}
		}

		var sticky_outer = this;	
		var lastScrollTop = 0;
		var header_top = st = 0;
		$(sticky_outer).css( 'height', 'auto' );
		$(sticky_outer).children('.sticky-head').removeClass('header-sticky');
		var t_header_h = $(sticky_outer).outerHeight();
		$(sticky_outer).css( 'height', t_header_h );
		header_top = $(sticky_outer).offset().top;
		header_top += t_header_h;	
		var win_width = $(window).width();	
		if( $("#wpadminbar").length && win_width > 600 ){
			t_header_h += $("#wpadminbar").outerHeight();
			$(sticky_outer).children('.sticky-head').css({ "top": $("#wpadminbar").outerHeight() });
		}
		//var timer;
		$(window).scroll(function(event){
				st = $(this).scrollTop();
				zozostickyhelp.sticky_stat( st, header_top, sticky_outer, t_header_h );
				if( st == 0 ){
					$(sticky_outer).children('.sticky-head').removeClass('header-sticky');
				}
				lastScrollTop = st;
		});	
	};

    //Zozo masonry
    $.fn.zozomasonry = function( options ) {
 		
    	var masonry_ele_left = {};

 		//Masonry help functions
    	var zozomasonryhelp = {
			getbottom: function( json_arr, masonry_parent, cur_ele, $condition ) {
		        var ele_index = 0;
		        var ele_left = 0;
		        var ele_top = 0;
		        var tmp_val = 0;
		        $.each( json_arr, function( key, value ) {
		            if( tmp_val ){
		                if( $condition == 'lower' ){
		                    if( tmp_val > value ){
		                        tmp_val = ele_top = value;
		                        ele_index = parseInt(key);
		                    }
		                }else{
		                   if( tmp_val < value ){
		                        tmp_val = ele_top = value;
		                        ele_index = parseInt(key);
		                    } 
		                }
		            }else{
		                tmp_val = ele_top = value;
		                ele_index = parseInt(key);
		            }
		        });
		        ele_left =  masonry_ele_left[ele_index];
		        return [ele_index, ele_top, ele_left];
		    },
		    reset: function (masonry_parent, masonry_item, gutter){
		    	masonry_parent.css({ 'height' : 'auto' });
        		masonry_item.css({ 'position': 'relative', 'width': '100%', 'left': 'auto', 'right': 'auto', 'top': 'auto', 'margin-bottom': gutter });
		    }
		}

        // This is default options.
        var settings = $.extend({
            columns : 3,
            gutter  : 20
        }, options );

        var masonry_parent = this;
        var masonry_item = masonry_parent.children("article");

        $(masonry_item).removeClass("active");

        var parent_width = masonry_parent.width();
        if( $(window).width() < 768 ) settings.columns = 1;

        //Reset masonry items
        zozomasonryhelp.reset(masonry_parent, masonry_item, settings.gutter);

        if( settings.columns === 1 ){
        	$(masonry_item).addClass("active");
        	return;
        }

        var net_width = Math.floor( ( parent_width - ( settings.gutter * ( settings.columns - 1 ) ) ) / settings.columns );
        masonry_item.css({ 'width': net_width +'px', 'position': 'absolute' });

        var masonry_left = 0;
        var masonry_parent_top = masonry_parent.offset().top;
        var masonry_ele_bottoms = {};
        var cur_item_bottom = 0;

        $(masonry_parent).children('article').each(function(index) {
            //Set left position
            var col_stat = ( index + 1 ) % settings.columns;
            if( index < settings.columns ){
                $(this).css({'left': masonry_left +'px'});
                masonry_ele_left[index] = masonry_left;
                masonry_left += net_width + settings.gutter;                
                cur_item_bottom = $(this).outerHeight() + settings.gutter;
                masonry_ele_bottoms[index] = cur_item_bottom;
                
            }else{
                var lowest_arr = zozomasonryhelp.getbottom(masonry_ele_bottoms, masonry_parent, this, 'lower');
                delete masonry_ele_bottoms[lowest_arr[0]];
                var lowest_top = lowest_arr[1];
                var lowest_left = lowest_arr[2];
                cur_item_bottom = lowest_top + $(this).outerHeight() + settings.gutter;
                masonry_ele_bottoms[index] = cur_item_bottom;
                $(this).css({'top': lowest_top +'px', 'left': lowest_left+'px'});
                masonry_ele_left[index] = lowest_left;
            }
            $(this).addClass("active");
        });        

        var highest_bottom = zozomasonryhelp.getbottom(masonry_ele_bottoms, masonry_parent, this, 'higher');
        $(this).css({'height': highest_bottom[1] +'px'});

        return this;
 
    };
	
/* ===============================
   ZOZO CHRISTMAS POPUP WITH FLUENTCRM
================================ */

const popup    = document.getElementById("zozo-popup");
const overlay  = document.getElementById("zozo-popup-overlay");
    const SUB_KEY = "zozo_subscribed";
    const CLOSE_KEY = "zozo_popup_closed";

    function zozoShowPopup() {
        if (localStorage.getItem(SUB_KEY)) return;

        let lastClosed = localStorage.getItem(CLOSE_KEY);
        let now = Date.now();

        if (lastClosed && now - lastClosed < 5 * 60 * 1000) return;

        setTimeout(() => {
            popup.classList.add("show");
            overlay.classList.add("show");
        }, 20);
    }

    function zozoHidePopup() {
        popup.classList.remove("show");
        overlay.classList.remove("show");

        localStorage.setItem(CLOSE_KEY, Date.now());

        setTimeout(() => {
            popup.style.display = "none";
            overlay.style.display = "none";
        }, 300);
    }

    setTimeout(zozoShowPopup, 2500);

    document.addEventListener("mouseleave", function(e) {
        if (e.clientY < 10) zozoShowPopup();
    });

    const closeBtn = document.getElementById("zozo-popup-close");
    if (closeBtn) closeBtn.addEventListener("click", zozoHidePopup);

	const form = document.getElementById("zozo-fluent-form");

	if (form) {
		form.addEventListener("submit", function(e) {
			e.preventDefault(); // STOP page refresh

			const fullName = form.full_name.value;
			const email = form.email.value;

			fetch(localize_data.ajax_url, {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams({
					action: "zozo_fluentcrm_subscribe",
					full_name: fullName,
					email: email
				})
			})
			.then(res => res.json())
			.then(res => {
				const msgBox = document.getElementById("zozo-msg");

				// Reset previous classes
				msgBox.classList.remove("zozo-success", "zozo-error", "show");

				// ERROR: Email Exists
				if (!res.success) {
					msgBox.innerHTML = "⚠️ " + res.data;
					msgBox.classList.add("zozo-error");
					setTimeout(() => msgBox.classList.add("show"), 10);
					return;
				}

				// SUCCESS: Thank You Message
				msgBox.innerHTML = `
					<div class="zozo-thankyou-box">
						<div class="zozo-check">✔</div>
						<h3>Thank You For Your Support!</h3>
						<p>You have successfully subscribed.</p>
						<p>We will send you templates, offers & updates soon.</p>
					</div>
				`;
				msgBox.classList.add("zozo-success");
				setTimeout(() => msgBox.classList.add("show"), 10);

				// HIDE FORM + TITLE + SUBTITLE when success happens
				document.querySelector(".zozo-title").style.display = "none";
				document.querySelector(".zozo-sub").style.display = "none";
				document.getElementById("zozo-fluent-form").style.display = "none";

				// Save subscribed state
				localStorage.setItem("zozo_subscribed", "yes");

				// Auto close after 5 seconds
				setTimeout(() => {
					zozoHidePopup();
				}, 5000);
			});

		});
	}

}( jQuery ));