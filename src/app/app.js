(function (moduleId, ng) {
    'use strict';

    var app = ng.module(moduleId, [
        'ngMaterial',
        'ui.router'
    ]);

    app.run(main);

    /* @ngInject */
    function main() {
        //Startup function
    }

})('angularExample', angular);