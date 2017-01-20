(function() {
  'use strict';

  angular
    .module('ptWeb')
    .directive('footerDescription', footerDescription);

  /** @ngInject */
  function footerDescription() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/footer/footer.html',
      scope: {},
    //   controller: NavbarController,
      controllerAs: 'vm',
    //   bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
