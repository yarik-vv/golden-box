app.controller('GamesController', ['$scope', 'games', function($scope, games) {
    games.success(function(data) {
        $scope.games = data;
    })    
}]);