
window.onload = function () {

    var starBg = document.querySelector(".starBg");
    var title = document.querySelector(".title");
    var topBtn = document.querySelector(".topBtn");
    //var card = document.getElementsByClassName("card");
    //var cardInfo = document.getElementsByClassName("card_info");
    var li = document.getElementsByTagName("li");

    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function () {
            if (this.classList[0] == "left") {
                this.children[1].style.opacity = "1";
            }
            else {
                this.children[0].style.opacity = "1";
            }


        })
    }


    //스크롤 이벤트
    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        starBg.style.transform = "translateY(" + -scroll / 3 + "px)";
        title.style.transform = "translateY(" + scroll / 1.8 + "px)";
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
            y: 400
        },
        delay: 1.7,
        ease: Power4.easeInOut
    });

    //페이지 로드시 포스터 이동
    TweenMax.from(".left", 2, {
        x: -1000,
        delay: 2,
        ease: Power3.easeInOut
    });
    TweenMax.from(".right", 2, {
        x: 1000,
        delay: 2,
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


