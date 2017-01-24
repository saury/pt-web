(function(){
    'use strict';

    angular
        .module('ptWeb.login')
        .controller('CountryController', CountryController)

    /** @ngInject */
    function CountryController($log, $scope){
        var vm = this;
        
        vm.selectCountry = function(country) {
            $scope.login.select.country = country;
            $scope.$emit('selectionChanges');
        }

    }

}());