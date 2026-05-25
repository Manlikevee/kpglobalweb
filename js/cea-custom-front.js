( function( $ ) {
	/**
 	 * @param $scope The Widget wrapper element as a jQuery element
	 * @param $ The jQuery alias
	 */ 
	 
	/* Typing Text Handler */
	var WidgetAnimateTextHandler = function( $scope, $ ) {
		$scope.find('.cea-typing-text').each(function( index ) {
			ceaAnimatedTextSettings( this, index );
		});
	};
	
	/* Isotope Handler */
	var WidgetIsotopeHandler = function( $scope, $ ) {
		$scope.find('.isotope').each(function() {
			ceaIsotopeLayout( this );
		});		
	};
	
	/* Owl Carousel Handler */
	var WidgetOwlCarouselHandler = function( $scope, $ ) {
		$scope.find('.owl-carousel').each(function() {
			ceaOwlSettings( this );
		});
	};
	
	/* Popup Handler */
	var WidgetPoupHandler = function( $scope, $ ) {
		if( $scope.find('.image-gallery').length ){
			$scope.find('.image-gallery').each(function() {
				ceaPopupGallerySettings( this );
			});
		}
	};
	
	/* Circle Progress Handler */
	var WidgetCircleProgressHandler = function( $scope, $ ) {
		if( $scope.find('.circle-progress-circle').length ){
			var circle_ele = $scope.find('.circle-progress-circle');
			ceaCircleProgresSettings(circle_ele);
		}		
	};
	
	/* Counter Handler */
	var WidgetCounterUpHandler = function( $scope, $ ) {
		if( $scope.find('.counter-up').length ){
			var counter_ele = $scope.find('.counter-up');
			ceaCounterUpSettings(counter_ele);
		}		
	};
	
	/* Image Before After Handler */
	var WidgetImageBeforeAfterHandler = function( $scope, $ ) {
		if( $scope.find('.cea-imgc-wrap').length ){
			var img_ba_ele = $scope.find('.cea-imgc-wrap');
			ceaImageBeforeAfterSettings(img_ba_ele);
		}		
	};
	
	/* Mailchimp Handler */
	var WidgetMailchimpHandler = function( $scope, $ ) {
		if( $scope.find(".cea-mailchimp-wrapper").length ){
			$scope.find('.cea-mailchimp-wrapper').each(function( index ) {
				ceaMailchimp( this );
			});
		}
	};
	
	/* Day Counter Handler */
	var WidgetDayCounterHandler = function( $scope, $ ) {
		$scope.find('.day-counter').each(function() {
			ceaDayCounterSettings( this );
		});		
	};
	
	/* Chart Handler */
	var WidgetChartHandler = function( $scope, $ ) {
		$scope.find('.pie-chart').each(function() {
			ceaPieChartSettings( this );
		});		
		$scope.find('.line-chart').each(function() {
			ceaLineChartSettings( this );
		});		
	};
	
	/* Modal Popup Handler */
	var WidgetModalPopupHandler = function( $scope, $ ) {
		if( $scope.find('.modal-popup-wrapper.page-load-modal').length ){
			var modal_id = $scope.find('.modal-popup-wrapper.page-load-modal .modal').attr("id");
			$('#'+modal_id).modal('show');
		}
	};

	/* Agon Handler */
	var WidgetAgonHandler = function( $scope, $ ) {
		if( $scope.find(".canvas_agon").length ){
			$scope.find( '.canvas_agon' ).each(function() {
				ceaAgon( this );
			});
		}
	};
	
	/* Cloud9 Carousel Handler */
	var WidgetCloud9CarouselHandler = function( $scope, $ ) {
		if( $scope.find(".cloud9-carousel").length ){
			$scope.find( '.cloud9-carousel' ).each(function() {
				ceaCloud9Carousel( this );
			});
		}
	};
	
	/* CEAMap Handler */
	var WidgetCEAMapHandler = function( $scope, $ ) {
		if( $scope.find(".ceagmap").length ){
			initCEAGmap();
		}
	};
	
	/* Timeline Slider Handler */
	var WidgetTimelineSliderHandler = function( $scope, $ ) {
		if( $scope.find('.cd-horizontal-timeline').length ){
			//var cur_ele = $scope.find('.cd-horizontal-timeline');
			var line_dist = $scope.find('.cd-horizontal-timeline').data("distance") ? $scope.find('.cd-horizontal-timeline').data("distance") : 60;
			$scope.find('.cd-horizontal-timeline').zozotimeline({
				distance: line_dist
			});
		}
	};
	
	/* Modal Popup Handler */
	var WidgetModalPopupHandler = function( $scope, $ ) {
		if( $scope.find(".cea-modal-box-trigger").length ){
			$scope.find( '.cea-modal-box-trigger' ).each(function() {
				ceaModalPopup( this );
			});
		}
		if( $scope.find('.cea-page-load-modal').length ){
			var modal_id = $scope.find('.cea-page-load-modal .white-popup-block').attr("id");
			$.magnificPopup.open({
			items: {
					src: '#'+modal_id
				},
				type: 'inline'
			});
		}
		$(document).on( 'click', '.cea-popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	};
	
	/* Popup Anything Handler */
	var WidgetPopupAnythingHandler = function( $scope, $ ) {
		if( $scope.find(".cea-popup-anything").length ){
			$scope.find( '.cea-popup-anything' ).each(function() {
				ceaPopupAnything( this );
			});
		}
	};
	
	/* Popover Handler */
	var WidgetPopoverHandler = function( $scope, $ ) {
		if( $scope.find(".cea-popover-trigger").length ){
			$scope.find( '.cea-popover-trigger' ).each(function() {
				ceaPopover( this );
			});
		}
	};
	
	/* Recent/Popular Toggle Handler */
	var WidgetRecentPopularToggleHandler = function( $scope, $ ) {
		if( $scope.find(".cea-toggle-post-trigger").length ){
			$scope.find(".cea-toggle-post-trigger .switch-checkbox").change(function(){
				ceaSwitchTabToggle( this );
			});
		}
	};
	
	/* Rain Drops Handler */
	var WidgetRainDropsHandler = function( $scope, $ ) {
		if( $scope.find(".cea-rain-drops").length ){
			$scope.find('.cea-rain-drops').each(function( index ) {
				ceaRainDrops( this );
			});
		}
	};
	
	/* Rain Drops and Parallax Handler */
	var SectionCustomOptionsHandler = function( $scope, $ ) {
	if ( $scope.is('section')){
			if ( $scope.is('section[data-cea-float]' ) ){
				ceaSectionFloatParallax( $scope );
			}
			if ( $scope.is('section[data-cea-raindrops]' ) ){
				ceaSectionRainDrops( $scope );
			}
			if ( $scope.is('section[data-cea-parallax-data]' ) ){
				ceaSectionParallax( $scope );
			}
		}
	};

	var WidgetMousePointerHandler = function ($scope, $) {
		var settings = $scope.data('settings');
		if (!settings || settings.enable_animation !== 'yes') return;
	
		// Create a unique cursor container for each widget
		var cursorContainer = $('<div class="custom-cursor"></div>');
		$('body').append(cursorContainer);
	
		// Apply styles based on the animation type
		if (settings.animation_type === 'circle_text') {
			cursorContainer.html('<span class="cursor-text">' + settings.cursor_text + '</span>');
			cursorContainer.find('span').css({
				fontSize: settings.cursor_text_size + 'px',
				color: settings.cursor_text_color
			});
		} else if (settings.animation_type === 'icon') {
			cursorContainer.html('<i class="' + settings.cursor_icon + '"></i>');
			cursorContainer.find('i').css({
				fontSize: settings.cursor_icon_size + 'px',
				color: settings.cursor_icon_color,
				background: settings.cursor_icon_bgcolor,
				borderRadius: settings.cursor_icon_bradius + '%'
			});
		} else if (settings.animation_type === 'image') {
			cursorContainer.html('<img src="' + settings.cursor_image + '" alt="Cursor Image">');
			cursorContainer.find('img').css({
				height: settings.cursor_image_height + 'px',
				width: settings.cursor_image_width + 'px',
				borderRadius: settings.cursor_image_border_radius + '%',
			});
		}
	
		// Attach event listeners to the container
		$scope.on('mousemove', function (event) {
			cursorContainer.css({
				top: event.clientY + 'px',
				left: event.clientX + 'px',
				display: 'block',
			});
		});
	
		$scope.on('mouseleave', function () {
			cursorContainer.css({
				display: 'none',
			});
		});
	
		// Clean up the cursor container on destroy
		$scope.on('elementor:destroy', function () {
			cursorContainer.remove();
		});
	};

	// Image Zoom 
	function ceaImageZoom( imgzoom_ele ) {
		var imgzoom_ele = $(imgzoom_ele);
		var img = imgzoom_ele.find('.image-zoom');
		var imgText = imgzoom_ele.find('.image-zoom-text');
		var imgSubTitle = imgzoom_ele.find('.image-zoom-sub-title');
		var headerHeight = $('.site-header').innerHeight();
		var adminHeight = $('#wpadminbar').innerHeight();
		var margin_Top = headerHeight + adminHeight;
		window.addEventListener('scroll', function () {
        	const rect = imgzoom_ele[0].getBoundingClientRect();
        	const windowHeight = window.innerHeight;
			
			img.css({
        		transition: 'transform 0.5s, opacity 0.5s',
    		});
			imgText.css({
				transition: 'transform 0.5s, opacity 0.5s',
			});
			imgSubTitle.css({
				transition: 'transform 0.5s, opacity 0.5s',
			});
			console.log( "Rect Bottom" + rect.bottom );
        	if (rect.top < margin_Top && rect.bottom > -400) {
        	   
        	    const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));

        	    const scale = 1 + scrollProgress * 1.2;
        	    const opacity = 1 - scrollProgress;

        	    img.css({
        	        transform: `scale(${scale})`,
        	        opacity: opacity,
        	    });

				imgText.css({
					opacity: opacity,
					transform: `scale(${scale})`,
				});

				imgSubTitle.css({
					opacity: opacity,
					transform: `scale(${scale})`,
				});
        	} else {
            // Revert to original state when out of range
            img.css({
                transform: 'scale(1)',
                opacity: 1,
            });

            imgText.css({
                transform: 'scale(1)',
                opacity: 1,
            });

            imgSubTitle.css({
                transform: 'scale(1)',
                opacity: 1,
            });
        }
    	});	
	}

	// Image Grid Zoom
	function ceaZoomImageGrid( grid_ele ) {
		var grid_ele = $(grid_ele);
		var grid_item = grid_ele.find("[zoom_grid_item]");
		var blurScale = grid_ele.data('blur');
		
		grid_item.css({
			filter: `blur(${blurScale}px)`,
			transform: `translateY(117px)`,
		});
		window.addEventListener('scroll', function () {
        	const rect = grid_ele[0].getBoundingClientRect();
        	const windowHeight = window.innerHeight;

        	if (rect.top < windowHeight && rect.bottom > 0) {

            	const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));

            	grid_item.each(function (index, item) {
                	setTimeout(() => {
                    	const translateY = 150 - scrollProgress * 150; 
                    	const blur = blurScale - scrollProgress * blurScale; 
                    	const scale = 1.2 - scrollProgress * 0.2;  

                    	$(item).css({
                    	    filter: `blur(${blur}px)`,
                    	    transform: `scale(${scale}) translateY(${translateY}px)`,
                    	});
                	}, index * 30); 
            	});
        	}
    	});
	}

	// Horizontal Scroll
	var SectionHorizontalScroll = function( $scope, $ ) {
		var horizontalParent = $('.cea-horizontal-scroll-yes');
		var horizontalChild = horizontalParent.children().addClass('cea-horizontal-scroll-main');
		var horizontalSections = horizontalChild.children().addClass('cea-horizontal-scroll-section');
		var headerHeight = $('.site-header').innerHeight();
		var adminHeight = $('#wpadminbar').innerHeight();
		var margin_Top = headerHeight + adminHeight;
		horizontalSections.css({
			paddingTop: margin_Top + 'px',
		});
		function horizontalScroll(scroll, windowWidth, windowHeight, disableMobile) {
			horizontalParent.each( function() {
				var $this = $(this),
            	container = $this.find('.e-con, .e-container').eq(0),
            	containerTop = $this.offset().top,
            	totalWidth = 0,
            	extraWidth = 0,
            	passed = scroll - containerTop,
            	translate = passed,
            	minHeight = $this.css('--min-height') ? $this.css('--min-height') : '100vh';

            	container.children('.elementor-element').each(function() {
            	    totalWidth += $(this).outerWidth() + parseFloat($(this).css('margin-left')) + parseFloat($(this).css('margin-right'));
            	});

            	if (windowWidth < 768 && disableMobile) {
            	    totalWidth = windowWidth;
            	    $this.addClass('hs-disabled');
            	} else {
            	    $this.removeClass('hs-disabled');
            	}

				$this.addClass('e-con-full');

				if( $this.hasClass('e-con-boxed') ) {
					$this.removeClass('e-con-boxed');
				}

            	$this.attr('total-width', totalWidth);

            	if (totalWidth > windowWidth) {
            	    extraWidth = totalWidth - windowWidth;
            	}

            	$this.height('calc(' + minHeight + ' + ' + extraWidth + 'px)');

            	if (passed < 0) {
            	    translate = 0;
            	}
            	if (passed > extraWidth) {
            	    translate = extraWidth;
            	}

            	var progress = translate / extraWidth;

            	if (progress <= 0) {
            	    $this.removeClass('fixed bottom');
            	}
            	if (progress > 0 && progress < 1) {
            	    $this.addClass('fixed');
            	    $this.removeClass('bottom');
            	}
            	if (progress >= 1) {
            	    $this.removeClass('fixed');
            	    $this.addClass('bottom');
            	}

            	container.css('transform', 'translateX(-' + translate + 'px)');
            	$this.css('--progress', progress);

            	if ($this.css('--progress-bar') && $this.css('--progress-bar') === 'true') {
            	    $this.removeClass('progress-bar-disabled');
            	} else {
            	    $this.addClass('progress-bar-disabled');
            	}
			});
		}
		function scrollActivity(delayCall = true) {
        	var scroll = $(window).scrollTop(),
        	    windowWidth = $(window).width(),
        	    windowHeight = $('.cea-100vh').height(),
        	    disableMobile = $('body').css('--disable-horizontal-scroll-mobile') && $('body').css('--disable-horizontal-scroll-mobile') === 'true';

        	lastTime = new Date();
        	setTimeout(function() {
        	    currentTime = new Date();
        	    if (currentTime - lastTime > 200 && delayCall) {
        	        scrollActivity(false);
        	    }
        	}, 500);

        	horizontalScroll(scroll, windowWidth, windowHeight, disableMobile);
    	}
		$(window).on('load resize scroll', scrollActivity);
	}

	// Text Reveal Animation
	var SectionTextRevealAnimation = function( $scope, $ ) {
		if( $('.text-reveal-yes').length ) {
			$('.text-reveal-yes').each(function() {
				var text_ele = $(this);
				var settings = text_ele.data('tag');
				// settings = JSON.parse(settings);
				var textTag = settings.textTag;
				var styleType = (settings.styleType) ? settings.styleType : 'nml-letter-blur-out';
				var textContainer = text_ele.find('.elementor-widget-container');
				var textContent = text_ele.find(textTag);
				textContent.addClass(styleType);
				var textSplitter = new SplitType(textContent, {
					splitTypeTypes: ["words", "chars"],
				});

				var animate_text = textContent.find('.char');
				animate_text.each(function( index ) {
					$(this).css({
						animationDelay: (index + 1) * 0.005 + 's',
					});
				});
			
				let lastScrollTop = 0;
				let scrollTimeout;
				$(window).on('scroll', function() {
					var windowHeight = $(window).height();
					const currentScrollTop = $(this).scrollTop() + (windowHeight/2);
					const isScrollingDown = currentScrollTop > lastScrollTop;
					const elementTop = textContent.offset().top - currentScrollTop;

					if( elementTop <= 300 && isScrollingDown ) {
						textContent.addClass('animated-section-title');
					} else {
						textContent.removeClass('animated-section-title');
					}
					clearTimeout(scrollTimeout);
					scrollTimeout = setTimeout(function() {
						textContent.removeClass('animated-section-title');
					}, 100);
					lastScrollTop = currentScrollTop;
				});
			});
		}
	}

	// List Step
	function ceaListStep( liststep_ele ) {
		var liststep_ele = $(liststep_ele);
		var hideOnMobile = liststep_ele.data('hide-sm');
		var listItems = liststep_ele.find('.list-step-item');
		var listContent = liststep_ele.find('.list-step-content');
		if( listContent.width() < 768 ) {
			listContent.addClass('flex-column');
		}
		if( hideOnMobile == 'yes' ) {
			listItems.find('.list-step-left').addClass('hide-on-mobile');
		}
	}

	// Column Sticky 
	var SectionColumnSticky = function ($scope, $) {
		if (jQuery('.sticky-sidebar').length) {
			jQuery('body').addClass('sticky-sidebar_init');
			jQuery('.sticky-sidebar').each(function () {
				var stickyElement = jQuery(this);
				stickyElement.theiaStickySidebar({
					additionalMarginTop: 150,
					additionalMarginBottom: 30,
					containerSelector: stickyElement.closest('.elementor-section, .elementor-column, .elementor-container'), 
					sidebarBehavior: 'modern',
					resizeSensor: true,
					minWidth: 1024
				});
			});
		}
		// Handle other sticky layout elements
		if (jQuery('.sticky_layout .info-wrapper').length) {
			jQuery('.sticky_layout .info-wrapper').each(function () {
				jQuery(this).theiaStickySidebar({
					additionalMarginTop: 150,
					additionalMarginBottom: 150
				});	
			});
		}
	};

	/* Rain Drops and Parallax Handler */
	var SectionContainerOptionsHandler = function( $scope, $ ) {
	if ( $scope.is('div')){
			if ( $scope.is('div[data-cea-float]' ) ){
				ceaSectionFloatParallax( $scope );
			}
			if ( $scope.is('div[data-cea-raindrops]' ) ){
				ceaSectionRainDrops( $scope );
			}
			if ( $scope.is('div[data-cea-parallax-data]' ) ){
				ceaSectionParallax( $scope );
			}
		}
	};
	
	/* Content Slider Handler */
	var ColumnCustomOptionsHandler = function( $scope, $ ) {
		if ( $scope.is('.elementor-element.elementor-column' ) ){
			if ( $scope.is('.elementor-element.elementor-column[data-cea-slide]' ) ){
				ceaContentSlider( $scope );
			}
		}
	};
	
	/* Toggle Content Handler */
	var WidgetToggleContentHandler = function( $scope, $ ) {
		if( $scope.find(".toggle-content-wrapper").length ){
			$scope.find('.toggle-content-wrapper').each(function( index ) {
				ceaToggleContent( this );
			});
			$( window ).resize(function() {
				setTimeout( function() {
					$scope.find('.toggle-content-wrapper').each(function( index ) {
						ceaToggleContent( this );
					});
				}, 100 );
			});
		}
	};
	
	/* Tabs Handler */
	var WidgetCeaTabHandler = function( $scope, $ ) {
		if( $scope.find(".cea-tab-elementor-widget").length ){
			$scope.find('.cea-tab-elementor-widget').each(function( index ) {
				ceaTabContent( this );
			});
			
			//Call Every Element
			CeaCallEveryElement($scope)
		}
	};
	
	/* Accordion Handler */
	var WidgetCeaAccordionHandler = function( $scope, $ ) {
		if (!window._ceaAccordionsLogged) {
			window._ceaAccordionsLogged = true;
			var $allAccordions = $('.cea-accordion-elementor-widget');
			$allAccordions.each(function(index) {
				ceaAccordionContent(this, index);
			});
		}
	};

	/* Draw SVG Handler */
	var WidgetCeaDrawSVGHandler = function( $scope, $ ) {
		if( $scope.find(".cea-draw-svg-widget").length ) {
			$scope.find('.cea-draw-svg-widget').each(function( index ) {
				ceaDrawSVGContent( this );
			});
		}
	};

	/* Text Image Handler */
	var WidgetTextImageHandler = function ($scope, $) {
		if ($scope.find(".cea-text-image").length) {
			$scope.find('.cea-text-image').each(function (index) {
				ceaTextImageContent(this);
			});
		}
	};

	/* Image Zoom */
	var WidgetImageZoomHandler = function ( $scope, $ ) {
		if( $scope.find('.image-zoom-scroll').length ) {
			$scope.find('.image-zoom-scroll').each(function ( $index ) {
				ceaImageZoom(this);
			});
		}
		if ($scope.find("[zoom_grid_container]").length) {
            $scope.find("[zoom_grid_container]").each(function ($index) {
                ceaZoomImageGrid(this);
            });
        }
	}

	/* List Step */
	var WidgetListStepHandler = function( $scope, $ ) {
		if( $scope.find('.list-step').length ) {
			$scope.find('.list-step').each(function ( $index ) {
				ceaListStep(this);
			});
		}
	}
	
	/* Switcher Content Handler */
	var WidgetSwitcherContentHandler = function( $scope, $ ) {
		if( $scope.find(".switcher-content-wrapper").length ){
			$scope.find('.switcher-content-wrapper').each(function( index ) {
				ceaSwitcherContent( this );
			});
			
			//Call Every Element
			CeaCallEveryElement($scope)
		}
	};
	
	/* Offcanvas Handler */
	var WidgetCeaOffcanvasHandler = function( $scope, $ ) {
		if( $scope.find(".cea-offcanvas-elementor-widget").length ){
			$scope.find('.cea-offcanvas-elementor-widget').each(function( index ) {
				ceaOffcanvasContent( this );
			});
						
			$(document).find(".cea-offcanvas-close").on( "click", function(){
				$("body").removeClass("cea-offcanvas-active");	
				$(this).parent(".cea-offcanvas-wrap").removeClass("active");
				var ani_type = $(this).parent(".cea-offcanvas-wrap").data("canvas-animation");
				if( ani_type == 'left-push' ){
					$("body").css({"margin-left":"", "margin-right":""});
				}else if( ani_type == 'right-push' ){
					$("body").css({"margin-left":"", "margin-right":""});
				}	
				return false;
			});
		}
	};

	var WidgetSectionTitleHandler = function( $scope, $ ) {
		if( $scope.find('.section-title').length ) {
			$scope.find(".section-title").each(function( index ) {
				ceaSectionTitle( this );
			});
		}
	}
	
	/* Video playlist Handler */
	var WidgetVideoPlaylistHandler = function( $scope, $ ) {
		if( $scope.find('.cea-video-audio-widget').length ){
			$scope.find('.cea-video-audio-widget').each(function( index ) {
				ceaVideoPlaylist( this );
			});
		}	
	}
	/* Tilt Handler */
	var WidgetTiltHandler = function( $scope, $ ) {
		if( $scope.find(".cea-tilt").length ){
			$scope.find( '.cea-tilt' ).each(function() {
				ceaTilt( this );
			});
		}
	};
	
	/* All in One Handler */
	var WidgetAllInOneHandler = function( $scope, $ ) {		
		CeaCallEveryElement($scope);			
	};
	
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		
		// Common Shortcodes
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaanimatedtext.default', WidgetAnimateTextHandler );		
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceacircleprogress.default', WidgetCircleProgressHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceacounter.default', WidgetCounterUpHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceadaycounter.default',WidgetDayCounterHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/imagebeforeafter.default', WidgetImageBeforeAfterHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceamailchimp.default', WidgetMailchimpHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaimagegrid.default', WidgetOwlCarouselHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaimagegrid.default', WidgetPoupHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceasliderwidget.default', WidgetOwlCarouselHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceasliderwidget.default', WidgetPoupHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceamodalpopup.default', WidgetModalPopupHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceatimeline.default', WidgetAgonHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceagooglemap.default', WidgetCEAMapHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceatimelineslide.default', WidgetTimelineSliderHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceachart.default', WidgetChartHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/carousel3d.default', WidgetCloud9CarouselHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/raindrops.default', WidgetRainDropsHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceapopover.default', WidgetPopoverHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceapopupanything.default', WidgetPopupAnythingHandler );	
		//elementorFrontend.hooks.addAction( 'frontend/element_ready/ceamodalpopup.default', WidgetModalPopupHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/togglecontent.default', WidgetToggleContentHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceatab.default', WidgetCeaTabHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaaccordion.default', WidgetCeaAccordionHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceadrawsvg.default', WidgetCeaDrawSVGHandler );
		elementorFrontend.hooks.addAction('frontend/element_ready/ceatextimage.default', WidgetTextImageHandler);
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaimagezoom.default', WidgetImageZoomHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cealiststep.default', WidgetListStepHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaswitchercontent.default', WidgetSwitcherContentHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaoffcanvas.default', WidgetCeaOffcanvasHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceasectiontitle.default', WidgetSectionTitleHandler );
		
		// Post Type Shortcodes
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaposts.default', WidgetIsotopeHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaposts.default', WidgetOwlCarouselHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cearecentpopular.default', WidgetRecentPopularToggleHandler );
		
		//Isotopes for custom post types
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaservice.default', WidgetIsotopeHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceateam.default', WidgetIsotopeHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceatestimonial.default', WidgetIsotopeHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaevent.default', WidgetIsotopeHandler );
		
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceafeaturebox.default', WidgetTiltHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceacounter.default', WidgetTiltHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaimagegrid.default', WidgetTiltHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceasliderwidget.default', WidgetTiltHandler );
		
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaevent.default', WidgetTiltHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceateam.default', WidgetTiltHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaservice.default', WidgetTiltHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceatestimonial.default', WidgetTiltHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaportfolio.default', WidgetTiltHandler );
		
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceateam.default', WidgetOwlCarouselHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaevent.default', WidgetOwlCarouselHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceatestimonial.default', WidgetOwlCarouselHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaportfolio.default', WidgetIsotopeHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaportfolio.default', WidgetOwlCarouselHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaportfolio.default', WidgetPoupHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceaservice.default', WidgetOwlCarouselHandler );
		
		// Container Related Shortcodes
		elementorFrontend.hooks.addAction( 'frontend/element_ready/section', SectionCustomOptionsHandler ); 
		elementorFrontend.hooks.addAction( 'frontend/element_ready/container', SectionContainerOptionsHandler ); 
		elementorFrontend.hooks.addAction( 'frontend/element_ready/column', ColumnCustomOptionsHandler );
	
		//All in one handler		
		elementorFrontend.hooks.addAction( 'frontend/element_ready/contentcarousel.default', WidgetAllInOneHandler );

		// Content Parallax
		elementorFrontend.hooks.addAction( 'frontend/element_ready/section', SectionContentParallax );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/column', SectionContentParallax );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/container', SectionContentParallax );
		
		elementorFrontend.hooks.addAction( 'frontend/element_ready/section', WidgetMousePointerHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/column', WidgetMousePointerHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/container', WidgetMousePointerHandler );
		
		//Columns Sticky 
		elementorFrontend.hooks.addAction( 'frontend/element_ready/section', SectionColumnSticky );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/column', SectionColumnSticky );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/container', SectionColumnSticky );

		// Auto Activate 
		elementorFrontend.hooks.addAction( 'frontend/element_ready/section', SectionAutoActivate );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/column', SectionAutoActivate );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/container', SectionAutoActivate );
		
		//Row Sticky 
		elementorFrontend.hooks.addAction( 'frontend/element_ready/section', SectionRowSticky );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/column', SectionRowSticky );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/container', SectionRowSticky );
		
		elementorFrontend.hooks.addAction('frontend/element_ready/section', WidgetMousePointerHandler);
		elementorFrontend.hooks.addAction('frontend/element_ready/container', WidgetMousePointerHandler);
		elementorFrontend.hooks.addAction('frontend/element_ready/column', WidgetMousePointerHandler);
		// Text Reveal Scroll
		elementorFrontend.hooks.addAction("frontend/element_ready/section", SectionTextRevealAnimation);
		elementorFrontend.hooks.addAction("frontend/element_ready/container", SectionTextRevealAnimation);
		elementorFrontend.hooks.addAction("frontend/element_ready/column", SectionTextRevealAnimation);		

		// Horizontal Scroll
		elementorFrontend.hooks.addAction("frontend/element_ready/section", SectionHorizontalScroll);
		elementorFrontend.hooks.addAction("frontend/element_ready/container", SectionHorizontalScroll);
		elementorFrontend.hooks.addAction("frontend/element_ready/column", SectionHorizontalScroll);
    
		// Video Playlist 
		elementorFrontend.hooks.addAction( 'frontend/element_ready/ceavideoplaylist.default', WidgetVideoPlaylistHandler );

	} );
	
	$( window ).on( 'load', function() {
		if( !$("body.elementor-editor-active").length ){	
		}
	} );
	
	function CeaCallEveryElement($scope){
		$(document).find('.cea-typing-text').each(function( index ) {
			ceaAnimatedTextSettings( this, index );
		});
		
		$(document).find('.isotope').each(function() {
			ceaIsotopeLayout( this );
		});
		
		if( $(document).find('.circle-progress-circle').length ){
			var circle_ele = $(document).find('.circle-progress-circle');
			ceaCircleProgresSettings(circle_ele);
		}
		
		$(document).find('.owl-carousel').each(function() {
			ceaOwlSettings( this );
		});
		
		if( $(document).find('.counter-up').length ){
			var counter_ele = $(document).find('.counter-up');
			ceaCounterUpSettings(counter_ele);
		}
		
		$(document).find('.day-counter').each(function() {
			ceaDayCounterSettings( this );
		});	
		
		/* Chart Handler */
		$(document).find('.pie-chart').each(function() {
			ceaPieChartSettings( this );
		});		
		$(document).find('.line-chart').each(function() {
			ceaLineChartSettings( this );
		});		

		if( $(document).find('.modal-popup-wrapper.page-load-modal').length ){
			var modal_id = $(document).find('.modal-popup-wrapper.page-load-modal .modal').attr("id");
			$('#'+modal_id).modal('show');
		}
		
		if( $(document).find(".cloud9-carousel").length ){
			$(document).find( '.cloud9-carousel' ).each(function() {
				ceaCloud9Carousel( this );
			});
		}
		
		if( $(document).find(".canvas_agon").length ){
			$(document).find( '.canvas_agon' ).each(function() {
				ceaAgon( this );
			});
		}
		
		if( $(document).find('.cd-horizontal-timeline').length ){
			var cur_ele = $(document).find('.cd-horizontal-timeline');
			var line_dist = cur_ele.data("distance") ? cur_ele.data("distance") : 60;
			cur_ele.zozotimeline({
				distance: line_dist
			});
		}
		
		if( $(document).find(".ceagmap").length ){
			initCEAGmap();
		}
	}
	
	function cea_scroll_animation(c_elem){
		setTimeout( function() {
			var anim_time = 300;
			$(c_elem).find('.cea-animate:not(.run-animate)').each( function() {
				
				var elem = $(this);
				var bottom_of_object = elem.offset().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				
				if( bottom_of_window > bottom_of_object ){
					setTimeout( function() {
						elem.addClass("run-animate");
					}, anim_time );
				}
				anim_time += 300;
				
			});
		}, 300 );
	}
	

	function ceaOffcanvasContent( offcanvas_ele ){
		var offcanvas_ele = $(offcanvas_ele);	

		if( $(document).find(".cea-offcanvas-id-to-element").length && ! $("body.elementor-editor-active").length ){
			$(document).find(".cea-offcanvas-id-to-element").each(function( index ) {
				var offcanvas_id_ele = $(this).data("id");
				var clone_offcanvas = $("#"+offcanvas_id_ele).clone();
				$(document).find("#"+offcanvas_id_ele).remove();
				$(this).replaceWith(clone_offcanvas);
			});
		}
		
		$(offcanvas_ele).find(".cea-offcanvas-trigger").on( "click", function(){
			$("body").toggleClass("cea-offcanvas-active");
			var offcanvas_id = $(this).data("offcanvas-id");
			if( $('#'+offcanvas_id).length ){
				$('#'+offcanvas_id).addClass("active");
				var ani_type = $('#'+offcanvas_id).data("canvas-animation");
				if( ani_type == 'left-push' ){
					$("body").css({"margin-left": $('#'+offcanvas_id).outerWidth() +"px", "margin-right": "-"+ $('#'+offcanvas_id).outerWidth() +"px"});
				}else if( ani_type == 'right-push' ){
					$("body").css({"margin-left": "-"+ $('#'+offcanvas_id).outerWidth() +"px", "margin-right": $('#'+offcanvas_id).outerWidth() +"px"});
				}
			}
			setTimeout( function() {
				CeaCallEveryElement(document);
			}, 350 );
			return false;
		});
	}
	
	function ceaSectionTitle( title_ele ) {
		var title_ele = $(title_ele);
		var animationTitle = title_ele.attr('data-animation');

		const observer = new IntersectionObserver(function (entries) {
      		entries.forEach(function (entry) {
        		if (entry.isIntersecting) {
					console.log("Animation Triggered");
          			$(entry.target).addClass('animated-section-title');
        		}
      		});
    	}, {
      		threshold: 0.5
    	});
		observer.observe(title_ele[0]);

		if( animationTitle != 'none' ) {
			var textSplitter = new SplitType(title_ele, {
                splitTypeTypes: ["words", "chars"],
            });

			const tl = gsap.timeline({
				duration: 5,
				scrollTrigger: {
					trigger: title_ele,
                    start: "top center+=45%",
                    end: "top center+=20%",
                    scrub: true,
				}
			});
			$(".word-slice-up").each(function (index) {
				tl.from(
					$(this).find(".word"),
					{
						opacity: 0,
						y: '100',
						stagger: { amount: 20 },
					}
				);
            });
			$(".word-rotate-in").each(function (index) {
				tl.from(
					$(this).find(".word"),
					{
						rotation: -90,
						opacity: 0,
						scale: 0.5,
						stagger: { amount: 20 },
					}
				);
            });
			$(".word-slide-right").each(function (index) {
				tl.from(
					$(this).find(".word"),
					{
						opacity: 0,
						x: '-100',
						stagger: { amount: 20 },
					}
				);
            });
			$(".letter-slide-up").each(function (index) {
				tl.from(
					$(this).find(".char"),
					{
						opacity: 0,
						yPercent: 100,
						stagger: { amount: 20 },
					}
				);
            });
			$(".letter-slide-down").each(function (index) {
				tl.from(
					$(this).find(".char"),
					{
						opacity: 0,
						yPercent: '-120',
						stagger: { amount: 20 },
					}
				);
            });
			$(".letter-fade-in").each(function (index) {
                tl.from(
					$(this).find(".char"),
					{
						opacity: 0,
						stagger: { amount: 20 },
					}
				);
			});
			$(".letter-fade-in-random").each(function (index) {
                tl.from(
					$(this).find(".char"),
					{
						opacity: 0,
						stagger: { amount: 20, from: "random" },
					}
				);
            });
			if( title_ele.hasClass("cea-nrml") ) {
				var letter_animate = title_ele.find(".char");
				letter_animate.each( function(index){
					$(this).css({
						animationDelay: (index + 1) * 0.05 + "s",
					});
				});
			}
		}

	}

	function refreshAnimations() {
    	ScrollTrigger.refresh(); // Refresh GSAP ScrollTrigger
	}

	// Listen for window resize or focus events
	window.addEventListener("resize", refreshAnimations);
	window.addEventListener("focus", refreshAnimations);

	function ceaSwitcherContent( switcher_ele ){
		var switcher_ele = $(switcher_ele);
		
		if( switcher_ele.find(".cea-switcher-id-to-element").length && ! $("body.elementor-editor-active").length ){
			switcher_ele.find(".cea-switcher-id-to-element").each(function( index ) {
				var switcher_id_ele = $(this).data("id");
				var clone_tab = $("#"+switcher_id_ele).clone();
				$(document).find("#"+switcher_id_ele).remove();
				$(this).replaceWith(clone_tab);
			});
		}
		
		$(switcher_ele).find(".switch-checkbox").on( "change", function(){
			$(switcher_ele).find(".cea-switcher-content > div").fadeOut(0);
			if( this.checked ){
				$(this).parents("ul").find("li").removeClass("switcher-active");
				$(this).parents("ul").find(".cea-secondary-switch").addClass("switcher-active");
				$(switcher_ele).find(".cea-switcher-content > div.cea-switcher-secondary").fadeIn(350);
			}else{
				$(this).parents("ul").find("li").removeClass("switcher-active");
				$(this).parents("ul").find(".cea-primary-switch").addClass("switcher-active");
				$(switcher_ele).find(".cea-switcher-content > div.cea-switcher-primary").fadeIn(350);
			}
		});	
	}
	
	function ceaAccordionContent(accordion_ele, index) {
		var accordion_ele = $(accordion_ele);
		
		if (accordion_ele.find(".cea-accordion-id-to-element").length && !$("body.elementor-editor-active").length) {
			accordion_ele.find(".cea-accordion-id-to-element").each(function(index) {
				var accordion_id_ele = $(this).data("id");
				var clone_tab = $("#" + accordion_id_ele).clone();
				$(document).find("#" + accordion_id_ele).remove();
				$(this).replaceWith(clone_tab);			
			});
		}
		
		$(accordion_ele).find(".cea-accordion-header a").on("click", function() {
			var cur_tab = $(this);
			var accordion_id = $(cur_tab).attr("href");
			var accordion_wrap = $(cur_tab).parents(".cea-accordion-elementor-widget");
	
			if ($(accordion_wrap).data("toggle") == 1) {
				$(accordion_wrap).find(".cea-accordion-header a").toggleClass("active");
				$(accordion_wrap).find(accordion_id).slideToggle(350);
			} else {
				if (!cur_tab.hasClass("active")) {				
					$(accordion_wrap).find(".cea-accordion-header a").removeClass("active");
					$(cur_tab).addClass("active");
					$(accordion_wrap).find(".cea-accordion-content").slideUp(350);
					$(accordion_wrap).find(accordion_id).slideDown(350);
				} else {
					$(cur_tab).removeClass("active");
					$(accordion_wrap).find(".cea-accordion-content").slideUp(350);
				}
			}
			return false;
		});
	
		var randId = index + 1;

		$("#search-input-" + randId).on("keyup", function() {
			var searchTerm = $(this).val().toLowerCase();
			$("#cea-accordion-" + randId + " .cea-accordion").each(function() {
				var questionText = $(this).find(".cea-accordion-header a").text().toLowerCase();
				var answerText = $(this).find(".cea-accordion-content .cea-accordion-pane").text().toLowerCase();
				if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		});
	}

	function ceaDrawSVGContent( drawsvg_ele ) {
		var drawsvg_ele = $(drawsvg_ele);

		let isScrolling;

		window.addEventListener("scroll", function () {

			var scrollDraw = document.querySelector('.scrolled');
			scrollDraw.classList.replace('scrolled', 'scroll-now');

			window.clearTimeout(isScrolling);

			isScrolling = setTimeout(function () {
				scrollDraw.classList.replace('scroll-now', 'scrolled');
			}, 150);

		});

		let path = document.querySelector( '.cea-draw-svg-widget span svg path' );
		let pathLen = path.getTotalLength();

	}

	function ceaTextImageContent(textimage_ele) {

		var textimage_ele = $(textimage_ele);
		var settings = textimage_ele.data("settings");
		var ele_cls = settings.element_cls;
		var wid_cls = settings.widget_cls;
		var img_animation = settings.img_animation;

		var cursorContainer = $('<div class="cursor-image animated ' + img_animation + ' ' + ele_cls + '"></div></div>');
		$('body').append(cursorContainer);
		var widgetContainer = $('<div class="' + wid_cls + '">');
		cursorContainer.html(widgetContainer);

		const key = [];

		for (const i in settings.link_image) {
			key.push(i);
		}

		key.forEach((value) => {

			textimage_ele.find('.' + value).on("mousemove", function (event) {
				widgetContainer.html('<img class="cursor-photo" src="' + settings.link_image[value] + '" alt="img-' + value + '">');
				cursorContainer.css({
					top: event.clientY + 'px',
					left: event.clientX + 'px',
					display: 'block',
				});
			});

			textimage_ele.find('.' + value).on("mouseleave", function () {
				cursorContainer.css({
					display: 'none',
				});
			})

		});

	}
	
	function ceaTabContent( tabs_ele ){
		var tabs_ele = $(tabs_ele);
		
		if( tabs_ele.find(".cea-tab-id-to-element").length && ! $("body.elementor-editor-active").length ){
			tabs_ele.find(".cea-tab-id-to-element").each(function( index ) {
				var tab_id_ele = $(this).data("id");
				var clone_tab = $("#"+tab_id_ele).clone();
				$(document).find("#"+tab_id_ele).remove();
				$(this).replaceWith(clone_tab);			
			});
		}
		
		$(tabs_ele).find(".cea-tabs a").on( "click", function(){
			var cur_tab = $(this);
			var tab_id = $(cur_tab).attr("href");
			$(cur_tab).parents(".cea-tabs").find("a").removeClass("active");
			$(cur_tab).addClass("active");
			var tab_content_wrap = $(cur_tab).parents(".cea-tabs").next(".cea-tab-content");
			$(tab_content_wrap).find(".cea-tab-pane").fadeOut(0);
			$(tab_content_wrap).find(".cea-tab-pane").removeClass("active");
			$(tab_content_wrap).find(tab_id).fadeIn( 350, function(){
				$(tab_content_wrap).find(tab_id).addClass("active");
			});
			
			return false;
		});
	}
	
	function ceaToggleContent( toggle_ele ){
		var toggle_ele = $(toggle_ele).find(".toggle-content");	
		$(toggle_ele).css('max-height', '');
		$(toggle_ele).removeClass("toggle-content-shown");
		
		var c = parseFloat($(toggle_ele).css("line-height"));
		var line_height = c.toFixed(2);
		var data_hght = $(toggle_ele).data("height");
		data_hght = data_hght ? data_hght : 5;
		var toggle_hgt = data_hght * line_height;
		toggle_hgt = toggle_hgt.toFixed(2);
		toggle_hgt = toggle_hgt + 'px';
		
		var org_hgt = $(toggle_ele).height();
		$(toggle_ele).css('max-height', toggle_hgt);
		$(toggle_ele).addClass("toggle-content-shown");
		var btn_txt_wrap = $(toggle_ele).parents(".toggle-content-inner").find( ".toggle-btn-txt" );
		var btn_org_txt = $(btn_txt_wrap).text();
		var btn_atl_txt = $(toggle_ele).parents(".toggle-content-inner").find( ".toggle-content-trigger" ).data("less");
		$(toggle_ele).parents(".toggle-content-inner").find( ".toggle-content-trigger" ).unbind( "click" );
		$(toggle_ele).parents(".toggle-content-inner").find( ".toggle-content-trigger" ).bind( "click", function(e){			
			event.preventDefault();
			$(toggle_ele).toggleClass("height-expandable");

			$(toggle_ele).parent(".toggle-content-inner").find('.toggle-content-trigger .button-inner-down').fadeToggle(0);
			$(toggle_ele).parent(".toggle-content-inner").find('.toggle-content-trigger .button-inner-up').fadeToggle(0);
			if( $(toggle_ele).hasClass("height-expandable") ){
				$(toggle_ele).css('max-height', org_hgt);
				$(btn_txt_wrap).text(btn_atl_txt);				
			}else{
				$(toggle_ele).css('max-height', toggle_hgt);
				$(btn_txt_wrap).text(btn_org_txt);
			}			
		});
	}

	function ceazozotimeline(cur_ele){
		var cur_ele = $(cur_ele);
		var line_dist = cur_ele.data("distance") ? cur_ele.data("distance") : 60;
		cur_ele.zozotimeline({
			distance: line_dist
		});
	}
		
	function ceaContentSlider( slide_ele ){
		var slide_ele = $(slide_ele);
		var slide_json = JSON.parse(decodeURIComponent(slide_ele.attr("data-cea-slide")));
		var children_ele = slide_ele.children(".elementor-column-wrap").children(".elementor-widget-wrap");
		$(children_ele).addClass("owl-carousel");
		ceaOwlJsonSettings(children_ele, slide_json);
	}
	
	function ceaSectionRainDrops( rd_ele ){
		rd_ele.addClass("section-raindrops-actived");
		var rd_json = JSON.parse(decodeURIComponent(rd_ele.attr("data-cea-raindrops")));
		rd_ele.append('<div class="cea-raindrops-wrap"></div>');
		
		var rd_color = rd_json.rd_color;
		var rd_height = rd_json.rd_height;
		var rd_speed = rd_json.rd_speed;
		var rd_freq = rd_json.rd_freq;
		var rd_density = rd_json.rd_density;
		var rd_id = rd_json.id;
		var rd_pos = rd_json.rd_pos;
		
		if( rd_pos == "top" ){
			rd_ele.find(".cea-raindrops-wrap").css({"top" : "-"+ rd_height +"px"});
		}else{
			rd_ele.find(".cea-raindrops-wrap").css({"bottom" : "0"});
		}
		
		rd_ele.find(".cea-raindrops-wrap").css("height", rd_height + "px");
		
		var rain_ele = rd_ele.find(".cea-raindrops-wrap").raindrops({
			color: rd_color,
			canvasHeight: rd_height,
			rippleSpeed: rd_speed,
			frequency: rd_freq,
			density: rd_density,
			positionBottom: '0'
		});
	}

    var SectionRowSticky = function ($scope, $) {
        if ($(".sticky-row").length) {
			var headerHeight = $('.site-header').innerHeight();
			var windowWidth = $(window).width();
			headerHeight = headerHeight ? headerHeight + 12 : 113;
			if (windowWidth < 768) {
				headerHeight = 60;
			} else if (windowWidth < 783) {
				headerHeight = 105;
			} else if (windowWidth < 1025) {
				headerHeight = 92;
			}
            $(".sticky-row").each(function () {
                var stickyRow = $(this);
                stickyRow.ceaRowSticky({
                    additionalMarginTop: headerHeight,
                    additionalMarginBottom: 30,
                });
            });
        }
    };

	var SectionAutoActivate = function ( $scope, $ ) {
		if( $(".auto-activate").length) {
			$(".auto-activate").each( function() {
				var autoActivate = $(this);
				var hideInMobile = autoActivate.data('auto-hide');
				if ( hideInMobile == 'yes' ) {
					autoActivate.addClass('hide-in-sm');
				}
				var autoItems = autoActivate.find(".elementor-widget-container");
				autoItems.addClass('auto-items');
				autoItems.each( function( index ) {
					var autoItem = $(this);
					autoItem.attr('data-target', 'active-content-' + (index+1));
				});

				autoItems[0].classList.add('active-auto');

				var contentContainer = autoActivate.siblings();
				var contentItems = contentContainer.find('.e-child');
				contentItems.each( function( index ) {
					var contentItem = $(this);
					contentItem.attr('id', 'active-content-' + (index+1));
				});
				
				function checkContentVisible() {
					let activeHeight = $(".active-auto").outerHeight();
					const scrollPosition = $(window).scrollTop() + activeHeight;
					let activeNow = null;

					contentItems.each(function (index) {
						const element = $(this);
						const element_top = element.offset().top;
						const element_bottom = element_top + element.outerHeight();

						if (scrollPosition >= element_top && scrollPosition < element_bottom) {
                			activeNow = element.attr('id');
            			}

						if( activeNow ) {
							autoItems.removeClass('active-auto');
							autoItems.each( function() {
								var autoItem = $(this);
								if( autoItem.data('target') == activeNow ) {
									autoItem.addClass('active-auto');
								}
							});
						}

					});
				}
				$(window).on('scroll', checkContentVisible );
			});
		} 
	}

	var SectionContentParallax = function ($scope, $) {
    	if ($('.content-parallax-yes').length) {
    	    $('.content-parallax-yes').each(function () {
    	        var contentParallax = $(this);
				var parallaxData = contentParallax.data("parallax-ctrl");

				var dataDepth = parallaxData['data_depth'];
				var parallaxIndex = parallaxData['parallax_index'];
				var parallaxHoverOnly = parallaxData['parallax_hover_only'];
				var parallaxScaleX = parallaxData['scale_x'];
				var parallaxScaleY = parallaxData['scale_y'];
				var parallaxFrictionX = parallaxData['friction_x'];
				var parallaxFrictionY = parallaxData['friction_y'];
				
				if( contentParallax.find('.e-con-inner') ) {
					contentParallax.find('.e-con-inner').css({
						width: parallax_full_width + 'vw',
					});
					contentParallax.find('.e-con-inner').removeClass('e-con-inner');
				}

				contentParallax.css({ 'z-index': parallaxIndex });
				var parallexContainer = contentParallax.find(".elementor-widget");
            	// Ensure the container has the required class for Parallax.js
				parallexContainer.addClass('parallax-container');

            	// Find the inner content to apply the parallax effect
            	var parallaxItem = contentParallax.find('.elementor-widget-container');
				if( contentParallax.hasClass('parallax-img-full-width') ) {
					var parallax_full_width = parallaxData['img_full_width'];
					var parallax_full_left = parallaxData['img_full_left'];
					contentParallax.css({
						left: '-' + parallax_full_left + '%',
					});
					contentParallax.css({
						width: parallax_full_width + 'vw',
					});
					parallexContainer.css({
						width: parallax_full_width + 'vw',
					});
					parallaxItem.css({
						width: parallax_full_width + 'vw',
					});
					parallaxItem.find('img').css({
						width: parallax_full_width + 'vw',
					});
				}
            	// Set the data-depth attribute for parallax effect
            	parallaxItem.attr('data-depth', dataDepth);
				// Initialize Parallax.js
            	var parallaxInstance = new Parallax(parallexContainer[0], {
            	    relativeInput: true,
					hoverOnly: parallaxHoverOnly,
					scalarX: parallaxScaleX,
  					scalarY: parallaxScaleY,
  					frictionX: parallaxFrictionX,
  					frictionY: parallaxFrictionY,
            	});

        	});
    	}
	};

	function ceaSectionParallax( pr_ele ){
		
		var pr_ele = $(pr_ele);
		var pr_json = JSON.parse(decodeURIComponent(pr_ele.attr("data-cea-parallax-data")));
		
		var parallax_ratio = pr_json.parallax_ratio;
		var parallax_img = pr_json.parallax_image;

		pr_ele.prepend('<div class="cea-parallax" data-cea-parallax data-speed="'+ parallax_ratio +'" style="background-image:url('+ parallax_img +')"></div>');
		
		// create variables
		var $fwindow = $(window);
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		// on window scroll event
		$fwindow.on('scroll resize', function() {
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		});

		// for each of background parallax element
		$(pr_ele).find('.cea-parallax').each(function(){
			var $backgroundObj = $(this);
			var bgOffset = parseInt($backgroundObj.offset().top);
			var yPos;
			var coords;
			var speed = ($backgroundObj.data('speed') || 0 );

			$fwindow.on('scroll resize', function() {
				yPos = - ((scrollTop - bgOffset) / speed);
				coords = '10% '+ yPos + 'px';

				$backgroundObj.css({ backgroundPosition: coords });
			}); 
		}); 

		// triggers winodw scroll for refresh
		$fwindow.trigger('scroll');
		
	}
	
	function ceaSectionFloatParallax( pr_ele ){
		
		var pr_ele = $(pr_ele);
		var pr_json = JSON.parse(decodeURIComponent(pr_ele.attr("data-cea-float")));
		var data_id = pr_ele.attr("data-id");
		var fload_id = data_id;

		$.each( pr_json, function(idx, obj) {
			var float_title = obj.float_title;
			var float_img = obj.float_img;
			var float_left = obj.float_left;
			var float_top = obj.float_top;
			var float_distance = obj.float_distance;
			var float_animation = obj.float_animation;
			var float_mouse = obj.float_mouse;
			var float_width = obj.float_width;
			
			var classname = float_animation != '0' ? ' floating-animate-model-' + float_animation : '';
			
			pr_ele.prepend('<div id="float-parallax-'+ fload_id +'" class="float-parallax'+  classname  +'" data-mouse="'+  float_mouse  +'" data-left="'+  float_left  +'" data-top="'+  float_top  +'" data-distance="'+  float_distance  +'"><img alt="'+  float_title  +'" src="'+ float_img  +'" /></div>');

			$("#float-parallax-"+fload_id).ceaparallax({
				t_top: float_top,
				t_left: float_left,
				x_level: float_distance,
				y_level: float_distance,
				mouse_animation: float_mouse,
				ele_width: float_width
			});

			fload_id++;
		}); // each end
		
	}
	
	function ceaModalPopup( popup_ele ){
		var popup_ele = $(popup_ele);
		popup_ele.magnificPopup({
			type: 'inline',
			preloader: false,
			modal: true,
			mainClass: 'mfp-fade',
			removalDelay: 300
		});
	}

	// Video Playlist
	function ceaVideoPlaylist(){
		(function($){
			$(document).ready(function(){
				$('.cea-video-item').on('click', function(){
					var videoId = $(this).data('video-id');
					$('#cea-video-frame').attr('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
					$('.cea-video-item').removeClass('active');
					$(this).addClass('active');
				});
				$('.cea-upload-playlist-item').on('click', function(e){
					e.preventDefault();
					const mediaUrl = $(this).data('media-url');
					const mediaTitle = $(this).data('title');
					const mediaImage = $(this).data('image');

					$('#cea-audio-player').attr('src', mediaUrl).trigger('play');
					$('#cea-audio-title').text(mediaTitle);
					$('#cea-audio-thumbnail').attr('src', mediaImage);

					$('.cea-upload-playlist-item').removeClass('active');
					$(this).addClass('active');
				});
				$('.cea-video-playlist-item').on('click', function(e){
					e.preventDefault();
					const mediaUrl = $(this).data('media-url');
					const mediaTitle = $(this).data('title');

					$('#cea-video-player').attr('src', mediaUrl).trigger('play');
					$('#cea-video-title').text(mediaTitle);

					$('.cea-video-playlist-item').removeClass('active');
					$(this).addClass('active');
				});
			});
		})(jQuery);

		document.addEventListener('DOMContentLoaded', function () {
			const videoFrame = document.getElementById('cea-video-frame');
			const items = document.querySelectorAll('.cea-video-item');
			items.forEach(item => {
				item.addEventListener('click', function () {
					const videoId = this.getAttribute('data-video-id');
					videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
					items.forEach(i => i.classList.remove('active'));
					this.classList.add('active');
				});
			});
		});

		document.addEventListener("DOMContentLoaded", function() {
			const videoItems = document.querySelectorAll(".cea-vimeo-item");
			const iframe = document.getElementById("cea-vimeo-frame");
			videoItems.forEach(item => {
				item.addEventListener("click", function() {
					const newUrl = this.getAttribute("data-vimeo-url") + "?autoplay=1";
					videoItems.forEach(i => i.classList.remove("active"));
					this.classList.add("active");
					iframe.src = newUrl;
				});
			});
		});
	}
	
	function ceaTilt( tilt_ele ){
		var tilt_ele = $(tilt_ele);
		var _max_tilt = tilt_ele.data("max_tilt") ? tilt_ele.data("max_tilt") : 20;
		var _tilt_perspective = tilt_ele.data("tilt_perspective") ? tilt_ele.data("tilt_perspective") : 500;
		var _tilt_scale = tilt_ele.data("tilt_scale") ? tilt_ele.data("tilt_scale") : 1.1;
		var _tilt_speed = tilt_ele.data("tilt_speed") ? tilt_ele.data("tilt_speed") : 400;
		var _tilt_transition = tilt_ele.data("tilt_trans") ? tilt_ele.data("tilt_trans") : false;
		
		const cea_tilt = $(tilt_ele).tilt({
			maxTilt: _max_tilt,
			perspective: _tilt_perspective,
			scale: _tilt_scale,
			speed: _tilt_speed,
			transition: _tilt_transition
		});
	}
	
	function ceaPopupAnything( popup_ele ){
		var popup_ele = $(popup_ele);
		popup_ele.magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			/*callbacks: {
				open: function() {
					$($(this.items).find('video')[0]).each(function(){this.player.load()});
				},
				close: function() {
					$($(this.items).find('video')[0]).each(function(){this.player.pause()});
				}
			}*/
			iframe: {
			  markup: '<div class="mfp-iframe-scaler">'+
						'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					  '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

			  patterns: {
				youtube: {
				  index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

				  id: 'v=', // String that splits URL in a two parts, second part should be %id%
				  // Or null - full URL will be returned
				  // Or a function that should return %id%, for example:
				  // id: function(url) { return 'parsed id'; }

				  src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
				},
				vimeo: {
				  index: 'vimeo.com/',
				  id: '/',
				  src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
				  index: '//maps.google.',
				  src: '%id%&output=embed'
				}
				// you may add here more sources
			  },

			  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
			}
		});
	}
	
	function ceaPopover( popover_ele ){
		var popover_ele = $(popover_ele);
		var evnt_name = popover_ele.attr("data-event") ? popover_ele.attr("data-event") : 'hover';
		if( evnt_name == 'hover' ){ 
			popover_ele.on( 'mouseover', function ( e ) {
				e.preventDefault();
				$(this).parents(".popover-wrapper").addClass("popover-active");
			}).on( 'mouseout', function ( e ) {
				e.preventDefault();
				$(this).parents(".popover-wrapper").removeClass("popover-active");
			});
		}else{
			popover_ele.on( 'click', function ( e ) {
				e.preventDefault();
				$(this).parents(".popover-wrapper").toggleClass("popover-active");
			})
		}
	}
	
	function ceaSwitchTabToggle( toggle_ele ){
		if( toggle_ele.checked ) {
			var toggle_ele = $(toggle_ele);
            toggle_ele.parents(".cea-toggle-post-wrap").addClass("cea-active-post");
        }else{
			var toggle_ele = $(toggle_ele);
			toggle_ele.parents(".cea-toggle-post-wrap").removeClass("cea-active-post");
		}
	}
		
	function ceaAgon( canvas_ele ){
		var canvas_ele = $(canvas_ele);
		var canvas = canvas_ele[0];
		var cxt = canvas.getContext("2d");
		var agon_size = canvas_ele.attr( "data-size" );
		var agon_side = canvas_ele.attr( "data-side" );
		var agon_color = canvas_ele.attr( "data-color" );
		var div_val = 1;

		switch( parseInt( agon_side ) ){
			case 3:
				div_val = 6;
			break;
			case 4:
				div_val = 4;
			break;
			case 5:
				div_val = 3.3;
			break;
			case 6:
				div_val = 3;
			break;
			case 7:
				div_val = 2.8;
			break;
			case 8:
				div_val = 2.7;
			break;
			case 9:
				div_val = 2.6;
			break;
			case 10:
				div_val = 2.5;
			break;
		}

		// hexagon
		var numberOfSides = parseInt( agon_side ),
			size = parseInt( agon_size ),
			Xcenter = parseInt( agon_size ),
			Ycenter = parseInt( agon_size ),
			step  = 2 * Math.PI / numberOfSides,//Precalculate step value
			shift = (Math.PI / div_val);//(Math.PI / 180.0);// * 44;//Quick fix ;)

		cxt.beginPath();

		for (var i = 0; i <= numberOfSides;i++) {
			var curStep = i * step + shift;
		   cxt.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		}

		/* Direct Output */
		cxt.fillStyle = agon_color;
		cxt.fill();
	}
	
	function initCEAGmap() {
		
		var map_styles = '{ "Aubergine" : [	{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}], "Silver" : [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}], "Retro" : [{"elementType":"geometry","stylers":[{"color":"#ebe3cd"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#523735"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f1e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9b2a6"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#dcd2be"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ae9e90"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#93817c"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#a5b076"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#447530"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#f5f1e6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fdfcf8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f8c967"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e9bc62"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e98d58"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#db8555"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#806b63"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#8f7d77"}]},{"featureType":"transit.line","elementType":"labels.text.stroke","stylers":[{"color":"#ebe3cd"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b9d3c2"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#92998d"}]}], "Dark" : [{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}], "Night" : [{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}] }';
		
	    var map_style_obj = JSON.parse(map_styles);

    	$(".ceagmap").each(function (index) {
        var gmap = this;
        var map_mode = $(gmap).data("map-style");
        var map_style_mode = [];

        if (map_mode === 'aubergine')
            map_style_mode = map_style_obj.Aubergine;
        else if (map_mode === 'silver')
            map_style_mode = map_style_obj.Silver;
        else if (map_mode === 'retro')
            map_style_mode = map_style_obj.Retro;
        else if (map_mode === 'dark')
            map_style_mode = map_style_obj.Dark;
        else if (map_mode === 'night')
            map_style_mode = map_style_obj.Night;
        else if (map_mode === 'custom') {
            var c_style = $(gmap).data("custom-style") ? JSON.parse($(gmap).data("custom-style")) : [];
            map_style_mode = c_style;
        }

        if ($(gmap).data("multi-map")) {
            var map_values = JSON.parse($(gmap).data("maps"));
            var map_wheel = $(gmap).data("wheel") === true;
            var map_zoom = $(gmap).data("zoom") || 14;
            var map;
            var map_stat = 1;

            map_values.forEach(function (map_value) {
                var LatLng = new google.maps.LatLng(map_value.map_latitude, map_value.map_longitude);
                var mapProp = {
                    center: LatLng,
                    scrollwheel: map_wheel,
                    zoom: map_zoom,
                    styles: map_style_mode
                };

                if (map_stat) {
                    map = new google.maps.Map(gmap, mapProp);
                    google.maps.event.addDomListener(window, 'resize', function () {
                        var center = map.getCenter();
                        google.maps.event.trigger(map, "resize");
                        map.setCenter(LatLng);
                    });
                    map_stat = 0;
                }

                var marker = new google.maps.Marker({
                    position: LatLng,
                    icon: map_value.map_marker,
                    map: map
                });

                if (map_value.map_info_opt === 'on') {
                    var contentString = '<div class="gmap-info-wrap"><h3>' + map_value.map_info_title + '</h3><p>' + map_value.map_info_address + '</p></div>';
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    marker.addListener('click', function () {
                        infowindow.open(map, marker);
                    });
                }
            });
        } else {
            var LatLng = { lat: parseFloat($(gmap).data("map-lat")), lng: parseFloat($(gmap).data("map-lang")) };
            var map_wheel = $(gmap).data("wheel") === true;
            var map_zoom = $(gmap).data("zoom") || 14;

            var mapProp = {
                center: LatLng,
                scrollwheel: map_wheel,
                zoom: map_zoom,
                styles: map_style_mode
            };
            var map = new google.maps.Map(gmap, mapProp);

            var marker = new google.maps.Marker({
                position: LatLng,
                icon: $(gmap).data("map-marker"),
                map: map
            });

            if ($(gmap).data("info") == 1) {
                var contentString = '<div class="gmap-info-wrap"><h3>' + $(gmap).data("info-title") + '</h3><p>' + $(gmap).data("info-addr") + '</p></div>';
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                });
            }

            google.maps.event.addDomListener(window, 'resize', function () {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(LatLng);
            });
        }
    });
}

	function ceaCounterUpSettings( counterup ){
		counterup.appear(function() {
			var $this = $(this),
			countTo = $this.attr( "data-count" ),
			duration = $this.attr( "data-duration" );
			$({ countNum: $this.text()}).animate({
					countNum: countTo
				},
				{
				duration: parseInt( duration ),
				easing: 'swing',
				step: function() {
					$this.text( Math.floor( this.countNum ) );
				},
				complete: function() {
					$this.text( this.countNum );
				}
			});  
		});
	}
	
	function ceaDayCounterSettings( day_counter ){
		var day_counter = $( day_counter );
		var c_date = day_counter.attr('data-date');
		day_counter.countdown( c_date, function(event) {
			if( day_counter.find('.counter-day').length ){
				day_counter.find('.counter-day h3').text( event.strftime('%D') );
			}
			if( day_counter.find('.counter-hour').length ){
				day_counter.find('.counter-hour h3').text( event.strftime('%H') );
			}
			if( day_counter.find('.counter-min').length ){
				day_counter.find('.counter-min h3').text( event.strftime('%M') );
			}
			if( day_counter.find('.counter-sec').length ){
				day_counter.find('.counter-sec h3').text( event.strftime('%S') );
			}
			if( day_counter.find('.counter-week').length ){
				day_counter.find('.counter-week h3').text( event.strftime('%w') );
			}
		});
	}
	
	function ceaPieChartSettings( chart_ele ){
		var chart_ele = $( chart_ele );
		var c_chart = $('#' + chart_ele.attr("id") );
		var chart_labels = c_chart.attr("data-labels");
		var chart_values = c_chart.attr("data-values");
		var chart_bgs = c_chart.attr("data-backgrounds");
		var chart_responsive = c_chart.attr("data-responsive");
		var chart_legend = c_chart.attr("data-legend-position");
		var chart_type = c_chart.attr("data-type");
		var chart_zorobegining = c_chart.attr("data-yaxes-zorobegining");
		
		chart_labels = chart_labels ? chart_labels.split(",") : [];
		chart_values = chart_values ? chart_values.split(",") : [];
		chart_bgs = chart_bgs ? chart_bgs.split(",") : [];
		chart_responsive = chart_responsive ? chart_responsive : 1;
		chart_legend = chart_legend ? chart_legend : 'none';
		chart_type = chart_type ? chart_type : 'doughnut';
		
		if( chart_zorobegining ){
			chart_zorobegining = {
				yAxes: [{
					ticks: {
						beginAtZero: parseInt( chart_zorobegining )
					}
				}]
			}
		}
		
		var ctx = c_chart[0].getContext('2d');
		var myChart = new Chart(ctx, {
			type: chart_type,
			data: {
				labels: chart_labels,
				datasets: [{
					label: '# of Votes',
					data: chart_values,
					backgroundColor: chart_bgs,
					borderWidth: 1
				}]
			},
			options: {
				scales: chart_zorobegining,
				responsive: parseInt( chart_responsive ),
				legend: {
					position: chart_legend,
				}
			}
		});
	}
	
	function ceaLineChartSettings( chart_ele ){
		var chart_ele = $( chart_ele );
		var c_chart = $('#' + chart_ele.attr("id") );
		var chart_labels = c_chart.attr("data-labels");
		var chart_values = c_chart.attr("data-values");
		var chart_bg = c_chart.attr("data-background");
		var chart_border = c_chart.attr("data-border");
		var chart_fill = c_chart.attr("data-fill");
		var chart_zorobegining = c_chart.attr("data-yaxes-zorobegining");
		var chart_title = c_chart.attr("data-title-display");
		var chart_responsive = c_chart.attr("data-responsive");
		var chart_legend = c_chart.attr("data-legend-position");
		
		chart_labels = chart_labels ? chart_labels.split(",") : [];
		chart_values = chart_values ? chart_values.split(",") : [];
		chart_bg = chart_bg ? chart_bg : '';
		chart_border = chart_border ? chart_border : '';
		chart_fill = chart_fill ? chart_fill : 0;
		
		chart_zorobegining = chart_zorobegining ? chart_zorobegining : 1;
		chart_title = chart_title ? chart_title : 1;
		chart_responsive = chart_responsive ? chart_responsive : 1;
		chart_legend = chart_legend ? chart_legend : 'none';
		
		var ctx = c_chart[0].getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: chart_labels,
				datasets: [{
					label: '# of Votes',
					data: chart_values,
					fill: parseInt( chart_fill ),
					backgroundColor: chart_bg,
					borderColor: chart_border,
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: parseInt( chart_zorobegining )
						}
					}]
				},
				responsive: parseInt( chart_responsive ),
				legend: {
					position: chart_legend,
				},
				title: {
					display: parseInt( chart_title ),
				}
			}
		});
	}
	
	function ceaAnimatedTextSettings( cur_ele, index ){
		var cur_ele = $(cur_ele);
		var typing_text = cur_ele.attr("data-typing") ? cur_ele.attr("data-typing") : [];
		if( typing_text ){
			typing_text = typing_text.split(",");
			
			var type_speed = cur_ele.data("typespeed") ? cur_ele.data("typespeed") : 100;
			var back_speed = cur_ele.data("backspeed") ? cur_ele.data("backspeed") : 100;
			var back_delay = cur_ele.data("backdelay") ? cur_ele.data("backdelay") : 1000;
			var start_delay = cur_ele.data("startdelay") ? cur_ele.data("startdelay") : 1000;
			var cur_char = cur_ele.data("char") ? cur_ele.data("char") : '|';
			var loop = cur_ele.data("loop") ? cur_ele.data("loop") : false;

			var typed = new Typed(cur_ele[index], {
				typeSpeed: type_speed,
				backSpeed: back_speed,
				backDelay: back_delay,
				startDelay: start_delay,
				strings: typing_text,
				loop: loop,
				fadeOut: true,
				cursorChar: cur_char,
			});
		}
	}
	
	function ceaCircleProgresSettings( circle_ele ){
		circle_ele.appear(function() {						  
			var c_circle = $( this );
			var c_value = c_circle.attr( "data-value" );
			var c_size = c_circle.attr( "data-size" );
			var c_thickness = c_circle.attr( "data-thickness" );
			var c_duration = c_circle.attr( "data-duration" );
			var c_empty = c_circle.attr( "data-empty" ) != '' ? c_circle.attr( "data-empty" ) : 'transparent';
			var c_scolor = c_circle.attr( "data-scolor" );
			var c_ecolor = c_circle.attr( "data-ecolor" ) != '' ? c_circle.attr( "data-ecolor" ) : c_scolor;
								
			c_circle.circleProgress({
				value: Math.floor( c_value ) / 100,
				size: Math.floor( c_size ),
				thickness: Math.floor( c_thickness ),
				emptyFill: c_empty,
				animation: {
					duration: Math.floor( c_duration )
				},
				lineCap: 'round',
				fill: {
					gradient: [c_scolor, c_ecolor]
				}
			}).on( 'circle-animation-progress', function( event, progress ) {
				$( this ).find( '.progress-value' ).html( Math.round( c_value * progress ) + '%' );
			});
		});
	}
	
	function ceaImageBeforeAfterSettings( c_imgc ){
		
		var c_imgc = $( c_imgc );	
		var _offset = c_imgc.attr("data-offset") ? c_imgc.attr("data-offset") : 0.5;
		var _orientation = c_imgc.attr("data-orientation") ? c_imgc.attr("data-orientation") : 'horizontal';
		var _before = c_imgc.attr("data-before") ? c_imgc.attr("data-before") : '';
		var _after = c_imgc.attr("data-after") ? c_imgc.attr("data-after") : '';
		var _noverlay = c_imgc.attr("data-noverlay") ? c_imgc.attr("data-noverlay") : false;
		var _hover = c_imgc.attr("data-hover") ? c_imgc.attr("data-hover") : false;
		var _swipe = c_imgc.attr("data-swipe") ? c_imgc.attr("data-swipe") : false;
		var _move = c_imgc.attr("data-move") ? c_imgc.attr("data-move") : false;
		
		c_imgc.zozoimgc({
			default_offset_pct: _offset,
			orientation: _orientation,
			before_label: _before,
			after_label: _after,
			no_overlay: _noverlay,
			move_slider_on_hover: _hover,
			move_with_handle_only: _swipe,
			click_to_move: _move
		});
		
	}
	
	function ceaMailchimp( mc_wrap ){
		var mc_wrap = $( mc_wrap );
		mc_wrap.on( "keyup", ".cea-mc", function ( e ) {
			mc_wrap.find('input').removeClass("must-fill");
		});
		
		mc_wrap.on( "click", ".cea-mc", function ( e ) {
			e.preventDefault();
			var c_btn = $(this);
			var mc_form = $( this ).parents('.zozo-mc-form');
			mc_wrap.find('.mc-notice-msg').removeClass("mc-success mc-failure");
			mc_wrap.find('input').removeClass("must-fill");
			if( mc_form.find('input[name="cea_mc_email"]').val() == '' ){
				mc_form.find('input[name="cea_mc_email"]').addClass("must-fill");
			}else{
				
				var mc_nounce = mc_wrap.find('input[name="cea_mc_nonce"]').val();
				
				c_btn.attr( "disabled", "disabled" );
				$.ajax({
					type: "POST",
					url: cea_ajax_var.ajax_url,
					data: 'action=cea_mailchimp&nonce='+ mc_nounce +'&'+ mc_form.serialize(),
					success: function (data) {
						//Success
						c_btn.removeAttr( "disabled" );
						if( data == 'success' ){
							mc_wrap.find('.mc-notice-msg').addClass("mc-success");
							mc_wrap.find('.mc-notice-msg').text( mc_wrap.find('.mc-notice-group').attr('data-success') );
						}else{
							mc_wrap.find('.mc-notice-msg').addClass("mc-failure");
							mc_wrap.find('.mc-notice-msg').text( mc_wrap.find('.mc-notice-group').attr('data-fail') );
						}
					},error: function(xhr, status, error) {
						c_btn.removeAttr( "disabled" );
						mc_wrap.find('.mc-notice-msg').text( mc_wrap.find('.mc-notice-group').attr('data-fail') );
					}
				});
			}
		});
	}
	
	function ceaIsotopeLayout( c_elem ){
		var c_elem = $(c_elem);
		var parent_width = c_elem.width();
		var gutter_size = c_elem.data( "gutter" );
		var grid_cols = c_elem.data( "cols" );
		var filter = '';

		var layoutmode = c_elem.is('[data-layout]') ? c_elem.data( "layout" ) : '';
		var lazyload = c_elem.is('[data-lazyload]') ? c_elem.data( "lazyload" ) : '';
		layoutmode = layoutmode ? layoutmode : 'masonry';
		lazyload = lazyload ? '0s' : '0.4s';

		if( $(window).width() < 768 ) grid_cols = 1;

		var net_width = Math.floor( ( parent_width - ( gutter_size * ( grid_cols - 1 ) ) ) / grid_cols );
		c_elem.find( ".isotope-item" ).css({'width':net_width+'px', 'margin-bottom':gutter_size+'px'});

		var cur_isotope;        
		cur_isotope = c_elem.isotope({
			itemSelector: '.isotope-item',
			layoutMode: layoutmode,
			filter: filter,
			transitionDuration: lazyload,
			masonry: {
				gutter: gutter_size
			},
			fitRows: {
			  gutter: gutter_size 
			}
		});
		
		/* Isotope filter item */
		var filter_wrap = '';
		if( $(c_elem).parent(".woocommerce").length ){
			filter_wrap = $(c_elem).parent(".woocommerce").prev(".isotope-filter");    
		}else{
			filter_wrap = $(c_elem).prev(".isotope-filter");
		}
		$(filter_wrap).find( ".isotope-filter-item" ).on( 'click', function() {
			$( this ).parents("ul.nav").find("li").removeClass("active");
			$( this ).parent("li").addClass("active");
			filter = $( this ).attr( "data-filter" );
			if( c_elem.find( ".isotope-item" + filter ).hasClass( "cea-animate" ) ){
				if( filter ){
					c_elem.find( ".isotope-item" + filter ).removeClass("run-animate");
				}else{
					c_elem.find( ".isotope-item" ).removeClass("run-animate");
				}
				cea_scroll_animation(c_elem);
			}
			cur_isotope.isotope({ 
				filter: filter
			});
			
			return false;
		});
		
		//Animate isotope items
		if( c_elem.find( ".isotope-item" ).hasClass( "cea-animate" ) ){
			cea_scroll_animation(c_elem);
			$(window).on('scroll', function(){
				cea_scroll_animation(c_elem);
			});
		}else{
			c_elem.children(".isotope-item").addClass("item-visible");
		}
		
		/* Isotope infinite */
		if( c_elem.data( "infinite" ) == 1 && $("ul.post-pagination").length ){
			
			var loadmsg = c_elem.data( "loadmsg" );
			var loadend = c_elem.data( "loadend" );
			var loadimg = c_elem.data( "loadimg" );
			
			let msnry = cur_isotope.data('isotope');
			
			cur_isotope.infiniteScroll({
				path: 'a.next-page',
				status: '.page-load-status',
				history: false
			});
			
			cur_isotope.on( 'load.infiniteScroll', function( event, response, path ) {                
				var $items = $( response ).find('.isotope-item');
				$items.css({'width':net_width+'px', 'margin-bottom':gutter_size+'px'});
				$items.imagesLoaded( function() {
					cur_isotope.append( $items );
					cur_isotope.isotope( 'insert', $items );
					cea_scroll_animation(c_elem);
					if( $items.hasClass( "cea-animate" ) ){
						cea_scroll_animation(c_elem);
					}else{
						$items.addClass("item-visible");
					}
				});
			});
			
		}

		/* Isotope resize */
		$( window ).resize(function() {
			grid_cols = c_elem.data( "cols" );
			if( $(window).width() < 768 ) grid_cols = 1;
			
			var parent_width = c_elem.width();
			net_width = Math.floor( ( parent_width - ( gutter_size * ( grid_cols - 1 ) ) ) / grid_cols );
			c_elem.find( ".isotope-item" ).css({'width':net_width+'px', 'margin-bottom':gutter_size+'px'});
			var $isot = c_elem.isotope({
				itemSelector: '.isotope-item',
				isotope: {
					gutter: gutter_size
				}
			});
			
		});
		
		$( window ).load(function() {
			$( window ).trigger("resize");
		});

	}
		
	function ceaPopupGallerySettings( c_popup ){
		$(c_popup).magnificPopup({
			delegate: '.image-gallery-link',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			gallery: {
				enabled: true
			},
		});
	}

	function ceaOwlSettings(c_owlCarousel){
		var c_owlCarousel = $(c_owlCarousel);
		var autoplayHoverPause = c_owlCarousel.data("pause-on-hover");
		var loop = c_owlCarousel.data( "loop" );
		var navRotate = c_owlCarousel.data("nav-rotate") || 0;
		var navZIndex = c_owlCarousel.data("nav-z-index") || 'auto'; 
		var margin = c_owlCarousel.data( "margin" );
		var center = c_owlCarousel.data( "center" );
		var nav = c_owlCarousel.data( "nav" );
		var dots_ = c_owlCarousel.data( "dots" );
		var items = c_owlCarousel.data( "items" );
		var items_tab = c_owlCarousel.data( "items-tab" );
		var items_mob = c_owlCarousel.data( "items-mob" );
		var duration = c_owlCarousel.data( "duration" );
		var smartspeed = c_owlCarousel.data( "smartspeed" );
		var scrollby = c_owlCarousel.data( "scrollby" );
		var autoheight = c_owlCarousel.data( "autoheight" );
		var autoplay = c_owlCarousel.data( "autoplay" );
		var rewind = c_owlCarousel.data( "lazyload");
		var rewind = c_owlCarousel.data( "rewind");
		var mouseDrag = c_owlCarousel.data( "mousedrag");
		var navprev = c_owlCarousel.data( "preview-icon" );
		var navnext = c_owlCarousel.data( "next-icon" );
		var naviconcolor = c_owlCarousel.data( "icon-color" );
		var naviconsize = c_owlCarousel.data( "icon-size" );
		var naviconbgcolor = c_owlCarousel.data( "icon-bg-color" );
		var naviconborderradius = c_owlCarousel.data( "icon-border-radius" );
		var pagination_color = c_owlCarousel.data( "pagination-color" );
		var navRotate = c_owlCarousel.data( "nav-rotate" );
		var dotsTransform = c_owlCarousel.data( "dots-rotate" );
		var nav_enable_icon_text = c_owlCarousel.data("nav-type"); 
		var nav_prev_text = c_owlCarousel.data( "prev-text" );
		var nav_next_text = c_owlCarousel.data( "next-text" );
		var nav_padding = c_owlCarousel.data( "nav-padding");
		var navTextPrev = '';
		var navTextNext = '';
		if (nav_enable_icon_text === 'nav-icon') {
			navTextPrev = '<i class="' + navprev + '" style="color:' + naviconcolor + '; font-size:' + naviconsize + 'px; background-color:' + naviconbgcolor + '; border-radius:' + naviconborderradius + '%; padding:' + nav_padding + 'px;"></i>';
			navTextNext = '<i class="' + navnext + '" style="color:' + naviconcolor + '; font-size:' + naviconsize + 'px; background-color:' + naviconbgcolor + '; border-radius:' + naviconborderradius + '%; padding:' + nav_padding + 'px;"></i>';
		} else if (nav_enable_icon_text === 'nav-text') {
			navTextPrev = '<span style="color:' + naviconcolor + '; font-size:' + naviconsize + 'px; background-color:' + naviconbgcolor + '; border-radius:' + naviconborderradius + '%; padding:' + nav_padding + 'px;">' + nav_prev_text + '</span>';
			navTextNext = '<span style="color:' + naviconcolor + '; font-size:' + naviconsize + 'px; background-color:' + naviconbgcolor + '; border-radius:' + naviconborderradius + '%; padding:' + nav_padding + 'px;">' + nav_next_text + '</span>';
		}
		
		var rtl = $( "body.rtl" ).length ? true : false;
		$(c_owlCarousel).owlCarousel({
			rewind: rewind,
			mouseDrag: mouseDrag,
			autoplayHoverPause: autoplayHoverPause,
			rtl: rtl,
			loop: loop,
			autoplayTimeout: duration,
			smartSpeed: smartspeed,
			center: center,
			margin: margin,
			nav: nav,
			dots: dots_,
			autoplay: autoplay,
			autoheight: autoheight,
			slideBy: scrollby,
			navElement: 'button type="button" name="prev-slide" role="presentation"',
			navText: [navTextPrev, navTextNext],
			responsive: {
				0: {
					items: items_mob
				},
				544: {
					items: items_tab
				},
				992: {
					items: items
				}
			},
			onInitialized: function(event) {
				var $carousel = $(event.target);
				
				// Add custom class to navigation buttons
				$carousel.find('.owl-prev').addClass('custom-prev-button');
				$carousel.find('.owl-next').addClass('custom-next-button');
		
				// Additional CSS modifications if needed
				$carousel.find('.owl-nav').css({
					'z-index': navZIndex
				});
		
				$carousel.find('.owl-dots button.owl-dot').css({
					'transform': `rotate(${dotsTransform}deg)`,
				});

			},
			onTranslate: function(event) {
				$(event.target)
					.find(".slide-title-wrapper, .slide-content-wrapper, .slider-foreground-image_1, .slider-foreground-image_2, .slider-foreground-image_3, .slider-foreground-image_4, .slider-foreground-image_5, .slider-button, .slider-button-2")
					.each(function() {
						var $element = $(this);
						var animation = $element.data("animation");
						$element.removeClass("animate__" + animation);
					});
			},
			onTranslated: function(event) {
				$(event.target)
					.find(".slide-title-wrapper, .slide-content-wrapper, .slider-foreground-image_1, .slider-foreground-image_2, .slider-foreground-image_3, .slider-foreground-image_4, .slider-foreground-image_5, .slider-button, .slider-button-2")
					.each(function() {
						var $element = $(this);
						var animation = $element.data("animation");
						var delay = $element.data("delay") || 0;
						setTimeout(function() {
							$element.addClass("animate__" + animation);
						}, delay);
					});
			}
		});	
	}
	
	jQuery.fn.redraw = function() {
		return this.hide(0, function() {
			$(this).show();
		});
	};
	
} )( jQuery );
