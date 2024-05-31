$(function() {

    "use strict";
    // preloader

    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    // scrolling effect
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky");
        }
    });
    // slide-up script
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });

    $('#toTopBtn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });



    // Tiny Slider
    var slider = tns({
        container: '.testimonial-active',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        speed: 400,
        mouseDrag: true,
        nav: false,
        controls: false,
    });

    // owl carousel
    $('.team-carousel').owlCarousel({

        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false

            }
        }
    });
    // scrollitjs
    $.scrollIt();
    // typing effect

    new TypeIt("#element1", {
        strings: ["Quality In our Work", "Honesty In our Work", "Integrity In our Work", "Fairness In our Work"],
        speed: 100,
        breakLines: false,
        loop: true,
    }).go();

    new TypeIt("#element2", {
        strings: ["Language Proficiency", "Work Experience", "Work Permit/Visa", "Health Checks", "Background Checks", "Continuing Education", "Cultural Competency"],
        speed: 100,
        breakLines: false,
        loop: true,
    }).go();

    new TypeIt("#element3", {
        strings: ["Email", "WhatsApp", "Twitter", "LinkedIn", "Facebook", "Instagram"],
        speed: 100,
        breakLines: false,
        loop: true,
    }).go();
    // animations
    new WOW().init();
});