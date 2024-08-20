jQuery(document).ready(function($){
// document start


/********custom-input*********/
$('.input-select').click(function() {
    if($(this).hasClass(".checked")) {
      $(this).removeClass('checked');
      $(this).find('input.cb-value').removeAttr("checked", "checked");
    } else {
      $("body").find(".checked").removeClass("checked");
      $("body").find('input.cb-value').removeAttr("checked", "checked");
      $(this).addClass('checked');
      $(this).find('input.cb-value').attr("checked", "checked");
    }
  })
  $('.input-select1 label > span').click(function() {
    $(this).parent().parent().toggleClass("checked")
  });
/********custom-input*********/

// custom file upload btn open
$(".customfile_inputin").on("change",function(){
    var file_name = $('input[type=file]').val().split('\\').pop();
    $(".customfile_label").text(file_name);
});
    // custom file upload btn end
 
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

$('.video-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  centerMode: false,
  adaptiveHeight: true,
  centerPadding: '0px'
});









//Dash-Toggler//
$('body').on('click', '.c-header-toggler', function () {
    $(this).parent().addClass("hide-hdr").removeClass("shw-hdr");
    $("body").append('<div class="c-sidebar-backdrop c-fade c-show"></div>');
    $("body").find('.drpdwn-backdrop').remove();
    $("body").find(".dropdown-menu").removeClass("show pshow");
    $(".c-sidebar").addClass("c-sidebar-show");
    $(".c-btm").addClass("c-btm-show");

    
  });
  $('body').on('click', '.c-sidebar-backdrop.c-show', function () {
    $(this).remove();
    $("body").find(".c-header").removeClass("hide-hdr").addClass("shw-hdr");
    $(".c-sidebar").removeClass("c-sidebar-show");

    $(".c-btm").removeClass("c-btm-show");
  });

  $('body').on('click', '.db_close_btn', function () {
    $("body").find('.c-sidebar-backdrop.c-show').remove();
    $(".c-sidebar").removeClass("c-sidebar-show");
    $(".c-btm").removeClass("c-btm-show");
  });
  
  
  //dropdown-bckdrop//
  $(' .dropdown-toggle').on('click', function (e) {
    if (!$(this).hasClass('show')) {
      $('body').find('.drpdwn-backdrop').remove()
    } else {
      $('body').append('<div class="drpdwn-backdrop"></div>')
    }
    if ($(this).hasClass('show')) {
      $('body').find('.drpdwn-backdrop').remove()
    } else {
      $('body').append('<div class="drpdwn-backdrop"></div>')
    }
  
    e.preventDefault()
  })
  
  $('body').on('click', '.drpdwn-backdrop', function () {
    $(this).remove()
  })
  $(document).click(function () {
    if (!$('.dropdown-toggle').hasClass('show')) {
      $('body').find('.drpdwn-backdrop').remove()
    }
  })
  
  
  
  $('body').css({ 'padding-top': $('.main-head').get(0).clientHeight });
  
  $(window).resize(function () {
    $('body').css({ 'padding-top': $('.main-head').get(0).clientHeight });
  });
  
  
  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });
    return false;
});
  







// document end

})


