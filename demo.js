(function () {
  'use strict';

  angular.module('ClippyDemo', ['ngRoute', 'ngClippy'])

  .config(function ( $locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      controller: 'DemoCtrl',
      template: '<div></div>',
      resolve: {
        agent: function (Clippy) {
          return Clippy.load();
        }
      }
    });
  })

  .controller('DemoCtrl', function ($scope, agent) {

    agent.show();
    agent.speak('Hello World!');

  });

})();