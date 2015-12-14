(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, controller);

    /* @ngInject */
    function controller(testService) {
        var vm = this;
        vm.date = {
            day: '20'
        };
        vm.getDate = function() {
            console.log('getting...');
            return new Date().getTime();
        };
        
        init();
        
        function init() {
            testService.get(function(data){
                debugger;
                vm.date = data;
            });
        }
    }
})('angularExample', 'home', angular);