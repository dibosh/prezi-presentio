(function () {
  'use strict';

  angular
    .module('preziPresentio')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(PresentationService, _, $log, $state) {
    var vm = this;

    function _setupPresentationTiles(presentations) {
      vm.presentationTiles = _.map(presentations, function (presentation) {
        presentation['span'] = {
          default: 2
        };
        return presentation;
      });
    }

    var onSuccess = function (response) {
      vm.shouldShowProgressView = false;
      _setupPresentationTiles(response.presentations);
    };

    var onFailure = function (response) {
      vm.shouldShowProgressView = false;
      vm.errorMessage = 'Something bad happened. Please refresh.';
      $log.debug(response);
    };

    function _init_() {
      vm.query = '';
      vm.errorMessage = '';
      vm.shouldShowProgressView = true;
      vm.searchPlaceholder = 'Search all presentations';
      vm.currentOffset = 0;
      vm.pageSize = 10;

      PresentationService.getPresentations(vm.currentOffset, vm.pageSize)
        .success(onSuccess)
        .error(onFailure);
    }

    vm.searchByTitle = function () {
      $state.go('search', {query: vm.query});
    };

    _init_();
  }
})();
