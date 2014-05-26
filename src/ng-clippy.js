(function () {
  'use strict';

  angular.module('ngClippy', [])

    .provider('clippy', function () {

      this.resolve = function (name) {
        return ['$q', function ($q) {
          var dfd = $q.defer();

          clippy.load(name, function (agent) {  
            dfd.resolve(agent);
          });

          return dfd.promise;
        }];
      };

      this.$get = function () {
        throw "ngClippy should be injected via a route resolver using clippyProvider.resolve and not as a service directly.";
      };
    });

})();