/* jshint -W098 */
/* jshint -W087 */

(function (moduleId, ng) {
    'use strict';

    ng.module(moduleId).config(config);

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main', {
            views: {
                'navigation@': {
                    templateUrl: '/app/shell/navigation/navigation.html',
                    controller: 'navigation as vm'
                },

                'header@': {
                    templateUrl: '/app/shell/header/header.html',
                    controller: 'header as vm'
                }
            }
        });
        $stateProvider.state('home', {
            parent: 'main',
            url: '/',
            views: {
                'content@': {
                    templateUrl: '/app/home/home.html',
                    controller: 'home as vm'
                },
            }
        });
        $stateProvider.state('profile', {
            parent: 'main',
            url: '/profile',
            views: {
                'content@': {
                    templateUrl: '/app/profile/profile.html',
                    controller: 'profile as vm'
                },
            }
        });
        $stateProvider.state('dialog', {
            parent: 'main',
            url: '/dialog',
            views: {
                'content@': {
                    templateUrl: '/app/dialog/dialog.html',
                    controller: 'dialog as vm'
                },
            }
        });
         $stateProvider.state('menu', {
            parent: 'main',
            url: '/menu',
            views: {
                'content@': {
                    templateUrl: '/app/menu/menu.html',
                    controller: 'menu as vm'
                },
            }
        });
    }
})('angularExample', angular);