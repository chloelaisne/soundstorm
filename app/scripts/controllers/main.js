'use strict';

angular.module('soundstormApp')
.controller('MainCtrl', function ($scope, $http) {

    // Load sounds
    $http.get('datas/sounds.json').success(function(data) {
        $scope.sounds = data.sounds
    });

});
