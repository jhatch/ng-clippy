ng-clippy
=========

AngularJS service wrapper for ClippyJS
--------------------------------------

![alt tag](http://www.smore.com/images/clippy/clippy.png)
![alt tag](http://www.smore.com/images/clippy/merlin.png)
![alt tag](http://www.smore.com/images/clippy/rover.png)
![alt tag](http://www.smore.com/images/clippy/links.png)

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