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
//  Member Slider Append Arrows
function sliderInit() {
    var $slider = $('.bnnr_sldr');
    slideControls   = $(this).find('.slide-controls');
    $slider.each(function() {
    var $sliderParent = $(this).parents(".bnnr_custom_sldr");
    var slideControls   = $sliderParent.find('.dot_controls');
    $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        appendDots: slideControls,
        dots: true,
        dotsClass: 'slick-dots custom_dots',
        infinite: true,
    });

    });
    var $slider = $('.cstmr_sldr');
    $slider.each(function() {
        var $sliderParent = $(this).parents(".cstmr_sldr_wrppr");
        $(this).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $sliderParent.find('.custm_arrw_hldr .arrw_prev '),
        nextArrow: $sliderParent.find('.custm_arrw_hldr .arrw_next'),
        dots: false,
        infinite: true,
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

    });
    
    };
sliderInit();

//Detail Slider
$(".our_prdct_sldr").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    lazyLoad: 'progressive',
    cssEase: 'ease-in-out',
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1
});
//Equal Height Js
$.fn.jQueryEqualHeight = function(innerDiv) {
    if (innerDiv == undefined) {
        innerDiv = '.card';
    }
    var currentTallest = 0, currentRowStart = 0, rowDivs = new Array(), topPosition = 0;
    $(this).each(function() {
        $(this).find(innerDiv).height('auto')
        topPosition = $(this).position().top;
        if (currentRowStart != topPosition) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].find(innerDiv).height(currentTallest);
            }
            rowDivs.length = 0;
            currentRowStart = topPosition;
            currentTallest = $(this).find(innerDiv).height();
            rowDivs.push($(this));
        } else {
            rowDivs.push($(this));
            currentTallest = (currentTallest < $(this).find(innerDiv).height()) ? ($(this).find(innerDiv).height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].find(innerDiv).height(currentTallest);
        }
    });
};
function equal_height() {
    $(".chse_row").each(function(){
    let gl2 = $(this);
    gl2.find('.chse_col').jQueryEqualHeight('.chse_box');
    });  
}
    equal_height();
    $(window).on('load', function(event) {
        equal_height();
    });
    $(window).resize(function(event) {
        equal_height();
    });



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



// custom file upload btn open
jQuery("input[type=file].cust_ip_fld").on("change",function(){
    var file_name = jQuery(this).val().split('\\').pop();
    // jQuery(".customfile_label").text(file_name);
    $(this).parents(".custom_file_wrap").find(".custom_file_up_txt").text(file_name).addClass("active");
});


// document end
})


