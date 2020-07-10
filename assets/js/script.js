$("document").ready(function () {
    $(".tabs").on("click", "a", function () {
        event.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        
    });
});