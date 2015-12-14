(function (moduleId,  ng)	{
	'use strict';

	var app = ng.module(moduleId, [
		//DEPENDENCIES
		'ngResource'
	]);

	app.run(main);

	/* @ngInject */
	function main() {
		//STARTUP FUNCTION
		
	}
})('angularExample.services', angular);