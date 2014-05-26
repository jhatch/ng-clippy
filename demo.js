(function () {
  'use strict';

  angular.module('ClippyDemo', ['ngRoute', 'ngClippy'])

  .config(function ( $locationProvider, $routeProvider, clippyProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      controller: 'DemoCtrl',
      template: '<div></div>',
      resolve: {
        agent: clippyProvider.resolve('Merlin')
      }
    });
  })

  .controller('DemoCtrl', function ($scope, agent) {

    agent.show();
    agent.speak('Hello World!');

  });

})();