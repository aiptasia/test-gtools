const MODULE_NAME = 'gt.components.user-search';
const KEYUP_EVENT_DELAY = 300;

let component = {
    template: require('./user-search.component.pug'),
    bindings: {
        "onUserSearch": "&"
    },
    controller: ['$timeout', function($timeout) {
        var vm = this;

        vm.onKeyUp = function() {
            if (vm.timer) {
                $timeout.cancel(vm.timer);
            }
            vm.timer = $timeout(function() {
                vm.onUserSearch({ search: vm.search });
            }, KEYUP_EVENT_DELAY);
        }
    }]
};

angular.module(MODULE_NAME, [])
    .component('gtUserSearch', component);

export default MODULE_NAME;
