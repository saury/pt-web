(function() {
  'use strict';

  angular
    .module('ptWeb')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $state) {
      var vm = this;
      vm.leftorright = true
      setTimeout(function(){
        $state.go('select');
      }, 1000)
  }
})();
