(function() {
  'use strict';

  angular
    .module('ptWeb')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $timeout, $rootScope, $state) {
      var vm = this;

      $log.debug($rootScope.login)
      // redirect(false);

      // function redirect(login){
        if(!$rootScope.login){
          $timeout(function(){
            $state.go('login');
          }, 3000, false)
        }
        else{
          $timeout(function(){
            $state.go('student');
          }, 3000, false)
        }
      // }
  }
})();
