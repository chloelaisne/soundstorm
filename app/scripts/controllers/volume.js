'use strict';

angular.module('soundstormApp')
.controller('VolumeCtrl', function ($scope, $http) {

	$scope.dots = new Array();



	// ----- Events ----- //

	$scope.getCoordinates = function(event) {
		var coordX = event.offsetX;
		var coordY = event.offsetY;
		$scope.dots.push({"left": coordX, "top": coordY});
	};


});