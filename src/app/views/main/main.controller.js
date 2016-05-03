(function() {
  'use strict';

  angular
    .module('preziPresentio')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.scaffoldDone = 'Successfully scaffolded!';
  }
})();
