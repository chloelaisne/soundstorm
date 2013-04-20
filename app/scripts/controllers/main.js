'use strict';

angular.module('soundstormApp')
.controller('MainCtrl', function ($scope, $http, player) {

    $scope.Math = window.Math;

    $scope.playState = 'stop';

    $scope.playAll = function() {
        player.playAll()
        $scope.playState = player.playState;
    }

    $scope.stopAll = function () {
        player.stopAll()
        $scope.playState = player.playState;
    }

    $scope.pauseAll = function () {
        player.pauseAll()
        $scope.playState = player.playState;
    }

    var loadAndPlay = function() {
        // Load sounds
        $http.get('datas/sounds.json').success(function(data) {

            $scope.sounds = data.sounds;

            for (var i = 0, l = data.sounds.length; i < l; i ++) {
                var track = data.sounds[i];
                player.addTrack(track);
            }

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
