(function () {
  'use strict';

  angular.module('ngClippy', [])

    .factory('Clippy', function ($q, $timeout) {

      return {

        load: function () {
          var dfd = $q.defer();

          clippy.load('Merlin', function (agent) {  
            dfd.resolve(agent);
          });

          return dfd.promise;
        }

      };
    });

})();