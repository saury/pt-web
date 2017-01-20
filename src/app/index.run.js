(function() {
  'use strict';

  angular
    .module('ptWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
