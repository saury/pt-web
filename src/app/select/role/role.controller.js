(function(){
    'use strict';

    angular
        .module('ptWeb')
        .controller('RoleController', RoleController)

    /** @ngInject */
    function RoleController($log, $scope){
        var vm = this;
        // vm.leftorright = true;

        init();

        $log.debug($scope.select)

        // vm.leftorright = false;

        function init(){
        }

    }

}());