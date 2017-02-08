import angular from 'angular';

import gtMainActivity from './activities/main-activity/main-activity.component.js';

let app = () => {
  return {
    template: '<gt-main-activity></gt-main-activity>',
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
    gtMainActivity
]);

angular.module(MODULE_NAME)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
