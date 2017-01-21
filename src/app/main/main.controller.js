(function() {
  'use strict';

  angular
    .module('ptWeb')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $state) {
      var vm = this;
      
      $timeout(function(){
        $state.transitionTo('select.country');
      }, 3000, false)
  }
})();
