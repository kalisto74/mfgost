jQuery(document).ready(function () {
	
	'use strict';

	//Calculating The Browser Scrollbar Width
	var parent, child, scrollWidth, bodyWidth;

	if (scrollWidth === undefined) {
		parent      = $('<div style="width: 50px; height: 50px; overflow: auto"><div/></div>').appendTo('body');
		child       = parent.children();
		scrollWidth = child.innerWidth() - child.height(99).innerWidth();
		parent.remove();
	}

	// Initialize tooltip component
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	// Initialize popover component
	$('a[rel=popover]').popover().click(function(e) {
		e.preventDefault();
		var open = $(this).attr('data-easein');
	})

	//Search
	if($(".search-box").length){
		$("#search").on("click", function(){
			$(".search-box").addClass("open")
		});
		$(".search-box span").on("click", function(){
			$(".search-box").removeClass("open")
		});
	}

	//Modal Bootstrap
	$('#myModal').on('shown.bs.modal', function () {
		$('#myInput').trigger('focus');
	});

	//Modal open-popup
	$('.open-popup').magnificPopup({
		type:'inline',
		midClick: true,
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}
  });

	/* counter-- */
	$(".chislo-item").waypoint(function() {
		
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1200,
			easing: 'swing',
			step: function() {
				$(".chislo-item span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".chislo-item  span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "1.8125em",
				numberStep: comma_separator_number_step},
				1200);
		});
		this.destroy();

	}, {
		offset: '70%'
	});

	/*--- OWLCAROUSEL -------------------------------------*/

	$('#works-carousel').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
		lazyLoad:true,
		autoplay: true,
		margin: 20,
		pagination: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});
	$(".next").click(function() {
		owl.trigger('next.owl.carousel');
	});
	$(".prev").click(function() {
		owl.trigger('prev.owl.carousel');
	});

//CountDown
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('%D'));
		});
	});

	// Слайдер kuxni-gotovo
	$('.pgwSlideshow').pgwSlideshow();

	//magnificPopup по ссылке
	$('.image-link').magnificPopup(
    { type:'image'}
  );

	$(".mfp-gallery").each(function () {
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			image: {
				verticalFit: true,
				titleSrc: function (item) {
					var caption = item.el.attr('title');
					return caption;
				}
			},
			gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
        tPrev: 'Previous (Left arrow key)', // title for left button
        tNext: 'Next (Right arrow key)', // title for right button
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function () {
					this.items[0].src = this.items[0].src + '?=' + Math.random();
				},
				open: function () {
					$.magnificPopup.instance.next = function () {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function () {
							$.magnificPopup.proto.next.call(self);
						}, 120);
					},
					$.magnificPopup.instance.prev = function () {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function () {
							$.magnificPopup.proto.prev.call(self);
						}, 120);
					}
				},
				imageLoadComplete: function () {
					var self = this;
					setTimeout(function () {
						self.wrap.addClass('mfp-image-loaded');
					}, 16);
				}
			}
		});
	});

}())

jQuery('#backtotop').click(function () {
	jQuery('body,html').animate({
		scrollTop: 0
	}, 600);
});
jQuery(window).scroll(function () {
	if (jQuery(window).scrollTop() > 150) {
		jQuery('#backtotop').addClass('visible');
	} else {
		jQuery('#backtotop').removeClass('visible');
	}
});


// wow
new WOW({ mobile: false }).init();