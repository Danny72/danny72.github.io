jQuery(document).ready(function($) {

  "use strict";

  //colours the header cats on hover
  $(".page-link").hover(function() {
    var col = $(this).find("a").attr("data");
    $("body").toggleClass();
    $(this).toggleClass("color-" + col);
    $(".site-header").css("border-bottom","2px solid " + col);
  }, function() {
    var bordcol, col = $(this).find("a").attr("data");
    $("body").toggleClass();
    bordcol = $("body").attr("class");
    bordcol = $("div." + bordcol + " a").attr("data");
    $(this).toggleClass("color-" + col);
    $(".site-header").css("border-bottom","2px solid " + bordcol);
  });

  $("a.site-title").parent().addClass("page-link index");

  //colours the border on initial page load
  var col, active = $("div.post").attr("data") || "index";
  $("div." + active).addClass("active");
  col = $("div.active a").attr("data");
  $(".site-header").css("border-bottom","2px solid " + col);

});
