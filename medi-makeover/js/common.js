jQuery(document).ready(function($){
// document start


 // Navbar
 $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li .clickD').click(function(e) {
     e.preventDefault();
     var $this = $(this);
     if ($this.next().hasClass('show'))
        {
            $this.next().removeClass('show');
            $this.removeClass('toggled');
        } 
        else 
        {
            $this.parent().parent().find('.sub-menu').removeClass('show');
            $this.parent().parent().find('.toggled').removeClass('toggled');
            $this.next().toggleClass('show');
            $this.toggleClass('toggled');
        }
 });

 $(window).on('resize', function(){
     if ($(this).width() < 1025) {
         $('html').click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $(document).click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $('.navbar-nav').click(function(e){
            e.stopPropagation();
         });
     }
 });
 // Navbar end


 
/* ===== For menu animation === */
$(".navbar-toggler").click(function(){
    $(".navbar-toggler").toggleClass("open");
    $(".navbar-toggler .stick").toggleClass("open");
    $('body,html' ).toggleClass("open-nav");
});

// Navbar end





// to make sticky nav bar
$(window).scroll(function() {     
    var scroll = $(window).scrollTop();     
    if (scroll > 200) { 
        $(".main-head").addClass("sticky"); 
    } 
    else {
      $(".main-head").removeClass("sticky"); 
    }
}) 


// smooth scroll to any section
// if($('a.scroll').length){
//     $("a.scroll").on('click', function(event) {
//       if (this.hash !== "") {
//         event.preventDefault();
//         var target = this.hash, $target = $(target);
//         $('html, body').animate({
//           scrollTop: $target.offset().top - 60
//         }, 800, function(){
//           window.location.href.substr(0, window.location.href.indexOf('#'));
//         });
//       } 
//     });
  
//   }


// back to top
if($("#scroll").length){
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#scroll').fadeIn(200); 
        } else { 
            $('#scroll').fadeOut(200); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 500); 
        return false; 
    }); 
}




// one page scroll menu link
// $('a[href*="#"]').on('click', function (e) {
//     e.preventDefault();
//     $(document).off("scroll");
//     $('.navbar-nav > li > a').each(function () {
//         $(this).parent('li').removeClass('current-menu-item');
//     });
//     $(this).parent('li').addClass('current-menu-item');
//     var target = this.hash, $target = $(target);
//     $('html, body').stop().animate({
//         'scrollTop': $target.offset().top
//     }, 500, 'swing', function () {
//         window.location.href.substr(0, window.location.href.indexOf('#'));
//         $(document).on("scroll", onScroll);
//     });
// });
//  $(document).on("scroll", onScroll);
// function onScroll(event){
//     var scrollPos = $(document).scrollTop() + 100;
//     $('.navbar-nav > li > a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.navbar-nav > li').removeClass("current-menu-item");
//             currLink.parent('li').addClass("current-menu-item");
//         }
//         else{
//             currLink.parent('li').removeClass("current-menu-item");
//         }
//     });
// }





// slick slider

$('.ban-slider').slick({
  dots: true,
  arrows: true,
  appendDots: $('.bnn-slick-slider-dots'),
    prevArrow: $('.prev-bnn1'),
    nextArrow: $('.next-bnn1'),
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: false,
  adaptiveHeight: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 767,
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

$('.testimnl-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    adaptiveHeight: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 767,
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


  $('.procedure-slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    
    adaptiveHeight: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  });



  // poulami new 

  $('.what-expect-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 767,
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

  /*evaluation slider*/
  $('.evaluationphoto-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  });


    /*procedure slider*/
   

  $('.procedure-breastslider').slick({
    dots: false,
    arrows:true,
    appendDots: $('.breast-slick-slider-dots'),//
    prevArrow: $('.prev0'),
    nextArrow: $('.next0'),
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  });




  $('.procedure-bodyslider').slick({
    dots: true,
    arrows: true,
    appendDots: $('.body-slick-slider-dots'),
    prevArrow: $('.prev1'),
    nextArrow: $('.next1'),
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  });


  $('.procedure-face-slider').slick({
    dots: true,
    arrows: true,
    appendDots: $('.face-slick-slider-dots'),
    prevArrow: $('.prev2'),
    nextArrow: $('.next2'),
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  });


  $('.procedure-spclpckg-slider').slick({
    dots:true,
    arrows: true,
    appendDots: $('.pkg-slick-slider-dots'),
    prevArrow: $('.prev3'),
    nextArrow: $('.next3'),
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  });

  /*28/8/2022*/
  $('.about-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:true,
    fade: true,
    appendDots: $('.slick-slider-dots'),
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    adaptiveHeight: true,
    asNavFor: '.about-slider-nav'
  });
  $('.about-slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.about-slider-for',
    dots: false,
    arrows: false,
    fade: true,
    adaptiveHeight: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          adaptiveHeight: true
        }
      }
    ]
  });
    
  /*procedure slider*/
  $('.tracey_slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  });


  /*retreats*/
  $('.retreats-slider').slick({
    dots: true,
    arrows: true,
    appendDots: $('.retreats-slick-slider-dots'),
    prevArrow: $('.prev6'),
    nextArrow: $('.next6'),
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    
    adaptiveHeight: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  });

  /*gastric slider*/


$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            // $(this).text(Math.ceil(now));
           $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }
    });
});





