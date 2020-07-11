$("document").ready(function () {
    const $tabs = $(".tabs").children();

    $("#top").on("click", "a", function () {
        event.preventDefault();
        $tabs.removeClass("active");
        $(this).addClass("active");
        let id = $(this).attr("href");
        $(window).scrollTop($(id).offset().top - 100);
    });

    $(window).scroll(function () {
        let scrollPosition = $(window).scrollTop();
        $tabs.removeClass("active");
        if (scrollPosition > $("#contact").offset().top - 100) {
            $("#contact-link").addClass("active");
        } else if (scrollPosition > $("#about").offset().top - 100) {
            $("#about-link").addClass("active");
        } else if (scrollPosition > $("#portfolio").offset().top - 100) {
            $("#portfolio-link").addClass("active");
        }
    });
});