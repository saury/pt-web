(function(){
    'use strict';

    angular
        .module('ptWeb')
        .controller('UserController', UserController)

    /** @ngInject */
    function UserController($log, $timeout, $scope){
        var vm = this;

        vm.submit = function(user) {
            $scope.login.select.user = user;
            $scope.$emit('selectionChanges');
        }

        $log.debug($scope.login)
        $log.debug('user ctrl')

    }

}());