$(document).ready(function () {

    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000
    });


    $('.mobile-menu').click(function() {
        $('nav ul').slideToggle();
        $(this).toggleClass('opened');
    });

});
