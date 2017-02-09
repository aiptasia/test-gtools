const MODULE_NAME = 'gt.api.github';

import angularResource from 'angular-resource';

angular.module(MODULE_NAME, ['ngResource'])
    .factory('GitHubProject', ['$resource', function($resource) {
        return $resource('https://api.github.com/users/:username/repos');
    }])
    .factory('GitHubUser', ['$resource', function($resource) {
        return $resource('https://api.github.com/search/users');
    }]);

export default MODULE_NAME;
