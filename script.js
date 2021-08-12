$(window).on("load", function () {
    $(".loading").css("display", "flex").css("justify-content", "center").css("align-items", "center")
    $("body").css("overflow", "hidden")
});

$(document).ready(function () {
    $(".loading").css("display", "none")
    $("body").css("overflow", "visible")
    $(".fa-bars").click((e) => {
        $(".navbar__mobile").toggleClass("active")
        $(".fa-bars").toggleClass("fa-times")
    })
})
