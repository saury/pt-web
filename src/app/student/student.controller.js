(function(){
    'use strict';

    angular
        .module('ptWeb')
        .controller('StudentController', StudentController)

    /** @ngInject */
    function StudentController($log){
        var vm = this;
        $log.debug('haha student')
    }

}());