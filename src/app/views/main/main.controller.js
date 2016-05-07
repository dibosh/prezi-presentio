(function () {
  'use strict';

  angular
    .module('preziPresentio')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(PresentationService, _, $log, $state) {
    var vm = this;
    vm.orderByOption = {};
    vm.orderBy = {
      options: [
        {
          name: 'Latest first',
          value: 'desc'
        },
        {
          name: 'Older first',
          value: 'asc'
        }
      ]
    };

    vm.visiblePagination = {
      lower: vm.currentOffset + 1,
      upper: vm.currentOffset + 1 + vm.pageSize
    };

    function _setupPresentationTiles(presentations) {
      vm.presentationTiles = _.map(presentations, function (presentation) {
        presentation['span'] = {
          default: 2
        };
        return presentation;
      });
      vm.orderByOption = vm.orderBy.options[0].value;
      vm.orderPresentationsBy(vm.orderByOption);
    }

    var onSuccess = function (response) {
      vm.shouldShowProgressView = false;
      vm.totalPresentations = response.total;
      vm.visiblePagination.lower = (vm.currentOffset * vm.pageSize) + 1;
      vm.visiblePagination.upper = vm.visiblePagination.lower + vm.pageSize - 1;
      if (!vm.maxOffset) {
        vm.maxOffset = Math.ceil(vm.totalPresentations / vm.pageSize) - 1;
      }
      _setupPresentationTiles(response.presentations);
    };

    var onFailure = function (response) {
      vm.shouldShowProgressView = false;
      vm.errorMessage = 'Something bad happened. Please refresh.';
      $log.debug(response);
    };

    function _init_(offset) {
      vm.query = '';
      vm.errorMessage = '';
      vm.shouldShowProgressView = true;
      vm.searchPlaceholder = 'Search all presentations';
      vm.currentOffset = offset;
      vm.pageSize = 20;
      vm.totalPresentations = 0;

      PresentationService.getPresentations(vm.currentOffset, vm.pageSize)
        .success(onSuccess)
        .error(onFailure);
    }

    vm.fetchNextPage = function () {
      vm.currentOffset += 1;
      _init_(vm.currentOffset);
    };

    vm.fetchPrevPage = function () {
      vm.currentOffset -= 1;
      vm.currentOffset = vm.currentOffset < 0 ? 0 : vm.currentOffset;
      _init_(vm.currentOffset);
    };

    vm.searchByTitle = function () {
      $state.go('search', {query: vm.query});
    };

    vm.orderPresentationsBy = function (orderByOption) {
      var objectsWithDateFromString = _.map(vm.presentationTiles, function (presentation) {
        presentation['createdAtDateObj'] = Date.parse(presentation['createdAt']);
        return presentation;
      });
      vm.presentationTiles = _.orderBy(objectsWithDateFromString, ['createdAtDateObj'], [orderByOption]);
    };

    _init_(0);
  }
})();
