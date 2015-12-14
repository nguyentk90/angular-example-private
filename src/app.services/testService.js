(function (moduleId, factoryId, ng) {
	'use strict';

	ng.module(moduleId).factory(factoryId, factory);

	/* @ngInject */
	function factory($resource) {
		var api = 'http://localhost:50688/api';		
		var resource = $resource(api + '/values/:id', null, {
			
		});
		
		var service = {			
			get: function (onSuccess, onFailed) {
				return resource.get(onSuccess, onFailed);
			}	
		};

		return service;
	
	}
})('angularExample.services', 'testService', angular);