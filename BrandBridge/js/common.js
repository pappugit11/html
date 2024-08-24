jQuery(document).ready(function ($) {

   
    // document start

    // Navbar
    // $("<span class='clickD'></span>").insertAfter(".navbar-nav li.menu-item-has-children > a");
    // $('.navbar-nav li .clickD').click(function (e) {
    //     e.preventDefault();
    //     var $this = $(this);
    //     if ($this.next().hasClass('show')) {
    //         $this.next().removeClass('show');
    //         $this.removeClass('toggled');
    //     }
    //     else {
    //         $this.parent().parent().find('.sub-menu').removeClass('show');
    //         $this.parent().parent().find('.toggled').removeClass('toggled');
    //         $this.next().toggleClass('show');
    //         $this.toggleClass('toggled');
    //     }
    // });

    $(window).on('resize', function () {
        if ($(this).width() < 1025) {
            $('html').click(function () {
                $('.navbar-nav li .clickD').removeClass('toggled');
                $('.toggled').removeClass('toggled');
                $('.sub-menu').removeClass('show');
            });
            $(document).click(function () {
                $('.navbar-nav li .clickD').removeClass('toggled');
                $('.toggled').removeClass('toggled');
                $('.sub-menu').removeClass('show');
            });
            $('.navbar-nav').click(function (e) {
                e.stopPropagation();
            });
        }
    });
    // Navbar end


    /* ===== For menu animation === */

    $(".navbar-toggler").click(function () {
        $("#menu").toggleClass("open");
        $(".navbar-toggler").toggleClass("open");
        $(".navbar-toggler .stick").toggleClass("open");
        $('body,html').toggleClass("open-nav");
    });



    var menu_count = 1;
    var animation_delay = 0.1
    $('#menu > ul > li').each(function () {
        $(this).css(
            {
                '-webkit-animation-delay': (menu_count * animation_delay) + 's',
                'animation-delay': (menu_count * animation_delay) + 's'
            });
        menu_count++;
    })

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
    if ($("#scroll").length) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#scroll').fadeIn(200);
            } else {
                $('#scroll').fadeOut(200);
            }
        });
        $('#scroll').click(function () {
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




   //  Team Slider Append Arrows
   function sliderInit() {
    var $slider = $('.brdge_tem_sldr');
    slideControls   = $(this).find('.slide-controls');
    $slider.each(function() {
    var $sliderParent = $(this).parents(".brdge_tem_sldrHldr");
    var slideControls   = $sliderParent.find('.dot_controls');
    $(this).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        appendDots: slideControls,
        dots: true,
        autoplay: true,
        dotsClass: 'slick-dots custom_dots',
        infinite: true,
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
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
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
              centerMode: true,
              centerPadding: 0
            }
          }
        ]

    });

    });
    
    };
sliderInit();





