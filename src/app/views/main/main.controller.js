(function () {
  'use strict';

  angular
    .module('preziPresentio')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(PresentationService, _, $log) {
    var vm = this;

    vm.errorViewTemplateURL = 'app/views/main/partials/error_view.html';
    vm.progressViewTemplateURL = 'app/views/main/partials/progress_view.html';

    function _setupPresentationTiles(presentations) {
      vm.presentationTiles = _.map(presentations, function (presentation) {
        presentation['span'] = {
          default: 2
        };
        return presentation;
      });
    }

    var onSuccess = function (response) {
      vm.shouldShowErrorView = false;
      vm.shouldShowProgressView = false;
      _setupPresentationTiles(response.presentations);
    };

    var onFailure = function (response) {
      vm.shouldShowProgressView = false;
      vm.errorMessage = 'Something bad happened. Please refresh.';
      vm.shouldShowErrorView = true;
      $log.debug(response);
    };

    function _init_() {
      vm.query = '';
      vm.shouldShowProgressView = true;
      vm.showSearchedByText = false;
      vm.searchPlaceholder = 'Search all presentations';
      vm.currentOffset = 0;
      vm.pageSize = 10;

      PresentationService.getPresentations(vm.currentOffset, vm.pageSize)
        .success(onSuccess)
        .error(onFailure);
    }

    vm.hideSearchView = function () {
      _init_();
    };

    vm.searchByTitle = function () {
      if (vm.query.length > 2) {
        vm.shouldShowProgressView = true;
        vm.showSearchedByText = true;
        PresentationService.getMatchedPresentations(vm.query)
          .success(onSuccess)
          .error(onFailure);
      }
    };

    _init_();
  }
})();
