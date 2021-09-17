'use strict';

$(document).ready(function() {
    $('.slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    })
})
$(document).ready(function() {
    $('.slider2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true,
    })
})
$(document).ready(function() {
    $('.slick-dots > li > button').text('');
})
$(document).ready(function() {
    $('.slick-arrow').text('');
})
$(document).ready(function() {
    $('.slider1 .slick-dots > li > button').click(function(e) {
        e.preventDefault();
        let min = 0;
        let max = 255;
        let arr = [];
        for (let i = 0; i <= 5; i++) {
            let rand = Math.floor(Math.random() * (max - min + 1)) + min;
            arr.push(rand);
        }
        $('.header').css('background',`linear-gradient(45deg, rgba(${arr[0]},${arr[1]},${arr[2]},1) 0%, rgba(${arr[3]},${arr[4]},${arr[5]},1) 100%)`);
    })
})

$('.arrow-icon').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".projects").offset().top
    }, 1000);
})

$('.menu__item').click(function(e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');

    if ($(this).text().toLowerCase() === 'projects') {
        $('html, body').animate({
            scrollTop: $(".projects").offset().top
        }, 1000);
    } else if ($(this).text().toLowerCase() === 'news') {
        $('html, body').animate({
            scrollTop: $(".news").offset().top
        }, 1000);
    } else if ($(this).text().toLowerCase() === 'contact') {
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 1000);
    }
});