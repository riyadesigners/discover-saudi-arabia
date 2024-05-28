
//Page loader JS
$(window).on('load', function () {
  setTimeout(function () { // allowing 3 secs to fade out loader
    $('.page-loader').fadeOut('slow');
  }, 1000);
});

$(document).ready(function () {

	$(".filter-button").click(function () {
		var value = $(this).attr('data-filter');

		if (value == "all") {
			//$('.filter').removeClass('hidden');
			$('.filter').show('1000');
         //   $(this).addClass("active");
		} else {
			//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
			//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
			$(".filter").not('.' + value).hide('3000');
			$('.filter').filter('.' + value).show('3000');

		}
	});

	if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");
	}
	$(this).addClass("active");

});
    

//Equal height JS
$.fn.equalHeights = function () {
	var max_height = 0;
	$(this).each(function () {
		max_height = Math.max($(this).height(), max_height);
	});
	$(this).each(function () {
		$(this).height(max_height);
	});
};

$(document).ready(function () {
    $('.thrill-text').equalHeights();
    $('.use-box').equalHeights();
    $('ul.v-list li').equalHeights();
    $('.deatils-out .day').equalHeights();  
    $('.about-info span').equalHeights();  
    
});


//scroll top button script
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},1500);
		return false;
	});
	
});


//scroll top button script
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.getin').fadeIn();
		} else {
			$('.getin').fadeOut();
		}
	});

});


//skew header
$(document).on("scroll",function(){
    if($(document).scrollTop()>0){
        $("header").removeClass("large").addClass("small");
    } else{
        $("header").removeClass("small").addClass("large");
    }
});


//owl carousel 
$(".slider01").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    nav: true,
    //singleItem: 4,
    center: true,
    dots: true,
    autoplayTimeout: 1000,
	  stagePadding:150,
    smartSpeed:450,
    margin: 20,
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        550: {
            items: 1
        },
		568: {
			margin: 5,
            items: 3
        },
		667: {
			margin: 15,
            items: 3
        },
		736: {
			margin: 10,
            items: 3
        },
		768: {
            items: 2,
        },
        800: {
            items: 2
        },
        1024: {
            items: 2,
        },
        1100: {
            items: 4
        },
		1200: {
            items: 4,
        },
		1366: {
            items: 4,
        },
        1440: {
            items: 4,
        },
        1920: {
          items: 4,
      }
    }

});



//home top banner
$(document).ready(function() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 15;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 5000,
    nav: true,
    dots: false,
    autoplay: true,
    mouseDrag : false,
    autoplayTimeout:6000,
    loop: true,
    responsiveRefreshRate: 800,
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 6,
    dots: false,
    nav: false,
    responsive: {
        0: {
		
            items: 3
        },
		414: {
			
            items: 3
        },
		550: {
			
            items: 3
        },
		667: {
			
            items: 3
        },
        736: {
			
            items: 3
        },
		768: {
            items: 4
        },
        800: {
            items: 4
        },
         1024: {
            items: 4
        },
        1100: {
            items: 5
        },
        1400: {
            items: 6
        }
    },
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 6,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 500, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 500, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});


//tour slider JS
$('.package-slider').slick({
  dots: false,
  infinite: true,
  autoplay: false,
  arrow:false,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint:769,
      settings: {
        slidesToShow: 2,
        dots: true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
});

//customer slider JS
$('.customer-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  centerMode: true,
  centerPadding: '50px',
  arrow:true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//destination slider JS
$('.center-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrow:true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '110px',
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '250px',
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '300px',
      }
    },
    {
      breakpoint:900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '150px',
      }
    },
    {
      breakpoint:768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '150px',
        centerMode: false,
        dots: true,
      }
    },

  ]
});


