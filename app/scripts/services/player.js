angular.module('soundstormApp').service('player', function () {

    function Player() {
        this.sounds = new Array();
    }

    Player.prototype.playAll = function() {
        for (var i = 0, l = this.sounds.length; i < l; i ++) {
            this.sounds[i].play();
        }
    }

    Player.prototype.stopAll = function(){
        for (var i = 0, l = this.sounds.length; i < l; i ++) {
            this.sounds[i].stop();
        }
    }

    Player.prototype.addTrack = function(track){

        var sound = soundManager.createSound({
            id: track.title,
            url: track.uri
        });

        this.sounds.push(sound);
    }

    return new Player();
});
