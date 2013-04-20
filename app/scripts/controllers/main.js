'use strict';

angular.module('soundstormApp')
.controller('MainCtrl', function ($scope, $http) {

    $http.get('datas/api.json').success(function(data) {
        $scope.awesomeThings = data.things
    });

});
