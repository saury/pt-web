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

      // select country and user role
      .state('select', {
        url: '/select',
        abstract: true,
        templateUrl: 'app/select/select.html',
        controller: 'SelectController',
        controllerAs: 'select'
      })
      .state('select.country', {
        url: '/country',
        templateUrl: 'app/select/country/country.html',
        controller: 'CountryController',
        controllerAs: 'country'
      })
      .state('select.role', {
        url: '/role',
        templateUrl: 'app/select/role/role.html',
        controller: 'RoleController',
        controllerAs: 'role'
      })
      ;

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
