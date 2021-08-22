$(window).on("load", function () {
    $(".content").css("display","block")
    $(".loading").css("display","none")
});

$(document).ready(function () {
    $(".fa-bars").click((e) => {
        $(".navbar__mobile").toggleClass("active")
        $(".fa-bars").toggleClass("fa-times")
    })
})
