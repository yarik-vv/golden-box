app.controller('GameController', ['$scope', 'games', '$routeParams', function($scope, games, $routeParams) {
   games.success(function(data) {
      $scope.detail = data[$routeParams.id];
      if (window.matchMedia("(min-width: 767px)").matches) {
         document.getElementById('right-panel').style.background = $scope.detail.background;
         document.getElementById('right-panel').style.backgroundAttachment="fixed";
         document.getElementById('left-panel').style.background = $scope.detail.background;
         document.getElementById('left-panel').style.backgroundAttachment="fixed";
         document.getElementById('left').style.background = $scope.detail.background;
         document.getElementById('left').style.backgroundAttachment="fixed";
         document.getElementById('logo').src = $scope.detail.logo;
      };
      $scope.submit = function() {
         $('button').addClass("disabled");
         $('.alert-success').removeClass("hide");
      };
   });
}]);
