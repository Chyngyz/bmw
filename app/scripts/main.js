;(function ($) {
	$(document).ready(function() {
		
	    if (!Modernizr.video || $(window).width() < 780) {

	    } else {
	    	setTimeout(function() { 
	    		BV = new $.BigVideo({container: $('.video-bg')});
		    	BV.init();
		        BV.show('media/bwm7.mp4', {ambient:true});
	    	}, 3500);

	    	
	    }

	    $("#bwm-slider-1, #bwm-slider-2").owlCarousel({
 
		      navigation : true, // Show next and prev buttons
		      slideSpeed : 300,
		      paginationSpeed : 400,
		      singleItem:true,
		      navigationText: false
	 
	  	});

	});
})(jQuery);