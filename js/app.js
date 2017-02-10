var app = angular.module('MainApp', ['ngRoute']);
app.config(function ($routeProvider) {
   $routeProvider
      .when('/', {
         controller: "GamesController",
         templateUrl: "views/games.html"
      })
      .when('/game/:id', {
         controller: "GameController",
         templateUrl: "views/game.html"
      })
      .when('/garantii', {
         templateUrl: "views/garantii.html"
      })
      .when('/novosti', {
         templateUrl: "views/novosti.html"
      })
      .when('/postavshikam', {
         controller: "GamesController",
         templateUrl: "views/postavshikam.html"
      })
      .when('/kontaktu', {
         templateUrl: "views/kontaktu.html"
      })
});

$(document).ready(function () {
   $('button').click(function () {
      $(this).appendChild
      $('#gotovo').addClass("glyphicon glyphicon-ok");
      $(this).addClass("disabled"); 
   });   
   
   $.MenuChoise=function(main,footer){
      $('.nav.navbar-nav li a').removeClass("active-menu");
      $('.nav.navbar-nav li:nth-child('+main+') a').addClass("active-menu");
      $('#footer .col-sm-1 ul li a').removeClass("active-menu-footer");
      $('#footer .col-sm-1 ul li:nth-child('+footer+') a').addClass("active-menu-footer");
   };
   
   $('#rating').click(function () {
      document.getElementById('rating').style.backgroundColor = '#dfa31b';
      document.getElementById('alfavit').style.backgroundColor = '#693919';
   });
   $('#alfavit').click(function () {
      document.getElementById('rating').style.backgroundColor = '#693919';
      document.getElementById('alfavit').style.backgroundColor = '#dfa31b';
   });

   if (window.matchMedia("(min-width: 767px)").matches) {
      $('a').click(function () {
         document.getElementById('right-panel').style.background = 'url(../img/background.jpg) center top no-repeat';
         document.getElementById('right-panel').style.backgroundAttachment = "fixed";
         document.getElementById('left-panel').style.background = 'url(../img/background.jpg) center top no-repeat';
         document.getElementById('left-panel').style.backgroundAttachment = "fixed";
         document.getElementById('left').style.background = 'url(../img/background.jpg) center top no-repeat';
         document.getElementById('left').style.backgroundAttachment = "fixed";
         document.getElementById('logo').src = "img/logo.png";
      });
   }

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
});