
window.onload = function () {

    var starBg = document.querySelector(".starBg");
    var title = document.querySelector(".title");
    var topBtn = document.querySelector(".topBtn");

    //스크롤 이벤트
    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        starBg.style.transform = "translateY(" + -scroll / 3 + "px)";
        title.style.transform = "translateY(" + scroll / 1.7 + "px)";
    });

    //텍스트 모션
    for (var i = 0; i < title.querySelectorAll('div').length; i++) {

        var _text = title.querySelectorAll('div')[i];

        TweenMax.from(_text, 1, {
            autoAlpha: 0,
            scale: 4,
            delay: Math.random() * 1,
            ease: Power3.easeInOut
        });
    }

    //페이지 로드시 스크롤 이동
    TweenMax.to(window, 2, {
        scrollTo: {
            //y: 500
        },
        delay: 1.7,
        ease: Power4.easeInOut
    });

    //페이지 로드시 포스터 이동
    TweenMax.from("li", 2, {
        x: -400,
        delay: 2.5,
        ease: Power3.easeInOut
    });

    //Top 버튼
    topBtn.addEventListener("click", function () {
        TweenMax.to(window, 1.5, {
            scrollTo: {
                y: 0,
                autoKill: true
            },
            ease: Power3.easeInOut
        });
    })

}


