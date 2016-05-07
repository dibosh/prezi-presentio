(function() {
  'use strict';

  angular
    .module('preziPresentio')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';

    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('light-blue')
      .warnPalette('red');
  }

})();
