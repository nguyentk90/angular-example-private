(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, controller);

    /* @ngInject */
    function controller($q, $timeout) {

        init();

        function init() {
            noAsyn();
        }

        function noAsyn() {
            var defer1 = $q.defer();
            var defer2 = $q.defer();
            $timeout(function () {
                console.log('Test time out - 5000');
                defer1.resolve('OK-5000');
            }, 5000);
            $timeout(function () {
                console.log('Test time out - 1000');
                defer2.resolve('OK-1000');
            }, 1000);

            $q.all([defer1.promise, defer2.promise]).then(function (result) {
                console.log(result);
            });

            console.log('Test time out - xxx');
        }
    }
})('angularExample', 'profile', angular);