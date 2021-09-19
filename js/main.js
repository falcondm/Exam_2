'use strict';

$(document).ready(function() {
    $('.slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            }
        ]
    })
    $('.slider2').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 700,
        arrows: true,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  arrows: false,
                }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    })
    $('.slider1').on('beforeChange', function(e){
        e.preventDefault();
        let min = 0;
        let max = 255;
        let arr = [];
        for (let i = 0; i <= 5; i++) {
            let rand = Math.floor(Math.random() * (max - min + 1)) + min;
            arr.push(rand);
        }
        $('.header').css('background','linear-gradient(45deg, rgba(' + (arr[0]) + ',' + arr[1] + ',' + arr[2] + ',1) 0%, rgba(' + arr[3] + ',' + arr[4] + ',' + arr[5] + ', 1) 100%)');
    });

    $('.slick-arrow').text(null);
    $('.slick-dots > li > button').text(null);

    let menuWidth = $('.header__menu').outerWidth();
    let headerText = $('.header__textblock').outerWidth();
    let formWidth = $('.formblock').outerWidth();
    $('.formblock').css('margin-left',(-formWidth / 2) + 'px');
    $('.header__menu').css('margin-left',(-menuWidth / 2) + 'px');
    $('.header__textblock').css('margin-left',(-headerText / 2) + 'px');   
})

$('.arrow-icon').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.projects').offset().top
    }, 1000);
})

$(document).ready(function(){
    $('.nav__menu').on('click','a', function (event) {
        event.preventDefault();
 
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 800);
    });
});
$('#arrowTop').click(function() {
    let top = $('#about').offset().top;

    $('body,html').animate({scrollTop: top}, 800);
});

let lastId,
    topMenu = $('ul.nav__menu'),
    menuItems = topMenu.find('a'),
    itemForTrans = $('.slider1 > .slick-dots'),
    scrollItems = menuItems.map(function(){
        let item = $($(this).attr('href'));
        if (item.length) { return item; }
    });

let moveBlock = [
    {
        width: 10000,
        left: 2.8,
        top: 70,
    }
]

$(document).scroll(function(){
    if ($(document).scrollTop() !== 0) {
        $('#arrowTop').css('display','flex');
    } else $('#arrowTop').css('display','none');

    moveBlock.forEach(function(item) {
        for(let key in item) {
            if ($(window).width() <= item.width && $(window).width() >= 992) {
                if ($(document).scrollTop() > $('#projects').offset().top && $(document).scrollTop() < $('.content__block_1 > .block__adrlink').offset().top) {
                    $('.img-cnt-1 > img').css({'transform':'translate3d(' + (item.left) + 'rem, ' + (item.top) + 'px, 0)', 'transition':'1s'});
                } else $('.img-cnt-1 > img').css({'transform':'translate3d(0, 0, 0)'});
                
                if ($(document).scrollTop() > $('.img-cnt-1').offset().top && $(document).scrollTop() < $('.content__block_2 > .block__adrlink').offset().top) {
                    $('.img-cnt-2 > img').css({'transform':'translate3d(' + (-item.left) + 'rem, ' + item.top + 'px, 0)', 'transition':'1s'});
                } else $('.img-cnt-2 > img').css({'transform':'translate3d(0, 0, 0)'});
            } else {
                $('.img-cnt-1 > img').css({'transform':'translate3d(0, 0, 0)'});
                $('.img-cnt-2 > img').css({'transform':'translate3d(0, 0, 0)'});
            }
        }
    })
    
    $('.slick-arrow').text(null);
    $('.slick-dots > li > button').text(null);
    let fromTop = $(this).scrollTop() + 30;

    let cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });

    cur = cur[cur.length-1];

    let id = cur && cur.length ? cur[0].id : '';

    if (lastId !== id) {
        lastId = id;

        menuItems.parent().removeClass('active')
                 .end().filter('[href="#' + id + '"]').parent().addClass('active');
    }

    let checked = $('#hamburger').is(':checked');

    if (checked === true && $(window).scrollTop() >= 700) {
        $('#hamburger').prop('checked', false);
    }
});

$(window).resize(function() {
    $('.slick-arrow').text(null);
    $('.slick-dots > li > button').text(null);
    let menuWidth = $('.header__menu').outerWidth();
    let headerText = $('.header__textblock').outerWidth();
    let formWidth = $('.formblock').outerWidth();
    $('.formblock').css('margin-left',(-formWidth / 2) + 'px');
    $('.header__menu').css('margin-left',(-menuWidth / 2) + 'px');
    $('.header__textblock').css('margin-left',(-headerText / 2) + 'px');   
})

$(document).ready(function() {
    $('.form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: 'GET',
            data: $(this).serialize(),
        }).done(function () {
            $('.formblock').hide();
        });
        return false;
    });
});

$(document).click(function (e) {
    let menu = $('.header__menu');
    let checked = $('#hamburger').is(':checked');

    if (checked === true && !menu.is(e.target) && menu.has(e.target).length === 0) {
        $('#hamburger').prop('checked', false);
    }
})