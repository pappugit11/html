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
            // $this.parent().parent().find('.sub-menu').removeClass('show');
            // $this.parent().parent().find('.toggled').removeClass('toggled');
            // $this.next().toggleClass('show');
            $this.next().slideToggle();
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

// 24/1/23/ new js

// $(".navbar-collapse .navbar-nav li a").click(function(){
//   $(".navbar-toggler").removeClass("open");
//   $(".navbar-toggler .stick").removeClass("open");
//   $('body,html' ).removeClass("open-nav");
//   $('.navbar-collapse' ).removeClass("show");
// });

// 24/1/23/ new js end
// Navbar end





// fixed nav bar
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

// $(document).on("scroll", onScroll);
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


$('.trea-slick').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  // centerMode: true,
  // adaptiveHeight: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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




// $('.trea-slick').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
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
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });






$('.hmteam-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:true,
  prevArrow:".propslick-prev",
  nextArrow: ".propslick-next",
  responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:false,
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


    $('.testimonial-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      focusOnSelect: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:true,
    });

  






// document end

})