//destination slider JS
$('.attraction-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrow:true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 5,
  centerMode: true,
  centerPadding: '0px',
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
       {
      breakpoint:767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//contact form slider JS
$('.form-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrow:true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//tour slider JS
$('.whattodo-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrow:true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
      {
      breakpoint:1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



$('.details-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrow:true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 2,
  //centerMode: true,
  //centerPadding: '100px',
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


  //place to visit filter start
$(document).ready(function(){
  "use strict";
  
  //------- Initialising Slick Slider
  $('.item-slider').slick({
    arrows: false,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    dots: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 666,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          
      }
    }
  ]
  });
  
  //------- Custom Arrows click functionality
  $(document).on('click', '.prevSlide', function(){
    $('.item-slider').slick('slickPrev');
  });
  
  $(document).on('click', '.nextSlide', function(){
    $('.item-slider').slick('slickNext');
  });
  
  //------- Click to filter slides according to user's choice
  
  $(document).on('click', '.filter-option li a', function(){
      $('.filter-option li a').removeClass('active');
        $(this).addClass('active');

        var cat = $(this).attr('data-category');

        if(cat !== 'all'){
          $('.item-slider').slick('slickUnfilter');

          $('.item-slider li').each(function(){
            $(this).removeClass('slide-shown');
          });

          $('.item-slider li[data-match='+ cat +']').addClass('slide-shown');
         

          $('.item-slider').slick('slickFilter', '.slide-shown');
        }
    
        else{
          $('.item-slider li').each(function(){
            $(this).removeClass('slide-shown');
          });
          $('.item-slider').slick('slickUnfilter');
        }
      }); 

    
   //-------tour-slider start
   $('.tour-slider').slick({
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    dots: true,
    responsive:  [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
  
      //------- Custom Arrows click functionality
  $(document).on('click', '.prevSlide', function(){
    $('.tour-slider').slick('slickPrev');
  });
  
  $(document).on('click', '.nextSlide', function(){
    $('.tour-slider').slick('slickNext');
  });
  //------- Click to filter slides according to user's choice
  
  $(document).on('click', '.filter-option li a', function(){
      $('.filter-option li a').removeClass('active');
        $(this).addClass('active');

        var cat = $(this).attr('data-category');

        if(cat !== 'all'){
          $('.tour-slider').slick('slickUnfilter');

          $('.tour-slider li').each(function(){
            $(this).removeClass('slide-shown');
          });

          $('.tour-slider li[data-match='+ cat +']').addClass('slide-shown');
         

          $('.tour-slider').slick('slickFilter', '.slide-shown');
        }
    
        else{
          $('.tour-slider li').each(function(){
            $(this).removeClass('slide-shown');
          });
          $('.tour-slider').slick('slickUnfilter');
        }
      }); 
    //-------tour-slider end
});
//place to visit filter end



//gallery js
$(function(){
	$('.slider-thumb').slick({
		autoplay: true,
		vertical: true,
		infinite: true,
        arrows: false,
		verticalSwiping: true,
		slidesPerRow: 2,
		slidesToShow: 2,
		asNavFor: '.slider-preview',
		focusOnSelect: true,
		//prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-up"></i></button>',
		//nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-down"></i></button>',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					vertical: false,
				}
			},
			{
				breakpoint: 479,
				settings: {
					vertical: false,
					slidesPerRow: 3,
					slidesToShow: 3,
				}
			},
		]
	});
	$('.slider-preview').slick({
		autoplay: true,
		vertical: true,
		infinite: true,
		slidesPerRow: 1,
		slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		asNavFor: '.slider-thumb',
		arrows: true,
		draggable: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					vertical: false,
					fade: true,
				}
			},
		]
	});
});
//Popular filter




//rollover tab
jQuery(document).ready(function ($) {
  $('#desti-tab[data-mouse="hover"] a').hover(function(){
    $(this).tab('show');
  });
  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    var target = $(e.relatedTarget).attr('href');
    $(target).removeClass('active');
  })
});


 //accordion js
 $(function() {
	$(".accordion > .accordion-item.ac-active").children(".accordion-panel").slideDown();
	$(".accordion > .accordion-item").click(function() {
		$(this).siblings(".accordion-item").removeClass("ac-active").children(".accordion-panel").slideUp();
		$(this).toggleClass("ac-active").children(".accordion-panel").slideToggle("ease-out");
	});
});


$(function() {
  var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
  var footTop = $('#bottomtext').offset().top - parseFloat($('#bottomtext').css('marginTop').replace(/auto/, 0));

  var maxY = footTop - $('#sidebar').outerHeight();

  $(window).scroll(function(evt) {
      var y = $(this).scrollTop();
      if (y > top) {
          
//Quand scroll, ajoute une classe ".fixed" et supprime le Css existant 
          if (y < maxY) {
              $('#sidebar').addClass('fixed').removeAttr('style');
          } else {
              
//Quand la sidebar arrive au footer, supprime la classe "fixed" prÃ©cÃ¨dement ajoutÃ©
              $('#sidebar').removeClass('fixed').css({
                  position: 'absolute',
                  top: (maxY - top) + 'px'
              });
          }
      } else {
          $('#sidebar').removeClass('fixed');
      }
  });
});



$('#evisa').click(function () {
  window.location = 'evisa.html';
});


$(document).ready(function(){
  $(window).on("scroll", function () {
    AOS.init();
});
});