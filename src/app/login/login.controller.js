(function() {
  'use strict';

  angular
    .module('ptWeb')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log, $timeout, $scope, $state, $rootScope) {
      var vm = this,
      queue = [
        'country',
        'school',
        'role',
        'user'
    ];
      // selected info, default val all undefined
      vm.select = {
        country: void 0,
        school: void 0,
        role: void 0,
        user: void 0
      }
      
      // watch the user selection and change the router
      $scope.$on('selectionChanges', function(){
        render();
      });

      $timeout(render, 0, false)

      function render() {
        for (var i = 0, len = queue.length; i < len; i++) {
            if(!vm.select[queue[i]]) {
              $state.go('login.'+ queue[i]);
              break;
            }
            if(i === 3) {
              $log.debug('go to main')
              $rootScope.login = true;
              $state.go('main')
            }
        }
      }

      // vm.timer = $timeout(function(){
        // $state.transitionTo('login.country')
      //   $log.debug('login ctrl')
      // }, 0, false)
    
  }
})();
