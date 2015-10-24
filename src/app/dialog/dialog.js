(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, controller);

    /* @ngInject */
    function controller($mdDialog) {
        var vm = this;
        vm.status = '  ';
        vm.showAlert = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(ng.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('This is an alert title')
                    .content('You can specify some description text in here.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                    .targetEvent(ev)
                );
        };
        vm.showConfirm = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete your debt?')
                .content('All of the banks have agreed to <span class="debt-be-gone">forgive</span> you your debts.')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Please do it!')
                .cancel('Sounds like a scam');
            $mdDialog.show(confirm).then(function () {
                vm.status = 'You decided to get rid of your debt.';
            }, function () {
                vm.status = 'You decided to keep your debt.';
            });
        };
        vm.showAdvanced = function (ev) {
            $mdDialog.show({
                controller: 'customDialog as vm',
                templateUrl: 'app/dialog/customDialog.html',
                parent: ng.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
                .then(function (answer) {
                    vm.status = 'You said the information was "' + answer + '".';
                }, function () {
                    vm.status = 'You cancelled the dialog.';
                });
        };
        vm.showTabDialog = function (ev) {
            $mdDialog.show({
                controller: 'dialogTemplate as vm',
                templateUrl: 'app/dialog/dialogTemplate.html',
                parent: ng.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
                .then(function (answer) {
                    vm.status = 'You said the information was "' + answer + '".';
                }, function () {
                    vm.status = 'You cancelled the dialog.';
                });
        };
    }
})('angularExample', 'dialog', angular);