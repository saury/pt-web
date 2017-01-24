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
      .state('student.sound', {
        // url: '',
        templateUrl: 'app/student/sound/sound.html',
        controller: 'StudentSoundController',
        controllerAs: 'sound'
      })
      .state('student.test', {
        // url: '',
        templateUrl: 'app/student/test/test.html',
        controller: 'StudentTestController',
        controllerAs: 'test'
      })
      .state('student.finish', {
        // url: '',
        templateUrl: 'app/student/finish/finish.html',
        controller: 'StudentfinishController',
        controllerAs: 'finish'
      })
      ;
  }

})();
