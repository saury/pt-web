(function(){
    'use strict';

    angular
        .module('ptWeb')
        .controller('CountryController', CountryController)

    /** @ngInject */
    function CountryController($log, $state){
        var vm = this;
        
        vm.selectCountry = function(region) {
            $state.go('select.role');
        }

        init();

        function init(){
        }

    }

}());