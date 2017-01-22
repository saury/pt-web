(function(){
    'use strict';

    angular
        .module('ptWeb')
        .controller('SchoolController', SchoolController)

    /** @ngInject */
    function SchoolController($log, $timeout, $scope){
        var vm = this;

        vm.submit = function(school) {
            $log.debug('school chosen')
            $scope.login.select.school = school;
            $scope.$emit('selectionChanges');
        }

        $log.debug($scope.login)
        $log.debug('school ctrl')

    }

}());