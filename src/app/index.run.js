(function() {
  'use strict';

  angular
    .module('preziPresentio')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
