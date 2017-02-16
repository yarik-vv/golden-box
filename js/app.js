var app = angular.module('MainApp', ['ngRoute']);
app.config(function ($routeProvider) {
   $routeProvider
      .when('/', {
         controller: "GamesController",
         templateUrl: "views/games/games.html"
      })
      .when('/game/:id', {
         controller: "GameController",
         templateUrl: "views/game/game.html"
      })
      .when('/garantii', {
         templateUrl: "views/garantii/garantii.html"
      })
      .when('/novosti', {
         templateUrl: "views/novosti/novosti.html"
      })
      .when('/postavshikam', {
         controller: "GamesController",
         templateUrl: "views/postavshikam/postavshikam.html"
      })
      .when('/kontaktu', {
         templateUrl: "views/kontaktu/kontaktu.html"
      })
});

$(document).ready(function () {
   $('#rating').click(function () {
      document.getElementById('rating').style.backgroundColor = '#dfa31b';
      document.getElementById('alfavit').style.backgroundColor = '#693919';
   });
   $('#alfavit').click(function () {
      document.getElementById('rating').style.backgroundColor = '#693919';
      document.getElementById('alfavit').style.backgroundColor = '#dfa31b';
   });

   $.MenuChoise=function(main,footer){
      $('.nav.navbar-nav li a').removeClass("active-menu");
      $('.nav.navbar-nav li:nth-child('+main+') a').addClass("active-menu");
      $('#footer .col-sm-1 ul li a').removeClass("active-menu-footer");
      $('#footer .col-sm-1 ul li:nth-child('+footer+') a').addClass("active-menu-footer");
   };

   if (window.matchMedia("(min-width: 767px)").matches) {
      $('a').click(function () {
         document.getElementById('right-panel').style.background = 'url(img/background.jpg) center top no-repeat';
         document.getElementById('right-panel').style.backgroundAttachment = "fixed";
         document.getElementById('left-panel').style.background = 'url(img/background.jpg) center top no-repeat';
         document.getElementById('left-panel').style.backgroundAttachment = "fixed";
         document.getElementById('left').style.background = 'url(img/background.jpg) center top no-repeat';
         document.getElementById('left').style.backgroundAttachment = "fixed";
         document.getElementById('logo').src = "img/header/logo.png";
      });
   }
});
