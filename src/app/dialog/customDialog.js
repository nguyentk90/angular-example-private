(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, controller);

    /* @ngInject */
    function controller($mdDialog) {
        var vm = this;
        var originatorEv;
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

        vm.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };
        vm.notificationsEnabled = true;
        vm.toggleNotifications = function () {
            vm.notificationsEnabled = !vm.notificationsEnabled;
        };
        vm.redial = function () {
            $mdDialog.show(
                $mdDialog.alert()
                    .targetEvent(originatorEv)
                    .clickOutsideToClose(true)
                    .parent('body')
                    .title('Suddenly, a redial')
                    .content('You just called a friend; who told you the most amazing story. Have a cookie!')
                    .ok('That was easy')
                );
            originatorEv = null;
        };
        vm.checkVoicemail = function () {
            // This never happens.
        };
    }
})('angularExample', 'customDialog', angular);