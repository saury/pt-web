(function(){
    'use strict';

    angular
        .module('ptWeb.login')
        .controller('UserController', UserController)

    /** @ngInject */
    function UserController($log, $timeout, $scope){
        var vm = this;

        vm.submit = function(user) {
            $scope.login.select.user = user;
            $scope.$emit('selectionChanges');
        }
    }

}());