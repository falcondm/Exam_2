'use strict';

$(document).ready(function() {
    $('.slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
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
    })
    $('.slider1').on('beforeChange', function(e, slick, currentSlide, nextSlide){
        e.preventDefault();
        let min = 0;
        let max = 255;
        let arr = [];
        for (let i = 0; i <= 5; i++) {
            let rand = Math.floor(Math.random() * (max - min + 1)) + min;
            arr.push(rand);
        }
        $('.header').css('background',`linear-gradient(45deg, rgba(${arr[0]},${arr[1]},${arr[2]},1) 0%, rgba(${arr[3]},${arr[4]},${arr[5]},1) 100%)`);
    });
    $('.slick-arrow').text('');
    $('.slick-dots > li > button').text('');
})

$('.arrow-icon').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".projects").offset().top
    }, 1000);
})

$(document).ready(function(){
    $(".nav__menu").on("click","a", function (event) {
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
    topMenu = $("ul.nav__menu"),
    menuItems = topMenu.find("a"),
    itemForTrans = $(".slider1 > .slick-dots"),
    scrollItems = menuItems.map(function(){
        let item = $($(this).attr("href"));
        if (item.length) { return item; }
    });
    
    
$(window).scroll(function(){
    if ($(document).scrollTop() !== 0) {
        $('#arrowTop').css('display','flex');
    } else $('#arrowTop').css('display','none');
    
    if ($(document).scrollTop() > $('#projects').offset().top && $(document).scrollTop() < $('.content__block_1 > .block__adrlink').offset().top) {
        $('.img-cnt-1 > img').css({'transform':'translate3d(6.8rem, 70px, 0)', 'transition':'1s'});
    } else $('.img-cnt-1 > img').css({'transform':'translate3d(0, 0, 0)'});

    if ($(document).scrollTop() > $('.img-cnt-1').offset().top && $(document).scrollTop() < $('.content__block_2 > .block__adrlink').offset().top) {
        $('.img-cnt-2 > img').css({'transform':'translate3d(-6.8rem, 70px, 0)', 'transition':'1s'});
    } else $('.img-cnt-2 > img').css({'transform':'translate3d(0, 0, 0)'});

    let fromTop = $(this).scrollTop() + 30;

    let cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });

    cur = cur[cur.length-1];

    let id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;

        menuItems.parent().removeClass("active")
                 .end().filter(`[href="#${id}"]`).parent().addClass("active");
    }

});
