(function() {
  'use strict';

  angular
    .module('preziPresentio')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    var states = [{
      name: "'home'",
      url: '/',
      templateUrl: 'app/views/main/main.html',
      controller: 'MainController'
    }];

    angular.forEach(states, function (state) {
      $stateProvider.state(state.name, {
        url: state.url,
        templateUrl: state.templateUrl,
        controller: state.controller,
        controllerAs: 'viewModel'
      });
    });

    $urlRouterProvider.otherwise('/');
  }

})();
