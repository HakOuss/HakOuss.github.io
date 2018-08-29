$(document).ready(function(){
	'use strict';
	$('.navbar-dark').on('mouseenter',function(){
		$('.navbar-dark').animate({'background-color':'black'});
	});
	$('.navbar-dark').on('mouseleave',function(){
		if($(window).scrollTop() < 50){
			$('.navbar-dark').stop().animate({'background-color':'rgba(0,0,0,0.0)'});
		}
	});
});
$(window).scroll(function(){
	'use strict';
	var top = $(window).scrollTop();
	if ( top > 50) {
		$('.navbar-dark').stop().animate({backgroundColor:'black'});
		
	} else {
		$('.navbar-dark').stop().animate({backgroundColor:'rgba(0,0,0,0.0)'});
	}
});
$(document).ready(function(){
	'use strict';
	new WOW().init();
});
$(document).ready(function(){
	'use strict';
	$('.slider-for').slick({
	    slidesToShow: 1,
  	    slidesToScroll: 1,
		arrows: false,
  		fade: true,
 		asNavFor: '.slider-nav',
	});
	$('.slider-nav').slick({
 		slidesToShow: 3,
 		slidesToScroll: 1,
 		asNavFor: '.slider-for',
 		centerMode: true,
 		focusOnSelect: true,
		autoplay:true,
		responsive : [{
			breakpoint: 768,
      		settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				asNavFor: '.slider-for',
				centerMode: true,
				focusOnSelect: true,
				autoplay:true,
			}
		}]
	 });
});