$(document).ready(function(){

    //컨텐츠 탭메뉴
    var cont2Btn = $(".cont_left>ul>li");
    var cont2Cont = $(".cont_left>div");

    cont2Cont.hide().eq(0).show();

    cont2Btn.click(function(e){
        e.preventDefault();
        
        var target = $(this);
        var index = target.index();

        cont2Btn.removeClass("active");
        target.addClass("active");

        cont2Cont.hide().eq(index).show();
    });


    //컨텐츠2 탭메뉴1
    var swiper = new Swiper('.program_swiper', {
        // Optional parameters
        loop: true,
        observer: true, //초기화
        observerParents: true, //초기화 시키는 셋뚜

        //effect coverflow
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },

        slidesPerView: 2,
        spaceBetween: 60,

        // autoplay: {
        //     delay: 4000,
        // },

        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
        960: {
            slidesPerView: 1.6,
            spaceBetween: 60,
          },
        }
        });
    
        //컨텐츠2 탭메뉴2
    var swiper = new Swiper('.facility_swiper', {
        // Optional parameters
        loop: true,
        observer: true, //초기화
        observerParents: true, //초기화 시키는 셋뚜

        //effect coverflow
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },

        slidesPerView: 2,
        spaceBetween: 60,

        // autoplay: {
        //     delay: 4000,
        // },

        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        });



    //메인배너 스와이퍼
    var swiper = new Swiper('.main_banner', {
        // Optional parameters
        loop: true,
        observer: true, //초기화
        observerParents: true, //초기화 시키는 셋뚜

        autoplay: {
            delay: 4000,
        },

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        });

    //네비게이션
    winSize();
    function winSize(){
        winW = $(window).innerWidth();
        // console.log(winW);
    }

    $(window).resize(function(){
        winSize();
    });

    $(".nav>ul>li>a").click(function(e){
        if(winW<=1150){
            e.preventDefault();
            $(".nav>ul>li>.submenu").stop().slideUp();
            $(this).siblings("ul").stop().slideToggle();
        }
    });

    $("#barMenu").click(function(e){
        e.preventDefault();
        $(".nav").toggleClass("open");
    });

      //네비게이션
    $(".nav>ul>li").mouseenter(function(e){
        if(winW>=1150){
            e.preventDefault();
            $(".nav>ul>li").find(".submenu").stop().slideDown(300);
            $("#sub_bg").stop().slideDown(300);
        }
    });
    $(".nav>ul>li").mouseleave(function(e){
        if(winW>=1150){
            e.preventDefault();
            $(".nav>ul>li").find(".submenu").stop().slideUp(300);
            $("#sub_bg").stop().slideUp(300);
        }
    });

});