(function () {
  'use strict';

  angular
    .module('preziPresentio.services')
    .factory('PresentationService', PresentationService);

  /** @ngInject */
  function PresentationService($http) {
    var BASE_URL = 'http://localhost:8080/api/presentation/all';
    return {
      getPresentations: function (pageOffset, pageSize) {
        return $http.get(BASE_URL + '/' + pageOffset + '/' + pageSize);
      },
      getMatchedPresentations: function (query) {
        return $http.get(BASE_URL + '?q=' + query);
      }
    };
  }
})();

