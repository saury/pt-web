(function() {
  'use strict';

  angular
    .module('ptWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $animate) {
    $animate.enabled(true);
    $log.debug('runBlock end');
  }

})();
