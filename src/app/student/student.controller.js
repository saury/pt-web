(function(){
    'use strict';

    angular
        .module('ptWeb.student')
        .controller('StudentController', StudentController)

    /** @ngInject */
    function StudentController($log){
        var vm = this;
        $log.debug('landing student page')
    }

}());