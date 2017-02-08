const MODULE_NAME = 'gt.main.activity';

let component = {
    template: require('./main-activity.component.pug'),
    bindings: {
    },
    controller: function() {
        var vm = this;

        vm.data = 'Main Activity!';
    }
};

angular.module(MODULE_NAME, [])
  .component('gtMainActivity', component);

export default MODULE_NAME;
