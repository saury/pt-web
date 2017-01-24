(function() {
  'use strict';

  angular
    .module('ptWeb.login')
    .config(loginRoute);

  /** @ngInject */
  function loginRoute($stateProvider) {
    // login flow
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('login.country', {
        // url: '/country',
        templateUrl: 'app/login/country/country.html',
        controller: 'CountryController',
        controllerAs: 'country'
      })
      .state('login.school', {
        // url: '/school',
        templateUrl: 'app/login/school/school.html',
        controller: 'SchoolController',
        controllerAs: 'school'
      })
      .state('login.role', {
        // url: '/role',
        templateUrl: 'app/login/role/role.html',
        controller: 'RoleController',
        controllerAs: 'role'
      })
      .state('login.user', {
        // url: '/user',
        templateUrl: 'app/login/user/user.html',
        controller: 'UserController',
        controllerAs: 'user'
      });
  }

})();
