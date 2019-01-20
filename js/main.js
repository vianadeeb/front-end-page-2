/*global $*/
$(document).ready(function () {
    //loading screen
    $(".loading-overlay").fadeOut();

    $('.scroll-to-top').click(function(event){
        event.preventDefault();
        $('html,body').animate({
           'scrollTop':'0'
        },1000);

        $(".do-nicescrol").niceScroll();

        new WOW().init();
    });

    
    
//loading elements
    $(".loading-overlay, .loading-overlay .spinner").fadeOut(2000);


    //scroll to top button
    var scrollToTop = $('.scroll-to-top');
    if ($(window).scrollTop() >= 1000) {
        if (scrollToTop.is(':hidden')) {
            scrollToTop.fadeIn(400);
        }


    } else {
        scrollToTop.fadeOut(400);
    }
});
//click on scroll to top to go up





