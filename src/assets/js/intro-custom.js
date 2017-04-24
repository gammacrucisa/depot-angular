/** intro landing page custom jquery file*/

$(function () {
    "use strict";
    /***************************************
     *Animated header
     *************************************/
    $(window).on("scroll", function () {
        if
                ($(document).scrollTop() > 60) {
            $(".transparent-nav").addClass("shrink");
        } else
        {
            $(".transparent-nav").removeClass("shrink");
        }
    });
    /***************************************
     * Smooth scroll
     *************************************/
        $('.navbar-scroll a[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });
    /***************************************
     * Auto close navbar toggle on click for small devices
     *************************************/
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        } else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

    /***************************************
     * Testimonials slider
     *************************************/
    $('.owl-testimonials').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
