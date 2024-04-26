$(document).ready(function(){
    // 기본 - 화면의 가로, 세로 크기 / 스크롤 존재가 있다면 스크롤 크기 없으면 0
    basicStyle();
    $(window).resize(function(){
        basicStyle();
    })

    // 스타일 인덱스
    styleIdx();

    var topSwiper = new Swiper(".topSwiper", {
        pagination: {
          el: ".topArea .swiper-pagination",
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },/* 
        autoplay: {
            delay: 5000,
        }, */
    });

    var serviceSwiper = new Swiper(".serviceSwiper", {
        pagination: {
          el: ".serviceSwiper .swiper-pagination",
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },/* 
        autoplay: {
            delay: 5000,
        }, */
    });

    $('[data-open]').click(function(){
        $(this).parent().addClass('active');
    })

    $('[data-close]').click(function(){
        $(this).parent().removeClass('active');
    })

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }

        if($(this).scrollTop() > $(window).innerHeight()){
            $('footer button').addClass('active');
        }else{
            $('footer button').removeClass('active');
        }
    })
    $('footer button').click(function(){
        $('html').animate({scrollTop: 0})
    })

})

// 기본 - 화면의 가로, 세로 크기 / 스크롤 존재가 있다면 스크롤 크기 없으면 0
function basicStyle(){
    $('body').css('--fullHeight', window.innerHeight + 'px');
    $('body').css('--fullWidth', window.innerWidth + 'px');
    let scrollWidth;
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        scrollWidth = '0'
    } else {
        scrollWidth = '17'
    }
    $('body').css('--scrollWidth', scrollWidth + 'px');
}

// 스타일 인덱스
function styleIdx(){
    $('[data-styleIdx]').each(function(){
        const childrenSelect = $(this).attr('data-styleIdx') ? $(this).children($(this).attr('data-styleIdx')) : $(this).children();
        $(this).css('--idxTotal', childrenSelect.length)
        childrenSelect.each(function(i){
            $(this).css('--styleIdx', i)
        })
    })
}