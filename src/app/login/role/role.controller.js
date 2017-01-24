(function(){
    'use strict';

    angular
        .module('ptWeb.login')
        .controller('RoleController', RoleController)

    /** @ngInject */
    function RoleController($log, $timeout, $scope){
        var vm = this;
        
        $timeout.cancel($scope.login.timer)

        vm.submit = function(role) {
            $scope.login.select.role = role;
            $scope.$emit('selectionChanges');
        }

    }
}());