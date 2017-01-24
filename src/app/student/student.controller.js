(function(){
    'use strict';

    angular
        .module('ptWeb.student')
        .controller('StudentController', StudentController)

    /** @ngInject */
    function StudentController($log, $state){
        var vm = this;
        $log.debug('landing student page')
        $state.go('student.mentor')
    }

}());