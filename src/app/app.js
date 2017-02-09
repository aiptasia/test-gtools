import angular from 'angular';

import './app.scss';
import gtMainActivity from './activities/main-activity/main-activity.component.js';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
    gtMainActivity
]);

export default MODULE_NAME;
