'use strict';

angular.module('soundstormApp')
.controller('MainCtrl', function ($scope, $http, player) {

    $scope.Math = window.Math;

    $scope.player = player;

    var loadAndPlay = function() {
        // Load sounds
        $http.get('datas/sounds.json').success(function(data) {

            $scope.sounds = data.sounds;

            angular.forEach(data.sounds, function(track) {
                player.addTrack(track);
            });

        });
    }

    // catch player events
    $scope.$on('player.playstate.updated', function(event, playstate) {
        $scope.safeApply('player.playstate');
    });

    $scope.$on('player.position.updated', function(event, position) {
        $scope.safeApply('player.position');
    });

    $scope.$on('player.track.muted', function(event, track) {
        $scope.safeApply(function() {
            track.muted = true;
        });
    });

    $scope.$on('player.track.unmuted', function(event, track) {
        $scope.safeApply(function() {
            track.muted = false;
        });
    });

    // init SM
    soundManager.setup({
        url: 'components/soundmanager/swf',
        onready : function() {
            loadAndPlay();
        }
    });

});
