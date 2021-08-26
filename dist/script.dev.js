"use strict";

$(window).on("load", function () {
  $(".content").css("display", "block");
  $(".loading").css("display", "none");
});
$(document).ready(function () {
  $(".fa-bars").click(function (e) {
    $(".navbar__mobile").toggleClass("active");
    $(".fa-bars").toggleClass("fa-times");
  });
  $("#projects__link, #projects__mobile__link").click(function (e) {
    e.preventDefault();

    if ($(".navbar__mobile").hasClass("active")) {
      $(".navbar__mobile").removeClass("active");
      $(".fa-bars").removeClass("fa-times");
    }

    $("body, html").animate({
      scrollTop: $("#projects__section").offset().top - 50
    }, 2000);
  });
  $("#about__link, #about__mobile__link").click(function (e) {
    e.preventDefault();

    if ($(".navbar__mobile").hasClass("active")) {
      $(".navbar__mobile").removeClass("active");
      $(".fa-bars").removeClass("fa-times");
    }

    $("body, html").animate({
      scrollTop: $("#about__section").offset().top
    }, 2000);
  }); // $("#about__mobile__link").click(function (e) {
  //     e.preventDefault()
  //     $("body, html").animate({
  //         scrollTop: $("#about__section").offset().top
  //     }, 2000);
  // })
});