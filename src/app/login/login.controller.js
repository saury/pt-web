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
      currentStep = 0;

    // selected info, default val all undefined
    vm.select = {
      country: void 0,
      school: void 0,
      role: void 0,
      user: void 0
    }

    var initTimer = $timeout(function () {
      // locate the step
      for (var i = 0, len = queue.length; i < len; i++) {
        // if the info's empty mark it as current step
        if (!vm.select[queue[i]]) {
          currentStep = i;
          break;
        }
      }
      // render for the 1st time
      $log.warn(currentStep)
      render(currentStep);
      addListener();
    }, 0, false)

    /**
     * Render the login page according to the user's selected infos
     * @param {number} step
     */
    function render(step) {
        if (step !== 4) {
          vm.forward = true;
          $state.go('login.' + queue[step]);
        }
        else {
          $log.debug('go to main')
          $rootScope.login = true;
          $state.go('main');
        }
    }

    function addListener() {
      // prevent go back to path '/' directly
      $scope.$on('$locationChangeStart', function (evt) {
        if (!(currentStep === 4 || currentStep === 0)) {
          evt.preventDefault()
          vm.forward = false;
          currentStep -= 1;
          $state.go('login.' + queue[currentStep]);
        }
      });
      // watch the user selection and rerender the page
      $scope.$on('selectionChanges', function () {
        // save the position in order to go back manually
        currentStep++;
        $log.log(currentStep)
        render(currentStep);
      });
    }

    $scope.$on('$destroy', function () {
      $timeout.cancel(initTimer);
    })
  }
})();