/*load-drhistory*/
$(".load-drhistory").click(function(){
  $(".medicaltimelinesec").slideToggle();
});

/*load-drhistory*/





// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });
  





  // 24.08.22




// Upload btn on change call function
$(".uploadfile").change(function() {
  var filename = readURL(this);
  $(this).parent().children('label').html(filename);
});

// Read File and return value  
function readURL(input) {
  var url = input.value;
  var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
  if (input.files && input.files[0] && (
    ext == "png" || ext == "jpeg" || ext == "jpg" || ext == "gif" || ext == "pdf"
    )) {
    var path = $(input).val();
    var filename = path.replace(/^.*\\/, "");
    // $('.fileUpload span').html('Uploaded Proof : ' + filename);
    return "Uploaded file : "+filename;
  } else {
    $(input).val("");
    return "Only image/pdf formats are allowed!";
  }
}
//

//isotope//
jQuery.noConflict();
jQuery(document).ready(function () {

    var $container = jQuery('#container'),
        filters = {};
    $container.isotope({
        itemSelector: '.item',
        filter: '',
      
    });

    // filter links
    jQuery('.retrets-pkgmenubox li').click(function () {
        var $this = jQuery(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return;
        }

        $this.parents('.dropdown').find('span').text($this.text());
        $this.parents('.dropdown').find('input').attr('value', $this.attr('id'));

        var $optionSet = $this.parents('.option-set');
        // change selected class
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');

        // store filter value in object
        // i.e. filters.color = 'red'
        var group = $optionSet.attr('data-filter-group');
        filters[group] = $this.attr('data-filter-value');

        // convert object into array
        var isoFilters = [];
        for (var prop in filters) {
            isoFilters.push(filters[prop])
        }
        var selector = isoFilters.join('');
        $container.isotope({
            filter: selector
        });
        return false;
    });

    // jQuery('.dropdown').click(function () {
    //     jQuery(this).attr('tabindex', 1).focus();
    //     jQuery(this).toggleClass('active');
    //     jQuery(this).find('.retrets-pkgmenubox').slideToggle(300);
    // });
    // jQuery('.dropdown').focusout(function () {
    //     jQuery(this).removeClass('active');
    //     jQuery(this).find('.retrets-pkgmenubox').slideUp(300);
    // });

  
});

/*date picker*/
$( function() {
  $( "#datepicker" ).datepicker();
} );


/*popup*/
function isVisible (ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (
    (top > 0 || bottom > 0) &&
    top < vHeight
  );
}
//action taken after viewport detection

function viportAction(){
  let els = document.getElementById("footer"), elt = document.getElementById("float"); 
  if(isVisible (els)){
    if (!elt.classList.contains("hide")) {
      elt.classList.add("hide");
      elt.click("");
    }

  }
  else{
    elt.classList.remove("hide");
  }
}
//call function -function into action
window.addEventListener('load', function (){
  viportAction();
});
window.addEventListener('scroll', function (){
  viportAction();
});
window.addEventListener('resize', function (){
  viportAction();
});


// document end

})


