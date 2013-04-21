angular.module("soundstormApp")
.directive('curve', function(){
	return {
		template: '<canvas id="line"></canvas>',
		restrict: 'A',
		link: function(scope, element, attrs) {

			scope.$on('dots', function() {
				var canvas = document.getElementById("line");
				canvas.setAttribute('width', angular.element(element).width());
				canvas.setAttribute('height', angular.element(element).height());
				if(canvas.getContext) {
					var canvas = element.children()[0];
					var line = canvas.getContext('2d');
					line.strokeStyle = '#000000';
					line.lineWidth = 1;
					line.beginPath();
					angular.forEach(scope.dotsLevel, function(dot,index){
						if(index == 0)
							line.moveTo(dot.time,dot.level);
						else
							line.lineTo(dot.time,dot.level);
					});
					line.stroke();
				}
			});
		},
	}
});