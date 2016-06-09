(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('user-management', {
            parent: 'kadry',
            url: '/pracownicy',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'perfumeria'
            },
            views: {
                'content@': {
                    templateUrl: 'app/kadry/pracownicy/user-management.html',
                    controller: 'UserManagementController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('user-management-detail', {
            parent: 'kadry',
            url: '/user/:login',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'perfumeria'
            },
            views: {
                'content@': {
                    templateUrl: 'app/kadry/pracownicy/user-management-detail.html',
                    controller: 'UserManagementDetailController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('user-management.new', {
            parent: 'user-management',
            url: '/dodaj',
            data: {
                authorities: ['ROLE_ADMIN']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/kadry/pracownicy/user-management-dialog.html',
                    controller: 'UserManagementDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                id: null, login: null, firstName: null, lastName: null, email: null,
                                activated: true, langKey: null, createdBy: null, createdDate: null,
                                lastModifiedBy: null, lastModifiedDate: null, resetDate: null,
                                resetKey: null, authorities: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('user-management', null, { reload: true });
                }, function() {
                    $state.go('user-management');
                });
            }]
        })
        .state('user-management.edit', {
            parent: 'user-management',
            url: '/edytuj/:index',
            data: {
                authorities: ['ROLE_ADMIN']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/kadry/pracownicy/user-management-dialog.html',
                    controller: 'UserManagementDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['$rootScope', function($rootScope) {
                            if (angular.isDefined($rootScope.users)) {
                                return angular.copy($rootScope.users[$stateParams.index]);
                            } else {
                                $state.go('user-management', null, { reload: true });
                            }
                            // return User.get({login : $stateParams.login});
                        }]
                    }
                }).result.then(function() {
                    $state.go('user-management', null, { reload: true });
                }, function() {
                    $state.go('user-management', null, { reload: true });
                });
            }]
        })
        .state('user-management.delete', {
            parent: 'user-management',
            url: '/usun//:index',
            data: {
                authorities: ['ROLE_ADMIN']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/kadry/pracownicy/user-management-delete-dialog.html',
                    controller: 'UserManagementDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['$rootScope', function($rootScope) {
                            if (angular.isDefined($rootScope.users)) {
                                return $stateParams.index;
                            } else {
                                $state.go('user-management', null, { reload: true });
                            }
                        }]
                    }
                }).result.then(function() {
                    $state.go('user-management', null, { reload: true });
                }, function() {
                    $state.go('user-management', null, { reload: true });
                });
            }]
        });
    }
})();
