import RolesController from './roles/roles.controller';
import RolesDetailsController from './roles/roles.details.controller';
import UsersController from './users/users.controller';
import SystemResourcesController from './systemResources/systemResources.controller';

// @ngInject
export default function routes($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /route1
    $urlRouterProvider
        .otherwise("/roles/")
        .when('/roles', '/roles/');

    $stateProvider
        .state('root', {
            url: '/',
            template: '<ui-view></ui-view>'
        })
        .state('root.roles', {
            parent: 'root',
            url: 'roles',
            template: '<div class="row"><div ui-view class="col-md-6"></div><div ui-view="roleDetails" class="col-md-6"></div></div>'
        })
        .state('root.roles.view', {
            url: '/',
            template: require('./roles/roles.list.html'),
            controller: RolesController,
            controllerAs: 'vm',
            resolve: {
                objData: function ($service) {
                    return $service.getRoles();
                }
            }
        })
        .state('root.roles.view.detail', {
            url: ':roleId',
            views: {
                'roleDetails@root.roles': {
                    controller: RolesDetailsController,
                    template: require('./roles/roles.details.html'),
                    controllerAs: 'vm'
                },
            }
        })
        .state('root.roles.view.detail.users', {
            url: '/users',
            views: {
                'users@root.roles.view.detail': {
                    template: require('./users/users.html'),
                    controller: UsersController,
                    controllerAs: 'vm'
                }
            },
            data: {
                tabName: 'users'
            },
            resolve: {
                objData: function ($service, $stateParams) {
                    return $service.getUsersByRoleId(parseInt($stateParams['roleId']));
                }
            }
        })
        .state('root.roles.view.detail.systemResources', {
            url: '/systemResources',
            views: {
                'systemResources@root.roles.view.detail': {
                    template: require('./systemResources/systemResources.html'),
                    controller: SystemResourcesController,
                    controllerAs: 'vm'
                }
            },
            data: {
                tabName: 'systemResources'
            },
            resolve: {
                objData: function ($service, $stateParams) {
                    return $service.getSystemResourcesByRoleId(parseInt($stateParams['roleId']));
                }
            }
        });
}
