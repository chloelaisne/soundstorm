'use strict';

angular.module('soundstormApp')
.controller('VolumeCtrl', function ($scope, $http) {

	$scope.dotsLevel = new Array();

	$http.get('datas/volume.json').success(function(data) {
		var dots = data.dots;
		$scope.meta = data.meta
		angular.forEach(data.dots, function(dot){
			// Transform time and volume level to pixel positions
			var coordY = dot.level * $("canvas").height() / 10;
			var coordX = dot.time * $("canvas").width() / $scope.meta.duration;

			$scope.dotsLevel.push({ "time": coordX, "level": coordY });
		});
		$scope.dotsLevel.sort(function(a,b) {
			if(a.time<b.time) return -1;
			if(a.time>b.time) return 1;
			return 0;
		});
		$scope.$emit('dots');
	});

	// ----- Events ----- //

	$scope.addDot = function(event) {
		// Transform pixel position to time and volume level
		var coordX = event.offsetX * $scope.meta.duration / $("canvas").width();
		var coordY = event.offsetY * 10 / $("canvas").height();

		$scope.dotsLevel.push({ "time": parseInt(event.offsetX), "level": parseInt(event.offsetY) });
		$scope.dotsLevel.sort(function(a,b) {
			if(a.time<b.time) return -1;
			if(a.time>b.time) return 1;
			return 0;
		});
		$scope.$emit('dots');
	};


});