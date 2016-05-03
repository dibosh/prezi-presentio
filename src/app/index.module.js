(function() {
  'use strict';

  angular.
    module('underscore', []);

  angular.
    module('moment', []);

  angular
    .module('preziPresentio.controllers', []);

  angular
    .module('preziPresentio.directives', []);

  angular
    .module('preziPresentio.services', []);

  angular
    .module('preziPresentio.filters', []);

  angular
    .module('preziPresentio', [
      'preziPresentio.controllers',
      'preziPresentio.directives',
      'preziPresentio.services',
      'preziPresentio.filters',
      'ngAnimate',
      'ngSanitize',
      'ngMessages',
      'ui.router',
      'ngMaterial',
      'toastr'
    ]);

})();
