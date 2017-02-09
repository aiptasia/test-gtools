const MODULE_NAME = 'gt.components.user-selector';

let component = {
    template: require('./user-selector.component.pug'),
    bindings: {
        "users": "<",
        "activeUser": "<",
        "onSelect": "&"
    },
    controller: function() {
        var vm = this;

        vm.onUserSelect = function(user) {
            vm.onSelect({ user: user });
        }
    }
};

angular.module(MODULE_NAME, [])
    .component('gtUserSelector', component);

export default MODULE_NAME;
