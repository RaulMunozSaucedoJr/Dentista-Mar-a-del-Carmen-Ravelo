! function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", function () {
        var e = document.querySelector(".percent");

        function t() {
            var e = $(window).scrollTop() / ($(document).height() - $(window).height()) * 100,
                t = e > 99 ? "#93bdc3" : "#103879";
            $("h3").text(Math.round(e) + "%").css({
                color: t
            }), $(".fill").height(e + "%").css({
                backgroundColor: "#93bdc3"
            })
        }
        TweenLite.set(e, {
            xPercent: -5,
            yPercent: -5
        }), window.addEventListener("mousemove", function (t) {
            TweenLite.to(e, .5, {
                x: t.clientX,
                y: t.clientY
            })
        }), t(), $(document).on("scroll", t)

        const scroll = new LocomotiveScroll({
            el: document.querySelector("#js-scroll"),
            smooth: true,
            smoothMobile: true,
            inertia: 0.75,
        });

    })
}();