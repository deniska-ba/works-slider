;(function($){
	"use strict";

	$('.ba-container-slider').slick({
		slide: '.ba-container-slider__slide',
		prevArrow: ".ba-arrow__prev",
		nextArrow: ".ba-arrow__next",
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		speed: 300,
		centerMode: true,
		initialSlide: 4,
		variableWidth: true
	});

})(jQuery);
