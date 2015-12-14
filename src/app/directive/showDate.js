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
			restrict: 'EA',
			scope: {
				date: '='
			},
			template: '<div><p>{{date.day}}</p><p>{{getFullDate()}}</p></div>',
			controller: controller
		};
		return dir;

		function link(scope, element, attrs, ngModel) {
			
		}
		
		function controller($scope) {
			var vm = this;
			$scope.$watch('date', function(current){
				console.log(current);
			});
			$scope.getFullDate = function() {
				console.log('getting ful...');
				return new Date().getTime();
			}
		}
	}
})('angularExample', 'showDate', angular);