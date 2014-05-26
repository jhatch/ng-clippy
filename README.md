ng-clippy
=========

AngularJS service wrapper for ClippyJS
--------------------------------------

    angular.module('ClippyDemo', ['ngRoute', 'ngClippy'])

    .config(function ($routeProvider, clippyProvider) {
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

