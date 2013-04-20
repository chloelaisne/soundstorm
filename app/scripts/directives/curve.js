angular.module("soundstormApp")
.directive('curve', function(){
	return {
		template: '<canvas id="line"></canvas>',
        scope : {
        	'type': '@'
        },
		restrict: 'A',
		link: function(scope, element, attrs) {

			console.log(scope.type);

			var canvas = element.children()[0];
			if(canvas.getContext) {
				var line = canvas.getContext('2d');
				line.strokeStyle = '#000000';
				line.beginPath();
				line.moveTo(0,50);
				line.lineTo(250,50);
				line.closePath();
				line.stroke();
			}
		}

	}
});