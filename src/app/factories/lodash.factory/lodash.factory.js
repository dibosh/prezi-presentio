(function () {
  'use strict';
  angular.
    module('underscore').factory('_', LodashFactory);

  LodashFactory.$inject = ['$window'];

  /** @ngInject */
  function LodashFactory($window) {
    return $window._;
  }
})();
