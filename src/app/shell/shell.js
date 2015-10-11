(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, controller);

    /* @ngInject */
    function controller() {
        var vm = this;
        vm.header = true;
        vm.navigation = true;
    }
})('angularExample', 'shell', angular);