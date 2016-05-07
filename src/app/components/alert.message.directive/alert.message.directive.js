(function () {
  'use strict';

  angular
    .module('preziPresentio.directives')
    .directive('alertMessageDirective', AlertMessageDirective);

  /** @ngInject */
  function AlertMessageDirective() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/alert.message.directive/alert_message.html',
      scope: {
        errorMessage: '='
      }
    };
  }
})();
