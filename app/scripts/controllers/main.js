'use strict';

angular.module('soundstormApp')
.controller('MainCtrl', function ($scope, $http, player) {

    $scope.Math = window.Math;

    $scope.player = player;

    var loadAndPlay = function() {
        // Load sounds
        $http.get('datas/sounds.json').success(function(data) {

            $scope.sounds = data.sounds;

            angular.forEach(data.sounds, function(track, id){
                player.addTrack(track, id);
            });

        });
    }

    // init SM
    soundManager.setup({
        url: 'components/soundmanager/swf',
        onready : function() {
            loadAndPlay();
        }
    });

});
