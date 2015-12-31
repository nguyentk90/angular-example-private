(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, controller);

    /* @ngInject */
    function controller($timeout) {
        //DEFINITION / vm.variable = xy
        
        var vm = this;

        vm.data = [
            { id: '1', text: 'Hello1' },
            { id: '2', text: 'Hello2' },
            { id: '3', text: 'Hello3' },
            { id: '4', text: 'Hello4' },
            { id: '5', text: 'Hello5' },
            { id: '6', text: 'Hello6' },
        ];

        vm.remove = function (id) {
            ng.element('#' + id).addClass('removed-item');
            $timeout(function(){
               ng.element('#' + id).remove(); 
            }, 1000);
        };

        init();

        function init() {
        }

        //FUNCTIONS

    }
})('angularExample', 'slick', angular);