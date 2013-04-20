angular.module('soundstormApp').service('player', function ($rootScope) {

    function Player() {
        this.sounds = new Array();
        this.playState = "stop";
    }

    Player.prototype.playAll = function() {
        for (var i = 0, l = this.sounds.length; i < l; i ++) {
            this.sounds[i].play();
        }
        this.playState = "playing";
    }

    Player.prototype.stopAll = function(){
        for (var i = 0, l = this.sounds.length; i < l; i ++) {
            this.sounds[i].stop();
        }
        this.playState = "stop";
    }

    Player.prototype.pauseAll = function(){
        for (var i = 0, l = this.sounds.length; i < l; i ++) {
            this.sounds[i].pause();
        }
        this.playState = "pause";
    }

    Player.prototype.addTrack = function(track){

        var self = this;

        var sound = soundManager.createSound({
            id: track.title,
            url: track.uri,
            whileplaying: function() {
                self.position = this.position;
                $rootScope.position = this.position;
                $rootScope.$apply('position');
            }
        });

        this.sounds.push(sound);
    }

    return new Player();
});
