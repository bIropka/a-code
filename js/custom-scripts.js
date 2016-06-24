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

    $('.reg-item').click(function() {
        $('.reg-item').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('reg-person')) {
            $('.form-reg-person').fadeIn();
            $('.form-reg-org').fadeOut(0);
        } else {
            $('.form-reg-person').fadeOut(0);
            $('.form-reg-org').fadeIn();
        }
    });

});
