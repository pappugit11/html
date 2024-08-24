jQuery(document).ready(function ($) {
  function top_padding() {
    $(".banner, .cnslt-sec1").css("padding-top", $(".main_header").height());
  }
  // menu top padding function call main_header

  top_padding();

  // document start
  $(".menu_btn").click(function () {
    $(this).toggleClass("menu_open");
    $("body").toggleClass("active-mega-menu");
    $(".nav_menu_wpr").toggleClass("active-mega-menu");
    // $(".nav_menu_wpr").css("transition", "all ease 0.8s");
  });

  // Navbar
  $("<div class='mega-menu-cover'></div>").insertAfter(".mega-menu-main");
  $("<span class='clicked_arrow'></span>").insertAfter(
    ".mega-menu-main .wrapper li.menu-item-has-children > a"
  );
  $(".mega-menu-main .wrapper li.menu-item-has-children > a").append(
    "<span class='scrolling_arrow '></span>"
  );
  // Navbar end

  $(".search_open_btn").click(function () {
    $(".search_wpr").toggleClass("search_open");
  });
  $(".mega-menu-cover").on("click", function () {
    $(".menu_btn").removeClass("menu_open");
    $("body").removeClass("active-mega-menu");
    $(".nav_menu_wpr").removeClass("active-mega-menu");
  });

  $(".side_nav_bar_toggle").on("click", function () {
    $(this).toggleClass("side_nav_bar_open");
    $(".side_nav_bar, .side_nav").toggleClass("side_nav_bar_open");
    $(this).parent(".publication_section_top").toggleClass("side_nav_bar_open");
    // $('.side_nav_bar > ul').slideToggle();
  });
  $(".side_nav ul li a, .side_nav_bar ul li a").on("click", function (e) {
    $(".side_nav, .side_nav_bar").removeClass("side_nav_bar_open");
    $(".side_nav_bar_toggle").removeClass("side_nav_bar_open");
    e.preventDefault();
    return false;
  });
  // $(".navbar-toggler").click(function() {
  //     $(".navbar-toggler").toggleClass("open");
  //     $(".navbar-toggler .stick").toggleClass("open");
  //     $('body,html').toggleClass("open-nav");
  // });

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
  // if ($("#scroll").length) {
  //     $(window).scroll(function() {
  //         if ($(this).scrollTop() > 200) {
  //             $('#scroll').fadeIn(200);
  //         } else {
  //             $('#scroll').fadeOut(200);
  //         }
  //     });
  //     $('#scroll').click(function() {
  //         $("html, body").animate({ scrollTop: 0 }, 500);
  //         return false;
  //     });
  // }

  $("li.menu-item-has-children").on("mouseover", function () {
    var $menuItem = $(this),
      $submenuWrapper = $("> .wrapper", $menuItem);

    // grab the menu item's position relative to its positioned parent
    var menuItemPos = $menuItem.position();

    // place the submenu in the correct position relevant to the menu item
    $submenuWrapper.css({
      // top: menuItemPos.top,
      left: menuItemPos.left + Math.round($menuItem.outerWidth() * 1),
    });
  });

  //one page scroll menu link
  $('.side_nav > ul > li > a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $(".side_nav > ul > li > a").each(function () {
      $(this).parent("li").removeClass("current-menu-item");
    });
    $(this).parent("li").addClass("current-menu-item");
    var target = this.hash,
      $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        function () {
          window.location.href.substr(0, window.location.href.indexOf("#"));
          // $(document).on("scroll", onScroll);
        }
      );
    var unav = $(".sliding-arrow");
    $(".side_nav ul li a").click(function () {
      // $(".sliding-arrow").css("transition", "all ease 0.3s");
      var position = $(this).position();
      unav.css({
        top: position.top,
      });
    });
  });
  // $(document).on("scroll", onScroll);
  // Hide Header on on scroll down

  $(window).on("scroll", function () {
    var scrollPos = $(document).scrollTop() + 200;
    $(".side_nav > ul > li > a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".side_nav > ul > li").removeClass("current-menu-item");
        currLink.parent("li").addClass("current-menu-item");
      } else {
        currLink.parent("li").removeClass("current-menu-item");
      }
    });
    var unav = $(".sliding-arrow");
    var currentItem = $(".side_nav > ul > li.current-menu-item");
    // $(".sliding-arrow").css("transition", "all ease 0.3s");
    if (currentItem[0]) {
      unav.css({
        top: currentItem.position().top,
      });
    }
  });

  // Hide Header on on scroll down

  // $(function() {

  //     var $window = $(window);
  //     var lastScrollTop = 0;
  //     var $header = $('.main_header');
  //     var headerHeight = $header.outerHeight();

  //     $window.scroll(function() {

  //         var windowTop = $window.scrollTop();

  //         if (windowTop >= headerHeight) {
  //             $header.addClass('gescout-sticky');
  //         } else {
  //             $header.removeClass('gescout-sticky');
  //             $header.removeClass('gescout-show');
  //         }

  //         if ($header.hasClass('gescout-sticky')) {
  //             if (windowTop < lastScrollTop) {
  //                 $header.addClass('gescout-show');
  //             } else {
  //                 $header.removeClass('gescout-show');
  //             }
  //         }
  //         $('#lastscrolltop').text('LastscrollTop: ' + lastScrollTop);

  //         lastScrollTop = windowTop;

  //         $('#windowtop').text('scrollTop: ' + windowTop);
  //     });
  // });
  function stickey_nav() {
    if (jQuery(window).scrollTop() > 250) {
      jQuery(".main_header, #main-content").addClass("scroll_nav");
    } else {
      jQuery(".main_header, #main-content").removeClass("scroll_nav");
    }
  }
  var lastScrollTop = 0;

  $(window).scroll(function (event) {
    var st = $(this).scrollTop();

    if (st > lastScrollTop) {
      // downscroll code

      $(".main_header, #main-content").addClass("hideNav");
      $(".order_summary_box").removeClass("top_gap");
      // $(".cnslt-sec1").removeClass("gaptop");

      // $('.order_summary_box').css("margin-top", $(".main_header").height());
    } else {
      // upscroll code

      $(".main_header, #main-content").removeClass("hideNav");

      $(".order_summary_box").addClass("top_gap");
      // $(".cnslt-sec1").addClass("gaptop");

      // $('.order_summary_box').css("top", $(".main_header").height());
    }

    if (st <= window.innerHeight / 2) {
      // downscroll code

      $(".main_header, #main-content").removeClass("scroll_nav");
    }

    lastScrollTop = st;
  });
  //// window scroll function

  $(window).scroll(function () {
    // sticky function call

    stickey_nav();
  });
  stickey_nav();

  //// add class on active viewport section

  if ($(".SecView").length) {
    inView.threshold(0.4);

    inView(".SecView")
      .on("enter", function (el) {
        if (!el.classList.contains("sec_active")) {
          el.classList.add("sec_active");
        }
      })

      .on("exit", function (el) {
        if (el.classList.contains("sec_active")) {
          el.classList.remove("sec_active");
        }
      });
  }
  //// legal slider
  if ($(".legal_slider").length) {
    $(".legal_slider").slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      //   centerMode: true,
      adaptiveHeight: true,
      centerPadding: "0px",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  // Show the first tab and hide the rest
  $("#tabs-nav li:first-child").addClass("active");
  $(".tab-content").hide();
  $(".tab-content:first").show();

  // Click function
  $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
  // blog
  $(".blog_item a").on("click", function (e) {
    e.preventDefault();
    $($(this).attr("href"))
      .addClass("insight_open")
      .siblings()
      .removeClass("insight_open");
    $(".blog_item_details").addClass("insight_open");
    return false;
  });
  $(".details_close").on("click", function (e) {
    e.preventDefault();
    $(this).parents().removeClass("insight_open");
    $(".blog_item_details").removeClass("insight_open");
    return false;
  });

  // counter

  $(".publication_slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    //   centerMode: true,
    adaptiveHeight: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".blog_slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 3000,
    //   centerMode: true,
    adaptiveHeight: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".brand_slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    asNavFor: ".slider-nav",
    prevArrow:
      '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    infinite: true,
  });
  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: false,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
    infinite: false,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".uplaw_slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".publication_tabs_ul li a").click(function () {
    $(".publication_tabs_ul li a").removeClass("active");
    $(this).addClass("active");
  });

  $(".menu-item-has-children > a").on("click", function (e) {
    $(this).toggleClass("menu_is_active");
    $(this).parent(".menu-item-has-children").toggleClass("menu_is_active");
    $(this).parent().find("> .sub-menu").toggleClass("menu_is_active");
    // $(this).parent().find('> .sub-menu .scrolling_arrow').toggleClass('rotate');

    $(this)
      .parent(".menu-item-has-children")
      .siblings()
      .removeClass("menu_is_active");
    $(this)
      .parent(".menu-item-has-children")
      .siblings()
      .find("a")
      .removeClass("menu_is_active");
    $(this)
      .parent(".menu-item-has-children")
      .siblings()
      .find("> .sub-menu")
      .removeClass("menu_is_active");
  });

  $(".read_more_btn").click(function () {
    $(this).parent().find(".moretext").slideToggle();
    $(this).parent().find(".prof_text").toggleClass("read");
    // $('.moretext').slideToggle();
    if ($(this).text() == "Read More") {
      $(this).text("Read Less");
    } else {
      $(this).text("Read More");
    }
  });

  //// add class on active viewport element .publication_wrap
  var getInnerBannerHeight = $(".inner_page_banner").outerHeight();
  // var getPub = $('.publication_section_top').outerHeight();

  function stickey_div() {
    if (jQuery(window).scrollTop() > getInnerBannerHeight) {
      jQuery(".publication_wrap").addClass("publication_up");
      // jQuery(".publication_wrap").removeClass("publication_dwn");
    } else {
      jQuery(".publication_wrap").removeClass("publication_up");
      jQuery(".publication_wrap").removeClass("publication_dwn");
    }
  }

  var lastScrollTopDiv = getInnerBannerHeight;

  $(window).scroll(function (event) {
    var stp = $(this).scrollTop();

    if (stp >= lastScrollTopDiv) {
      // downscroll code

      $(".publication_wrap").addClass("publication_dwn");
      // $(".publication_wrap").css("padding-top", $(".publication_section_top").height());
    } else {
      // upscroll code

      $(".publication_wrap").removeClass("publication_dwn");
      // $(".publication_wrap").css("padding-top", 0);
    }

    if (stp <= window.innerHeight / 2) {
      // downscroll code

      $(".publication_wrap").removeClass("publication_up");
    }

    lastScrollTopDiv = stp;
  });
  console.log(getInnerBannerHeight);
  // document end
  $(window).scroll(function () {
    // sticky function call

    stickey_div();
    // stickey_div();
  });
  stickey_div();

  // Equal Height Js
  equalheight = function (container) {
    var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = new Array(),
      jQueryel,
      topPosition = 0;
    jQuery(container).each(function () {
      jQueryel = jQuery(this);
      jQuery(jQueryel).height("auto");
      topPostion = jQueryel.position().top;
      if (currentRowStart != topPostion) {
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
          rowDivs[currentDiv].height(currentTallest);
        }
        rowDivs.length = 0;
        currentRowStart = topPostion;
        currentTallest = jQueryel.height();
        rowDivs.push(jQueryel);
      } else {
        rowDivs.push(jQueryel);
        currentTallest =
          currentTallest < jQueryel.height()
            ? jQueryel.height()
            : currentTallest;
      }
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
    });
  };

  // $(window).on('load', function (event) {
  //     equalheight('.wrapper .c_card');
  //   });

  jQuery(window).scroll(function () {
    equalheight(".highlights_slider .pb_item");
  });
  jQuery(window).resize(function () {
    equalheight(".highlights_slider .pb_item");
  });
  jQuery(document).ajaxSuccess(function () {
    equalheight(".highlights_slider .pb_item");
  });

  jQuery(window).scroll(function () {
    equalheight(".publication_slider .pb_item");
  });
  jQuery(window).resize(function () {
    equalheight(".publication_slider .pb_item");
  });
  jQuery(document).ajaxSuccess(function () {
    equalheight(".publication_slider .pb_item ");
  });

  jQuery(window).scroll(function () {
    equalheight(".resource_slider .pb_item");
  });
  jQuery(window).resize(function () {
    equalheight(".resource_slider .pb_item");
  });
  jQuery(document).ajaxSuccess(function () {
    equalheight(".resource_slider .pb_item");
  });

  jQuery(window).scroll(function () {
    equalheight(".blog_slider .pb_item");
  });
  jQuery(window).resize(function () {
    equalheight(".blog_slider .pb_item");
  });
  jQuery(document).ajaxSuccess(function () {
    equalheight(".blog_slider .pb_item");
  });

  jQuery(window).scroll(function () {
    equalheight(" .insights_slider .pb_item");
  });
  jQuery(window).resize(function () {
    equalheight(".insights_slider .pb_item");
  });
  jQuery(document).ajaxSuccess(function () {
    equalheight(".insights_slider .pb_item ");
  });

  jQuery(window).scroll(function () {
    equalheight(" .news_slider .pb_item");
  });
  jQuery(window).resize(function () {
    equalheight(".news_slider .pb_item");
  });
  jQuery(document).ajaxSuccess(function () {
    equalheight(".news_slider .pb_item ");
  });

  // --------------

  $('.side_nav_bar > ul > li > a[href*="#"]').on("click", function (e) {
    $(".side_nav_bar > ul > li > a").each(function () {
      $(this).parent("li").removeClass("current-menu-item");
    });

    $(this).parent("li").addClass("current-menu-item");
    var usnav = $(".sliding-side-arrow");
    $(".side_nav_bar ul li a").click(function () {
      var position = $(this).position();
      usnav.css({
        top: position.top,
      });
    });

    e.preventDefault();
    return false;
  });

  // filter button
  $("button.grouped-filters-button").on("click", function (e) {
    $($(this).attr("data-href"))
      .toggleClass("show_filters")
      .siblings()
      .removeClass("show_filters");
    return false;
  });

  $('#dateButton, #dateBtn, #date_btn_3, #date_btn_4').on('click',function(){
    $('.grouped-filter').removeClass("show_filters");
  })
  $(".search-filters-mobile-toggles button").on("click", function (e) {
    $($(this).attr("data-href"))
      .toggleClass("show_mob_filters")
      .siblings()
      .removeClass("show_mob_filters");
    return false;
  });

  $(".sort-dropdown .sort-dropdown-toggle").on("click", function () {
    $(this).next().toggleClass("sort_down");
  });

  $(".sort-dropdown-list button").on("click", function () {
    var text = $(this).text();
    $(".sort-dropdown-toggle").html(text);
    $(".search-filters-mobile-toggle-short").html(text);
    $(".sort-dropdown .sort-dropdown-list").removeClass("sort_down");
    $(".search-filters-control-short").removeClass("show_mob_filters");
  });
  $(".services-filter-list button").on("click", function () {
    var listText = $(this).text();
    $(".services-filter-button").html(listText);
    // $(".search-filters-mobile-toggle-short").html(listText);
    $(".services-filter-list").slideUp();
    // $(".search-filters-control-short").removeClass("show_mob_filters");
  });
  $(".blog-filter-list button").on("click", function () {
    var listTextBlog = $(this).text();
    $(".blog-filter-button").html(listTextBlog);
    $(".blog-filter-list").slideUp();
  });
  $(".location-filter-list button").on("click", function () {
    var listTextLo = $(this).text();
    $(".location-filter-button").html(listTextLo);
    $(".location-filter-list").slideUp();
  });
  $(".grouped-filter-tab-btn").on("click", function () {
    $(this).next(".grouped-filter-container").slideToggle();
    $(this).parent().siblings().find("grouped-filter-container").slideUp();
  });
  $(".services-filter-button").on("click", function () {
    $(this).next().stop(true, true).slideToggle();
  });
  $(".blog-filter-button").on("click", function () {
    $(this).next().stop(true, true).slideToggle();
  });
  $(".location-filter-button").on("click", function () {
    $(this).next().stop(true, true).slideToggle();
  });
  // $('.grouped-filters-button').on('click', function(){
  //   $('#datepicker').removeClass('datepicker')
  //   $('#datepicker_1').removeClass('datepicker')
  // })
  // datepicker
   if ($("#datepicker").length) {
  $("#datepicker").hide();
    $("#dateButton").click(function(){

        $("#datepicker").toggle();
        $("#datepicker_1").hide(); 
    }); 
    $("#datepicker").datepicker({ 
          onSelect: function(value, date) { 
             // alert('The chosen date is ' + value); 
             $("#datepicker").hide(); 
          } 
    });
  }
   if ($("#datepicker_1").length) {
    $("#datepicker_1").hide();
    $("#dateBtn").click(function(){

        $("#datepicker_1").toggle();
        $("#datepicker").hide();
    }); 
    $("#datepicker_1").datepicker({ 
          onSelect: function(value, date) { 
             // alert('The chosen date is ' + value); 
             $("#datepicker_1").hide(); 
          } 
    });
    }
     if ($("#datepicker_3").length) {
    $("#datepicker_3").hide();
      $("#date_btn_3").click(function(){
  
          $("#datepicker_3").toggle();
          $("#datepicker_4").hide(); 
      }); 
      $("#datepicker_3").datepicker({ 
            onSelect: function(value, date) { 
               // alert('The chosen date is ' + value); 
               $("#datepicker_3").hide(); 
            } 
            // $("#datepicker_3").hide(); 
      });
    }
     if ($("#datepicker_4").length) {
      $("#datepicker_4").hide();
      $("#date_btn_4").click(function(){
  
          $("#datepicker_4").toggle();
          $("#datepicker_3").hide();
      }); 
      $("#datepicker_4").datepicker({ 
            onSelect: function(value, date) { 
               // alert('The chosen date is ' + value); 
               $("#datepicker_4").hide(); 
            } 
      });
    }
    $('.grouped-filters-button-link, .sort-dropdown-toggle').click(function(){
      $("#datepicker").hide();
      $("#datepicker_1").hide();
       $("#datepicker_3").hide();
          $("#datepicker_4").hide();
    })
    //sort filter
    // init Isotope
      var $grid = $('.uploads-row').isotope({
        itemSelector: '.pro_list',
        layoutMode: 'fitRows',
        getSortData: {
          fileby:   '.file-by',
          filename: '.file-name',
          filedate: '[data-ticks]',
          filesize: function( itemElem ) {
            var filesize = $( itemElem ).attr('data-filesize');
            return parseInt( filesize );
          }
        }

      });
        // bind filter button click
      $('.filters-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
      // bind sort button click
      $('.sort-button-group').on( 'click', 'button', function() {

        /* Get the element name to sort */
        var sortValue = $(this).attr('data-sort-value');

        /* Get the sorting direction: asc||desc */
        var direction = $(this).attr('data-sort-direction');

        /* convert it to a boolean */
        var isAscending = (direction == 'asc');
        var isDescending = (direction == 'desc');
        // var newDirection = (isAscending) ? 'desc' : 'asc';

        /* pass it to isotope */
        $grid.isotope({ sortBy: sortValue, sortAscending: isAscending, sortDescending: isDescending });

        $(this).attr('data-sort-direction', newDirection);

        var span = $(this).find('.glyphicon');
        span.toggleClass('glyphicon-chevron-up glyphicon-chevron-down');

      });
      $('.letter_list li:last-child').hide();
      $('.az_button').on('click', function(){
        var text = $(this).text();
        $(".letter_show").html(text);
        $('.letter_list li:last-child').show();
      });
      $('.clear_btn').on('click', function(){
        $(".letter_show").html();
        $('.letter_list li:last-child').hide();
      });
    //gride view
    $('#grid_view').on('click', function(){
          $('.search_block').addClass('grid_view').removeClass('list_view');
        });
        $('#list_view').on('click', function(){
          $('.search_block').addClass('list_view').removeClass('grid_view');
        });
  // document end
});
