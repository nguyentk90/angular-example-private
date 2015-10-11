(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, controller);

    /* @ngInject */
    function controller($rootScope, $timeout) {
    }
})('angularExample', 'navigation', angular);