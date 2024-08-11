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


function sliderInit() {
    var $slider = $('.deal_slider');
    $slider.each(function() {
        var $sliderParent = $(this).parents(".latest_deals_sec");
        $(this).slick({
            slidesToShow: 3,
            slidesToScroll: 1,        
            arrows: true,
            dots: false,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: $sliderParent.find('.deals_slider_btn_wrap .arrw_prev '),
            nextArrow: $sliderParent.find('.deals_slider_btn_wrap .arrw_next'),
            infinite: true,
            responsive: [
                {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

    });
    
    };
sliderInit();



$('.news-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    prevArrow: '.arr-lft',
    nextArrow: '.arr-rt',
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
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
                slidesToShow: 1
            }
        }
    ]
});

$('.faq-accordian-head').on('click', function () {
    $(this).next().stop(true, true).slideToggle();
    $(this).toggleClass('active');
    $(this).parents('.faq-accordian-item').toggleClass('active');
    $(this).parents('.faq-accordian-item').siblings().find('.faq-accordian-body').slideUp();
    $(this).parents('.faq-accordian-item').siblings().find('.faq-accordian-head').removeClass('active');
    $(this).parents('.faq-accordian-item').siblings().removeClass('active');
});
$('.faq-accordian-item:first-child').find('.faq-accordian-body').slideDown();
$('.faq-accordian-item:first-child').find('.faq-accordian-head').addClass('active');
$('.faq-accordian-item:first-child').toggleClass('active');


$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");

    input = $(this).parent().find("input");


    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});

// filter


if(window.innerWidth > 767) {
    $('.comparison_left_header').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass("active");
    });
}


$('.filter_item_header').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
});
$('.wishlist_btn').on('click', function () {
    $(this).children(".fa-heart").toggleClass("fas");
    $(this).children(".fa-heart").toggleClass("far");
});


$(".right-account-sec").click(function(){
    $(this).toggleClass("active");
    $(this).next().stop(true, true).slideToggle();
})

$('#reset_submit_btn').on('click', function (e) {
    e.preventDefault();
});
$('#change_password_btn').on('click', function (e) {
    e.preventDefault();
});

$(".mobiile_filter_btn").on('click', function (e) {    
    $("body").addClass("open-nav");
    $("#comparison_left_box").addClass("open");
    $("#comparison_left_box .filter_panel").show();

});
$(".filter_left_arr").on('click', function (e) {
    $("#comparison_left_box").removeClass("open");
    $("body").removeClass("open-nav");

});



const otpinput = document.querySelectorAll(".login-form-otp-inp input");

otpinput.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("keyup", handleOtp);
    input.addEventListener("paste", handleOnPasteOtp);
});

function handleOtp(e) {
    
    const input = e.target;
    let value = input.value;
    let isValidInput = value.match(/[0-9a-z]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if (fieldIndex < otpinput.length - 1 && isValidInput) {
        input.nextElementSibling.focus();
    }

    if (e.key === "Backspace" && fieldIndex > 0) {
        input.previousElementSibling.focus();
    }

    if (fieldIndex == otpinput.length - 1 && isValidInput) {
        
    }
}

function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === otpinput.length) {
        otpinput.forEach((input, index) => (input.value = value[index]));
        
    }
}




var $status = $('.pagingInfo');
var $slickElement = $('.handset_img_slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
});

// document end

})


