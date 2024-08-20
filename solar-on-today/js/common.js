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




$(function () {
    var $activate_selectator = $('#activate_selectator55');
    $activate_selectator.click(function () {
        var $select = $('#select55');
        if ($select.data('selectator') === undefined) {
            $select.selectator({
                labels: {
                    search: 'Search here...'
                },
                useDimmer: true,
                searchFields: 'value text subtitle right'
            });
            $activate_selectator.val('destroy');
        } else {
            $select.selectator('destroy');
            $activate_selectator.val('activate');
        }
    });
    $activate_selectator.trigger('click');
});



// document end

})



var minThumb = document.querySelector(".min-thumb"),
  maxThumb = document.querySelector(".max-thumb"),
  minValue = document.querySelector(".min-value"),
  maxValue = document.querySelector(".max-value"),
  base = document.querySelector(".range-slider"),
  values = document.querySelector(".values"),
  min = Math.floor(parseInt(base.dataset.min) / 1000) * 1000,
  max = Math.ceil(parseInt(base.dataset.max) / 1000) * 1000,
  step = parseInt(base.dataset.step) || 1,
  bar = document.querySelector(".slider-track"),
  barInner = document.querySelector(".slider-track-filled"),
  offset,
  isDown;

minValue.innerHTML = min;
maxValue.innerHTML = max;

function minMaxThumbMoveStart(e) {
  if (e.buttons > 1) {
    return false;
  }

  if (e.target.classList.contains("min-thumb")) {
    minThumb.classList.add("min-down");
  } else if (e.target.classList.contains("max-thumb")) {
    maxThumb.classList.add("max-down");
  }

  base.classList.add("move-start");
  document.addEventListener("mouseup", minMaxThumbMoveEnd);
  document.addEventListener("mousemove", minMaxThumbMove);

  document.addEventListener("touchstart", minMaxThumbMoveEnd);
  document.addEventListener("touchmove", minMaxThumbMove);
}

function calculateMinValues(leftPos) {
  var minVal =
    leftPos / (bar.offsetWidth - minThumb.offsetWidth) * (max - min) + min;
  var multi = Math.floor(minVal / step);
  minVal = step * multi;
  
  //var minVal = Math.round(leftPos / step) * step + min;
  minValue.innerHTML = minVal;
}

function calculateMaxValues(leftPos) {
  var maxVal =
    leftPos / (bar.offsetWidth - maxThumb.offsetWidth) * (max - min) + min;
  var multi = Math.floor(maxVal / step);
  maxVal = step * multi;
  maxValue.innerHTML = maxVal;
}

function minMaxThumbMove(e) {
  var mousePosition = {};
  
  if (base.classList.contains("move-start")) {
    if (!e.touches) {
      mousePosition = {
        x: e.clientX
      };
    } else {
      mousePosition = {
        x: e.touches[0].clientX
      };
    }

    var leftPos = Math.max(
      0,
      Math.min(
        mousePosition.x - base.getBoundingClientRect().left - minThumb.offsetWidth / 2,
        bar.offsetWidth - minThumb.offsetWidth
      )
    );

    var percentage = leftPos / bar.offsetWidth * 100;

    if (minThumb.classList.contains("min-down")) {
      var cPos = Math.min(
        percentage,
        maxThumb.offsetLeft / bar.offsetWidth * 100
      );
      minThumb.style.left = cPos + "%";
      calculateMinValues(cPos * bar.offsetWidth / 100);
    } else if (maxThumb.classList.contains("max-down")) {
      var cPos = Math.max(
        percentage,
        minThumb.offsetLeft / bar.offsetWidth * 100
      );
      maxThumb.style.left = cPos + "%";
      calculateMaxValues(cPos * bar.offsetWidth / 100);
    }

    calculateFilledTrackWidth();
  }
}

function calculateFilledTrackWidth() {
  barInner.style.marginLeft = minThumb.offsetLeft / bar.offsetWidth * 100 + "%";
  barInner.style.width =
    (maxThumb.offsetLeft - minThumb.offsetLeft) / bar.offsetWidth * 100 + "%";
}

function minMaxThumbMoveEnd(e) {
  base.classList.remove("move-start");
  minThumb.classList.remove("min-down");
  maxThumb.classList.remove("max-down");

  document.removeEventListener("mouseup", minMaxThumbMoveEnd);
  document.removeEventListener("mousemove", minMaxThumbMove);

  document.removeEventListener("touchstart", minMaxThumbMoveEnd);
  document.removeEventListener("touchmove", minMaxThumbMove);
}

function onSliderTrackClick(e) {
  var distanceMinThumb = Math.hypot(
    minThumb.getBoundingClientRect().x - parseInt(e.clientX),
    minThumb.getBoundingClientRect().y - parseInt(e.clientY)
  );

  var distanceMaxThumb = Math.hypot(
    maxThumb.getBoundingClientRect().x - parseInt(e.clientX),
    maxThumb.getBoundingClientRect().y - parseInt(e.clientY)
  );

  var leftPos = Math.max(
    0,
    Math.min(
      e.clientX - 30 - minThumb.offsetWidth / 2,
      bar.offsetWidth - minThumb.offsetWidth
    )
  );

  var percentage = leftPos / bar.offsetWidth * 100;

  if (distanceMinThumb < distanceMaxThumb) {
    minThumb.style.left = percentage + "%";
    calculateMinValues(leftPos);
  } else {
    maxThumb.style.left = percentage + "%";
    calculateMaxValues(leftPos);
  }

  calculateFilledTrackWidth();
}

bar.addEventListener("mousedown", onSliderTrackClick);

document.addEventListener("mousedown", minMaxThumbMoveStart);
document.addEventListener("touchstart", minMaxThumbMoveStart);

document.addEventListener("mouseup", minMaxThumbMoveEnd);
document.addEventListener("touchend", minMaxThumbMoveEnd);

//document.addEventListener("mousemove", minMaxThumbMove);
//document.addEventListener("touchmove", minMaxThumbMove);


