(function () {
  'use strict';

  angular.module('ClippyDemo', ['ngClippy'])

  .controller('DemoCtrl', function ($scope) {

    //
    // wait for ClippyJS to load...
    //
    $scope.$on('$ClippyLoad', function () {

      //
      // make him speak!
      $scope.$broadcast('$speak', 'Hello World!');

      //
      // or move!
      $scope.$broadcast('$move', 0, 0);

    });
  });

})();