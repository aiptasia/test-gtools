const MODULE_NAME = 'gt.main.activity';

import './main-activity.component.scss';

import gtProjectInfo from '../../components/project-info/project-info.component.js';
import gtProjectSelector from '../../components/project-selector/project-selector.component.js';
import gtUserSearch from '../../components/user-search/user-search.component.js';
import gtUserSelector from '../../components/user-selector/user-selector.component.js';
import gtApiGitHub from '../../api/github.service.js';

let component = {
    template: require('./main-activity.component.pug'),
    controller: ['GitHubProject', 'GitHubUser', function(GitHubProject, GitHubUser) {
        var vm = this;

        vm.cleanUsers = function() {
            vm.users = [];
            vm.activeUser = undefined;
            vm.loadProjects();
        }

        vm.cleanProjects = function() {
            vm.projects = [];
            vm.activeProject = undefined;
        }

        vm.onUserSearch = function(search) {
            vm.loadUsers(search);
        }

        vm.onUserSelect = function(user) {
            vm.activeUser = user;
            vm.loadProjects();
        }

        vm.onProjectSelect = function(project) {
            vm.activeProject = project;
        }

        vm.loadUsers = function(search) {
            vm.error = undefined;

            if (!search) {
                vm.cleanUsers();
            } else {
                GitHubUser.get({ q: search }, function(users) {
                    vm.users = users.items;
                    if (vm.users.length) {
                        vm.activeUser = vm.users[0];
                        vm.loadProjects();
                    } else {
                        vm.cleanUsers();
                    }
                }, function(error) {
                    vm.cleanUsers();
                    vm.error = error.data.message;
                });
            }
        }

        vm.loadProjects = function() {
            vm.error = undefined;

            if (!vm.activeUser) {
                vm.cleanProjects();
            } else {
                GitHubProject.query({ username: vm.activeUser.login }, function(projects) {
                    vm.projects = projects;
                    if (vm.projects.length) {
                        vm.activeProject = vm.projects[0];
                    } else {
                        vm.cleanProjects();
                    }
                }, function(error) {
                    vm.cleanUsers();
                    vm.error = error.data.message;
                });
            }
        }
    }]
};

angular.module(MODULE_NAME, [
    gtProjectInfo,
    gtProjectSelector,
    gtUserSearch,
    gtUserSelector,
    gtApiGitHub
])

angular.module(MODULE_NAME)
    .component('gtMainActivity', component);

export default MODULE_NAME;
