const MODULE_NAME = 'gt.main.activity';

let component = {
    template: '{{$ctrl.data}}',
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
