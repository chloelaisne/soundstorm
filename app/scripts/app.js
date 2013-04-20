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
  }).run(function() {


      // init soundmanager
      //soundManager.setup({
          //url: 'components/soundmanager/swf'
      //});

  })
