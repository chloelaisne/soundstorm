angular.module('soundstormApp').service('player', function ($rootScope) {

    function Player() {
        this.sounds = new Array();
        this.soundIndex = new Object();
        this.playState = "stop";
    }

    Player.prototype.playAll = function() {
        for (var i = 0, l = this.sounds.length; i < l; i ++) {
            this.sounds[i].play();
        }
        this.setPlayState('playing');
    }

    Player.prototype.muteTrack = function(track) {
        this.soundIndex[track.id].mute()
        $rootScope.$broadcast('player.track.muted', track);
    }

    Player.prototype.unmuteTrack = function(track) {
        this.soundIndex[track.id].unmute()
        $rootScope.$broadcast('player.track.unmuted', track);
    }

    Player.prototype.stopAll = function(){
        for (var i = 0, l = this.sounds.length; i < l; i ++) {
            this.sounds[i].stop();
        }
        this.setPlayState('stop');
    }

    Player.prototype.pauseAll = function(){
        for (var i = 0, l = this.sounds.length; i < l; i ++) {
            this.sounds[i].pause();
        }
        this.setPlayState('pause');
    }

    Player.prototype.setPlayState = function (playState){
        this.playState = playState;
        $rootScope.$broadcast('player.playstate.updated', playState);
    }

    Player.prototype.addTrack = function(track){

        var self = this;

        var sound = soundManager.createSound({
            id: track.id,
            url: track.uri,
            whileplaying: function() {
                self.position = this.position;
                $rootScope.$broadcast('player.position.updated', self.position);
            }
        });

        // maintain the soundIndex object up to date
        this.soundIndex[track.id] = sound;

        this.sounds.push(sound);
    }


    return new Player();
});
