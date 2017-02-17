app.controller('GamesController', ['$scope', 'games', function($scope, games) {
   games.success(function(data) {
      $scope.games = data;
      $scope.submit = function() {
         $('button').addClass("disabled");
         $('.alert-success').removeClass("hide");
      };
    })    
}]);
