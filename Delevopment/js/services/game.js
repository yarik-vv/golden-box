app.factory('games', ['$http', function($http) {
    return $http.get('game.json')
    	.success(function(data) {
            return data;
         })
        .error(function(data) {
            return data;
        })
}]);
