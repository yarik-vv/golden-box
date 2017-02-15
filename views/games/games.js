$.MenuChoise(1, 1);

$("#owl-news").owlCarousel({
   loop: true,
   nav: false,
   navText: ["", ""],
   autoplay: true,
   autoplayTimeout: 3000,
   autoplayHoverPause: true,
   items: 1,
   smartSpeed: 1000
});

$("#owl-news").hover(
   function () {
      $(".owl-prev").show();
      $(".owl-next").show();
   },
   function () {
      $(".owl-prev").hide();
      $(".owl-next").hide();
   });

var owl = $('.owl-carousel');
var typeClick;
owl.owlCarousel();
$('.owl-next').click(function () {
   typeClick = true;
});
$('.owl-prev').click(function () {
   typeClick = true;
});

owl.on('changed.owl.carousel', function (event) {
   if (typeClick == true) {
      $(".owl-next").show();
      $(".owl-prev").show();
   }
   typeClick = false;
});

$(".owl-prev").hide();
$(".owl-next").hide();