// Services Slider
$('.srvcs_sldr').slick({
dots: false,
arrows: false,
infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
speed: 8000,
draggable: false,
autoplaySpeed: 0,
cssEase: 'linear',
pauseOnFocus: false,
pauseOnHover: false,
autoplay: true,
variableWidth:false,
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


// $(".plus-icon").click(function () {
  
//   $(this).closest(".team-innr").toggleClass("back-show");

// });


$(".plus-icon").click(function () {
  $(this).closest(".team-innr").toggleClass("back-show") 
});







// $('.accordion-item .accordion-header').click(function(e) {
//     if ($(this).parent().hasClass("is-open")) {
//       $(this).parent().removeClass("is-open").find(".accordion-body").slideUp();
//     } else {
//       $(".accordion-item.is-open .accordion-body").slideUp();
//       $(".accordion-item.is-open").removeClass("is-open");
//       $(this).parent().addClass("is-open").find(".accordion-body").slideDown();
//     }
//   return false;
//   });

// })


    // slick slider

    // $('.bannerMobSlider').slick({
    //   dots: false,
    //   arrows: false,
    //   infinite: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 4000,
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

    $('.bannerMobSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // prevArrow: $('.arrow_control.tstmnl').find('.prev_arrow '),
        // nextArrow: $('.arrow_control.tstmnl').find('.next_arrow'),
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: false,
        speed: 1000,
        asNavFor: '.banner-bg-slider, .banner-txt-slider'
    });
    $('.banner-bg-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: false,
        speed: 1000,
        fade: true,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        asNavFor: '.bannerMobSlider, .banner-txt-slider'
    });
    $('.banner-txt-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: false,
        appendDots: $('.slick-slider-dots'),
        speed: 1000,
        fade: true,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        asNavFor: '.bannerMobSlider, .banner-bg-slider'
    });



    $('.intro-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: false,
        speed: 1000,
        fade: true,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
        
    });



    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        variableWidth: true,
        cssEase: 'linear'
    });

    $('.brand-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        variableWidth: true,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              speed: 10000,
            }
          }
        ]
    });

    


    $('.expert-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '0px',
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });


      $('.catg-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '0px',
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
     

      $('.operate_slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '0px',
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              centerMode: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              centerMode: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              centerMode: true,
            }
          }
        ]
      });


      $('.team-slider1').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerPadding: "0px"
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerPadding: "0px"
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "0px"
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "0px"
            }
          }
        ]
      });



      $('.shopify-dvlopslider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        centerPadding: 0,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });



      $('.shopify-dvlopslider2').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

      


      $('.ecom_cont_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        fade: false,
        asNavFor: '.ecom_thumb_slider'
      });
      $('.ecom_thumb_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        infinite: true,
        asNavFor: '.ecom_cont_slider',
        // variableWidth: true,
        dots: true,
        focusOnSelect: true
      });




      $('.abt-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });







    // Custom DropDown
    $('srch_slct').hide()
    $('.srch_slct_tggle').on('click',function(){
        $(this).next().slideToggle();
    });
    $('.custom_lnk').on('click',function(){
        $(this).parents('.srch_slct').find('.slct_lst_drp').slideUp();
    });
    $('.custom_lnk input[type=radio]').change(function(){
        if($(this).is(':checked')){
            $(this).parents('.srch_slct').find('.srch_slct_tggle').children('.srch_txt_block').text($(this).next('span').text());
        }
        
    });





    let itemCntnt =  document.querySelectorAll('.drp_dwn_innr > ul > li input[type=radio]');
let txtBlock =  document.querySelector('.srch_txt_block');
let inCntnt =  document.querySelectorAll('.indvdl_cntntWrppr');
itemCntnt.forEach(function(el,i){

   el.addEventListener('click',function(){
        azx(i);
    })
})

function azx(m){
    for(let i=0;i<inCntnt.length;i++){
        inCntnt[i].classList.remove('active');
    }
    inCntnt[m].classList.add('active');
}




      //attach div to cursor each time mouse moves
      $(document).mousemove(function(e){
          $(".custom-cursor").css({left:e.pageX, top:e.pageY});
      });

      //attempt to attach div to cursor each time window scrolls
      $(document).on('scroll', function(e){
          $(".custom-cursor").css({left:e.pageX, top:e.pageY});
      });


      //change cursor over projects
      // $('.intro-sec').mouseenter(function() {
      //     $('.custom-cursor').addClass('activeproject');
      // });

      // $('.intro-sec').mouseleave(function() {
      //     $('.custom-cursor').removeClass('activeproject');
      // });


      $('a').mouseenter(function() {
        $('.custom-cursor').addClass('cursor_lg');
      });

      $('a').mouseleave(function() {
          $('.custom-cursor').removeClass('cursor_lg');
      });


      $('.custom_cursor_sec').mouseenter(function() {
        $('.custom-cursor').addClass('hh');
      });

      $('.custom_cursor_sec').mouseleave(function() {
          $('.custom-cursor').removeClass('hh');
      });



      //change cursor over menu
      $('bodycopy a').mouseenter(function() {
          $('.custom-cursor').addClass('activemenu');
      });

      $('bodycopy a').mouseleave(function() {
          $('.custom-cursor').removeClass('activemenu');
      });

     
      
   
     
      $('.inner-case-banner').mousemove(function(e){
        var moveinX = (e.pageX * -10/100);
        var moveinY = (e.pageY * -10/100);
        $(this).css('background-position', moveinX + 'px ' + moveinY + 'px ')
      })



    // $("#demoTab").easyResponsiveTabs({
    //     type: 'vertical', //Types: default, vertical, accordion           
    //     width: 'auto', //auto or any custom width
    //     fit: true,   // 100% fits in a container
    //     closed: false, // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
    //     // activate: function() {},  // Callback function, gets called if tab is switched
    //     tabidentify: 'tabb', // The tab groups identifier *This should be a unique name for each tab group and should not be defined in any styling or css file.
    //     // activetab_bg: '#B5AC5F', // background color for active tabs in this group
    //     // inactive_bg: '#E0D78C', // background color for inactive tabs in this group
    //     // active_border_color: '#9C905C', // border color for active tabs heads in this group
    //     // active_content_border_color: '#9C905C' // border color for active tabs contect in this group so that it matches the tab head border
    // });


    // $("#table_of_content_tab").easyResponsiveTabs({
    //     type: 'default', //Types: default, vertical, accordion           
    //     width: 'auto', //auto or any custom width
    //     fit: true,   // 100% fits in a container
    //     //closed: false, // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
    //     // activate: function() {},  // Callback function, gets called if tab is switched
    //     tabidentify: 'tabgroup', // The tab groups identifier *This should be a unique name for each tab group and should not be defined in any styling or css file.
    //   });




    $('body').jpreLoader({
      preMainSection:     '#main-preloader',
      prePerText:         '.preloader-percentage-text',
      preBar:             '.preloader-bar',
   }); 





    // var tab = document.getElementById('tab');
    // var tab_details = document.getElementById('tab_details');
    // tab_details.children[0].classList.add('show');
    // tab_details.children[0].classList.add('show');
    // for (var i = 0, len = tab.children.length; i < len; i++) {

    //     (function (index) {
    //         tab.children[i].onclick = function () {
    //             $('.each-tab').removeClass('active');
    //             tab.children[index].classList.add('active');
    //             $('.each-tab-details').removeClass('show');
    //             tab_details.children[index].classList.add('show');
    //         }
    //     })(i);

    // }


    // document end

})




setTimeout(function() {
  AOS.init();
}, 500);

