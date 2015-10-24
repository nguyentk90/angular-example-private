(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, controller);

    /* @ngInject */
    function controller($mdDialog) {
        var vm = this;
        vm.status = 'abc';
        vm.hide = function () {
            $mdDialog.hide();
        };
        vm.cancel = function () {
            $mdDialog.cancel();
        };
        vm.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }
})('angularExample', 'dialogTemplate', angular);