;(function ($) {

	$(document).ready(function() {
		
	    if (!Modernizr.video || $(window).width() < 780) {

	    } else {
	    	var vid = document.getElementById("bgvid");
			vid.onloadeddata = function() {
				setTimeout(function () {
					$(vid).removeClass('bg-vid-hidden');
				}, 3000);
			    
			};

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

	  	$("#bmw-slider-23").owlCarousel({
	    	navigation : true, // Show next and prev buttons
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    items:2,
		    navigationText: false,
		    pagination: false
	  	});

	  	$('#bmw-slider-3').slick({
		  centerMode: true,
		  centerPadding: '120px',
		  slidesToShow: 1,
		  draggable: false,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
		});

		$('.slick-track').lightGallery({
		    thumbnail:false,
		    download: false,
		    animateThumb: false,
		    showThumbByDefault: false
		}); 

		smoothScroll.init({
			speed: 1000,
			easing: 'easeInOutCubic'
		});

		$('.pluginButtonPressed').css('opacity', 1);

	});
})(jQuery);

















