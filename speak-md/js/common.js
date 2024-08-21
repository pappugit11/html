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
// $(window).scroll(function() {     
//     var scroll = $(window).scrollTop();     
//     if (scroll > 200) { 
//         $(".main-head").addClass("fixed"); 
//     } 
//     else {
//       $(".main-head").removeClass("fixed"); 
//     }
// }) 


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

// $('.brandout-sider').slick({
//   dots: false,
//   arrows: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   centerMode: true,
//   adaptiveHeight: true,
//   centerPadding: '0px',
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });





$('.banner_slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  adaptiveHeight: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 992,
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

$('.translation_slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    adaptiveHeight: true,
    // centerPadding: '0px',

    responsive: [
      {
        breakpoint: 767,
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
  



  $('.testiminial_slider').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.testiminial_quote_slider',
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      }
    ]
  });

  $('.testiminial_quote_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testiminial_slider'
  });


  $('.st_slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 992,
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

 

  
// $('.slider-nav2').slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     dots: true,
//     focusOnSelect: true,
//     autoplay: false,
//   });
  
  // On before slide change
  $('.testiminial_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.testiminial_slider .slick-slide').removeClass('slick-active-first , slick-active-last');
    $('.testiminial_slider .slick-active').eq(0).addClass('slick-active-first');
    $('.testiminial_slider .slick-active').eq(4).addClass('slick-active-last');
  }).trigger('afterChange');

  if ($(this).width() < 768) {
    $('.testiminial_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.testiminial_slider .slick-slide').removeClass('slick-active-first , slick-active-last');
      $('.testiminial_slider .slick-active').eq(0).addClass('slick-active-first');
      $('.testiminial_slider .slick-active').eq(2).addClass('slick-active-last');
    }).trigger('afterChange');
  }


  equalheight = function(container){
    var currentTallest = 0,
         currentRowStart = 0,
         rowDivs = new Array(),
         jQueryel,
         topPosition = 0;
    jQuery(container).each(function() {
       jQueryel =jQuery(this);
       jQuery(jQueryel).height('auto');
       topPostion = jQueryel.position().top;
       if (currentRowStart != topPostion) {
         for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
           rowDivs[currentDiv].height(currentTallest);
         }
         rowDivs.length = 0;
         currentRowStart = topPostion;
         currentTallest = jQueryel.height();
         rowDivs.push(jQueryel);
       } else {
         rowDivs.push(jQueryel);
         currentTallest = (currentTallest < jQueryel.height()) ? (jQueryel.height()) : (currentTallest);
      }
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
     });
    }
    
    // $(window).on('load', function (event) {
    //     equalheight('.wrapper .c_card');
    //   });

    jQuery(window).scroll(function() {
      equalheight('.translation_slider .translation_box');
    });
    jQuery(window).resize(function(){
      equalheight('.translation_slider .translation_box');
    });
    jQuery(document).ajaxSuccess(function(){
      equalheight('.translation_slider .translation_box');
    });


    jQuery(window).scroll(function() {
        equalheight('.testiminial_slider .testiminial_item');
      });
      jQuery(window).resize(function(){
        equalheight('.testiminial_slider .testiminial_item');
      });
      jQuery(document).ajaxSuccess(function(){
        equalheight('.testiminial_slider .testiminial_item');
      });
  


    


// add class to html
document.querySelector('html').classList.add('js');

// smart wrapper querySelectorAll
var elSelect = function ( elem ) {
  return document.querySelectorAll( elem );
}

// smart wrapper for each
function forEachItem(selector, fn){
  var elements = elSelect(selector);
  for (var i = 0; i < elements.length; i++){
    fn(elements[i], i);
  }
}

forEachItem('.form_group2', function(element, i){  
  var inputItem = element.querySelector('.input-wrap__field');
  var labelItem = element.getElementsByTagName('label');    
  element.appendChild(labelItem[0], inputItem[0]);
  
  if (inputItem){
    inputItem.addEventListener('blur', function(){
      if (inputItem.value !== ''){          
        inputItem.classList.add('valid');
      } else {
        inputItem.classList.remove('valid');
      }         
    });
  }
});
      





// document end

})


