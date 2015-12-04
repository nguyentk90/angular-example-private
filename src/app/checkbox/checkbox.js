(function (moduleId, controllerId, ng) {
    'use strict';

    ng.module(moduleId).controller(controllerId, controller);

    /* @ngInject */
    function controller($q, $timeout) {
        var vm = this;
        vm.items = [1, 2, 3, 4, 5];
        vm.selected = [1,4];
        vm.toggle = function (item, list) {
            var idx = list.indexOf(item);
            if (idx > -1) list.splice(idx, 1);
            else list.push(item);
        };
        vm.exists = function (item, list) {
            console.log(item);
            return vm.items.indexOf(item) > -1;
        };
        
        load();
        
        var item = 6;
        
        vm.pushItem = function(){            
            vm.items.push(++item);
        }
        
        function load(){
            var defer = $q.defer();
            $timeout(function(){                                
                defer.resolve(6)
            }, 2000);
            
            defer.promise.then(function(data){
                vm.items.push(data);
            });
        }
    }
})('angularExample', 'checkbox', angular);