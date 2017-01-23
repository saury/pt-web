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

      // login flow
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
      })
      
      // student flow
      .state('student', {
        url: '/student',
        templateUrl: 'app/student/student.html',
        controller: 'StudentController',
        controllerAs: 'student'
      })
      ;
    $urlRouterProvider
      // .when('/login', '/login/country')
      .otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
