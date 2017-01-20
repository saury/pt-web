(function(){
    'use strict';

    angular
        .module('ptWeb')
        .controller('RoleController', RoleController)

    /** @ngInject */
    function RoleController($log, $state){
        var vm = this;
        vm.leftorright = true;

        init();

        function init(){
        }

    }

}());