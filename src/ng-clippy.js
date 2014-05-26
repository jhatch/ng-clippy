(function () {
  'use strict';

  angular.module('ngClippy', [])

    .directive('ngClippy', function () {

      return {

        restrict: 'A',

        link: function ($scope, $element, attrs) {

          clippy.load(attrs.ngClippy, function (agent) {  
            agent.show();

            $scope.$on(attrs.speak, function ($event, phrase) {
              agent.speak(phrase);
            });

            $scope.$on(attrs.move, function ($event, x, y) {
              agent.moveTo(x, y);
            });

            $scope.$emit('$ClippyLoad', agent);
          });

        }

      };
    });

})();