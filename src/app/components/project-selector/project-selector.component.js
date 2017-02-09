const MODULE_NAME = 'gt.components.project-selector';

let component = {
    template: require('./project-selector.component.pug'),
    bindings: {
        "projects": "<",
        "activeProject": "<",
        "onSelect": "&"
    },
    controller: function() {
        var vm = this;

        vm.onProjectSelect = function(project) {
            vm.onSelect({ project: project });
        }
    }
};

angular.module(MODULE_NAME, [])
    .component('gtProjectSelector', component);

export default MODULE_NAME;
