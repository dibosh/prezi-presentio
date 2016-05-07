(function () {
  'use strict';

  angular
    .module('preziPresentio.directives')
    .directive('progressIndicatorDirective', ProgressIndicatorDirective);

  /** @ngInject */
  function ProgressIndicatorDirective() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/progress.indicator.directive/progress_indicator.html',
      scope: {
        shouldIndicateProgress: '=',
        optionalMessage: '='
      }
    };
  }
})();
