'use strict';

angular.module('soundstormApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
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
