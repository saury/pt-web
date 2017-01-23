(function () {
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
      ],
      currentPostion,
      initTimer;

    // selected info, default val all undefined
    vm.select = {
      country: void 0,
      school: void 0,
      role: void 0,
      user: void 0
    }

    initTimer = $timeout(function () {
      // render for the 1st time
      render();
      addListener();
    }, 0, false)

    /**
     * Render the login page according to the user's selected infos
     */
    function render() {
      for (var i = 0, len = queue.length; i < len; i++) {
        if (!vm.select[queue[i]]) {
          vm.forward = true;
          $state.go('login.' + queue[i]);
          // save the position in order to go back manually
          currentPostion = i;
          break;
        }
        if (i === 3) {
          $log.debug('go to main')
          $rootScope.login = true;
          $state.go('main');
        }
      }
    }

    function addListener() {
      // prevent go back to path '/' directly
      $scope.$on('$locationChangeStart', function (event, toUrl) {
        if (!(currentPostion === 3 || currentPostion === 0)) {
          event.preventDefault()
          $log.debug(toUrl);
          vm.forward = false;
          currentPostion -= 1;
          $state.go('login.' + queue[currentPostion]);
        }
      });
      // watch the user selection and rerender the page
      $scope.$on('selectionChanges', function () {
        render();
      });
    }

    $scope.$on('$destroy', function () {
      $timeout.cancel(initTimer);
    })
  }
})();
