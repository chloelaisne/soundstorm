'use strict';

angular.module('soundstormApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/volume', {
        templateUrl: 'views/volume.html',
        controller: 'VolumeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope) {
      $rootScope.safeApply = function(fn) {
          var phase = this.$root.$$phase;
          if(phase == '$apply' || phase == '$digest') {
              if(fn && (typeof(fn) === 'function')) {
                  fn();
              }
          } else {
              this.$apply(fn);
          }
      };
  })
