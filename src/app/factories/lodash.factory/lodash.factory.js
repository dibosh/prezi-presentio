(function () {
  'use strict';
  angular.
    module('lodash').factory('_', LodashFactory);

  LodashFactory.$inject = ['$window'];

  /** @ngInject */
  function LodashFactory($window) {
    return $window._;
  }
})();
