(function() {
  'use strict';

  angular
    .module('ptWeb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      ;
    $urlRouterProvider
      // .when('/login', '/login/country')
      .otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
