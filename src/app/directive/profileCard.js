(function (moduleId, directiveId, ng)	{
    'use strict';

    ng.module(moduleId).directive(directiveId, directive);

    /* @ngInject */
    function directive() {
        // Usage:
        //
        // Creates:
        //
        var dir = {
            link: link,
            restrict: 'E',
            templateUrl: '/app/directive/profileCard.html',
            scope: {
                profile: '=',
                name: '@',
                enable: '='
            },
            controller: controller,
            controllerAs: 'vm'
        };
        return dir;
        function controller($scope) {
            var vm = this;
            vm.data = $scope.profile;
            $scope.changeName = function() {
                debugger;
                $scope.profile.name = 'teo1';
            };
        }
        function link(scope, element, attrs, ngModel) {
            element.on('click', function(){
                scope.$apply(function(){
                     scope.profile.name = 'teo2222';
                });               
            });
        }
    }
})('angularExample', 'profileCard', angular);