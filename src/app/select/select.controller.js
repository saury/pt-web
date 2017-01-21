(function() {
  'use strict';

  angular
    .module('ptWeb')
    .controller('SelectController', SelectController);

  /** @ngInject */
  function SelectController($log, $interval) {
      var vm = this;
      
      // $interval(function(){
      //   $log.debug('select ctrl');
      // }, 3000, false)
  }
})();
