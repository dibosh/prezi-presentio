(function () {
  'use strict';

  angular
    .module('preziPresentio')
    .controller('SearchResultViewController', SearchResultViewController);

  /** @ngInject */
  function SearchResultViewController(PresentationService, _, $stateParams, $log, $state) {
    var vm = this;
    vm.query = $stateParams.query;

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
      vm.showSearchedByText = true;
      _setupPresentationTiles(response.presentations);
    };

    var onFailure = function (response) {
      vm.shouldShowProgressView = false;
      vm.errorMessage = 'Something bad happened. Please refresh.';
      vm.shouldShowErrorView = true;
      $log.debug(response);
    };

    function _init_() {
      vm.shouldShowProgressView = true;
      vm.showSearchedByText = false;
      PresentationService.getMatchedPresentations(vm.query)
        .success(onSuccess)
        .error(onFailure);
    }

    _init_();

    vm.close = function () {
      $state.go('home'); // Go to parent state
    };
  }
})();
