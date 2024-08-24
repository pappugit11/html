// Code By Webdevtrick ( https://webdevtrick.com )
class StickyNavigation {
    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $('.side_nav > ul > li > a').click(function() {
            self.onTabClick(event, $(this));
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
    }
    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
    }
    onScroll() {
        // this.checkTabContainerPosition();
        this.findCurrentTabSelector();
    }
    onResize() {
            if (this.currentId) {
                this.setSliderCss();
            }
        }
        // checkTabContainerPosition() {
        //     let offset = $('.main-content').offset().top + $('.main-content').height() - this.tabContainerHeight;
        //     if ($(window).scrollTop() > offset) {
        //         $('.side_nav').addClass('items-container--top');
        //     } else {
        //         $('.side_nav').removeClass('items-container--top');
        //     }
        // }
    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.side_nav > ul > li > a').each(function() {
            let id = $(this).attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if (this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }
    setSliderCss() {
        let height = 0;
        let top = 0;
        if (this.currentTab) {
            height = this.currentTab.css('height');
            top = this.currentTab.position().top;
        }
        $('.sliding-arrow').css('height', height);
        $('.sliding-arrow').css('top', top);
    }
}
new StickyNavigation();