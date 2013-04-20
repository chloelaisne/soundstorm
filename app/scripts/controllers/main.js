'use strict';

angular.module('soundstormApp')
.controller('MainCtrl', function ($scope, $http, player) {

    $scope.Math = window.Math;

    $scope.player = player;

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
