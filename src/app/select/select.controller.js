(function() {
  'use strict';

  angular
    .module('ptWeb')
    .controller('SelectController', SelectController);

  /** @ngInject */
  function SelectController($timeout, $state) {
      var vm = this;
      vm.leftorright = false;

      setTimeout(function(){
        $state.transitionTo('select.country');
      }, 0)
  }
})();
