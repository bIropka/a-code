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

    $('.sign-item').click(function() {
        $('.sign-item').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('sign-author')) {
            $('.form-sign-in').fadeIn();
            $('.form-password-recovery').fadeOut(0);
        } else {
            $('.form-sign-in').fadeOut(0);
            $('.form-password-recovery').fadeIn();
        }
    });

    $('.sign-up').click(function () {
        $('.window-sign').fadeIn();
    });

    $('.window-sign').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window-inner-sign')).length) $('.window-sign').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-sign').fadeOut();
    });

});
