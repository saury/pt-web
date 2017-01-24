(function(){
    'use strict';

    angular
        .module('ptWeb.login')
        .controller('SchoolController', SchoolController)

    /** @ngInject */
    function SchoolController($log, $timeout, $scope){
        var vm = this;

        vm.submit = function(school) {
            $scope.login.select.school = school;
            $scope.$emit('selectionChanges');
        }

    }

}());