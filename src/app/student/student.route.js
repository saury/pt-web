(function() {
  'use strict';

  angular
    .module('ptWeb')
    .config(studentRoute);

  /** @ngInject */
  function studentRoute($stateProvider) {
    // student flow
    $stateProvider
      .state('student', {
        url: '/student',
        templateUrl: 'app/student/student.html',
        controller: 'StudentController',
        controllerAs: 'student'
      })
      .state('student.mentor', {
        // url: '',
        templateUrl: 'app/student/mentor/mentor.html',
        controller: 'StudentMentorController',
        controllerAs: 'mentor'
      })
      .state('student.name', {
        // url: '',
        templateUrl: 'app/student/name/name.html',
        controller: 'StudentNameController',
        controllerAs: 'name'
      })
      .state('student.confirm', {
        // url: '',
        templateUrl: 'app/student/confirm/confirm.html',
        controller: 'StudentConfirmController',
        controllerAs: 'confirm'
      })
      ;
  }

})();
