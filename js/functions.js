(function ($) {
  // NAV

  $(function () {
    $(".navbar-toggle, nav").click(function () {
      $(".navbar-toggle").toggleClass("navbar-on");
      $("nav").fadeToggle();
      $("nav").removeClass("nav-hide");
    });
  });

  $(".nav1").on("click", function () {
    $.fn.fullpage.moveTo(3);
  });
  $(".nav2").on("click", function () {
    $.fn.fullpage.moveTo(5);
  });
  $(".nav3").on("click", function () {
    $.fn.fullpage.moveTo(8);
  });
  $(".nav4").on("click", function () {
    $.fn.fullpage.moveTo(15);
  });
  $("nav img").on("click", function () {
    $.fn.fullpage.moveTo(1);
  });
  
})(jQuery);
