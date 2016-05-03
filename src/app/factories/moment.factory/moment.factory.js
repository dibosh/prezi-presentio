(function () {
  'use strict';
  angular.
    module('moment').factory('moment', MomentFactory);

  MomentFactory.$inject = ['$window'];

  /** @ngInject */
  function MomentFactory($window) {
    return $window.moment;
  }
})();
