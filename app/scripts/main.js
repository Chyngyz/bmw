;(function ($) {
	$(document).ready(function() {
		
	    if (!Modernizr.video || $(window).width() < 780) {

	    } else {
	    	setTimeout(function() { 
	    		BV = new $.BigVideo({container: $('.video-bg')});
		    	BV.init();
		        BV.show('http://content.bmwusa.com/microsite/bmw-g12-lp/videos/watch_video_20150609.mp4', {ambient:true});
	    	}, 3500);
	    }

	    $('#video').magnificPopup({
		  	type: 'iframe',
		  	iframe: {
			    	markup: '<div class="mfp-iframe-scaler">'+
		            		'<div class="mfp-close"></div>'+
		            		'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		            		'</div>', 
		        patterns: {
		            youtube: {
			              index: 'youtube.com/', 
			              id: 'v=', 
			              src: '//www.youtube.com/embed/%id%?autoplay=1' 
				        }
				     },
				     srcAction: 'iframe_src', 
		    }
		});

	    $("#bmw-slider-1, #bmw-slider-2").owlCarousel({
	    	navigation : true, // Show next and prev buttons
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:true,
		    navigationText: false
	 
	  	});

	  	$("#bmw-slider-3").owlCarousel({
	    	navigation : true, // Show next and prev buttons
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    items:2,
		    navigationText: false,
		    pagination: false
	  	});

	});
})(jQuery);