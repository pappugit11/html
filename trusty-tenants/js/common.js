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






// $(".toggle-password").click(function() {
//     $(this).toggleClass("fa-eye fa-eye-slash");
//     let input = $(this).parent().find("input");
//     if (input.attr("type") == "password") {
//         input.attr("type", "text");
//     } else {
//         input.attr("type", "password");
//     }
// });

$(".toggle-password").click(function (e) {
    $(this).toggleClass("fa-eye fa-eye-slash");
    let input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
    input.attr("type", "text");
    } else {
    input.attr("type", "password");
    }
});



// $(".inner-ban-title").hide();
// if()
// $("#nav-profile-tab").click(function(){
//     $("#h_one").show()
// });

// $("#nav-home-tab").click(function(){
//     $("#h_two").show()
// });


$(".review_property_acc_body").hide();

$(".review_property_acc_header").click(function(){
    $(this).next(".review_property_acc_body").slideToggle(300);
    $(this).toggleClass("active");

})


    
if($("#wrp-full").length) {
    $("#wrp-full").niceScroll("#wrp-innr",{
        cursorcolor:"#345A84",
        touchbehavior:true,
 
        cursorborderradius: "10px",
        cursorwidth: "10px",
        background: "rgba(250, 117, 73, 0)",
        smoothscroll: true,


        cursorminheight: 54,
        scrollspeed: 120,
        touchbehavior: false,
        rtlmode: "auto",
        // autohidemode: false,
        horizrailenabled:false,
    }); 
      
    
    $('[data-box]').fancybox({
        touch: false,
        afterShow: function( instance, current ) {
            $("#wrp-full").getNiceScroll().resize();
            setTimeout(function(){
                $(".property_modal").scrollTop(0)
            },20);
          }
      });
    }
    

    $('.search-mobile').on('click', function(){ 
        $('.form-wrapper').slideToggle();
    })


    $('.banner-video-wpr a.play_btn').click(function () {
        $(this).parents('.banner-video-wpr').addClass('active');
        // $(this).parents('.banner-video-wpr').find('#banner_video').trigger('play');
    });



    // $('.banner-video-wpr .play_btn').on('click', function(ev) { 
    //     $("#yt_video")[0].src += "&autoplay=1";
    //     ev.preventDefault();
    // });

    document.getElementById("poster-image").onclick = function() { fadeImage() };

        function fadeImage() {
        document.getElementById("poster-image").style.opacity = "0";
        }
// document end

})


