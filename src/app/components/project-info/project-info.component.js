const MODULE_NAME = 'gt.components.project-info';

let component = {
    template: require('./project-info.component.pug'),
    bindings: {
        "project": "<"
    },
    controller: function() {
        var vm = this;

        vm.placeholder = '[unknown]';
    }
};

angular.module(MODULE_NAME, [])
    .component('gtProjectInfo', component);

export default MODULE_NAME;
