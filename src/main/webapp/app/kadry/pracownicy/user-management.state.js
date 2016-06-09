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
            url: '/user/:index',
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
                                id: null, imie: null, nazwisko: null, pesel: null, stanwisko: null, adres: null
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
            onEnter: ['$stateParams', '$state', '$uibModal', '$rootScope', function($stateParams, $state, $uibModal, $rootScope) {
                if (angular.isDefined($rootScope.users)) {
                    $uibModal.open({
                        templateUrl: 'app/kadry/pracownicy/user-management-dialog.html',
                        controller: 'UserManagementDialogController',
                        controllerAs: 'vm',
                        backdrop: 'static',
                        size: 'lg',
                        resolve: {
                            entity: [function() {
                                return angular.copy($rootScope.users[$stateParams.index]);
                            }]
                        }
                    }).result.then(function() {
                        $state.go('user-management', null, { reload: true });
                    }, function() {
                        $state.go('user-management', null, { reload: true });
                    });
                } else {
                    $state.go('user-management', null, { reload: true });
                }
            }]
        })
        .state('user-management.delete', {
            parent: 'user-management',
            url: '/usun/:index',
            data: {
                authorities: ['ROLE_ADMIN']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', '$rootScope', function($stateParams, $state, $uibModal, $rootScope) {
                if (angular.isDefined($rootScope.users)) {
                    $uibModal.open({
                        templateUrl: 'app/kadry/pracownicy/user-management-delete-dialog.html',
                        controller: 'UserManagementDeleteController',
                        controllerAs: 'vm',
                        size: 'md',
                        resolve: {
                            entity: [function() {
                                return $stateParams.index;
                            }]
                        }
                    }).result.then(function() {
                        $state.go('user-management', null, { reload: true });
                    }, function() {
                        $state.go('user-management', null, { reload: true });
                    });
                } else {
                    $state.go('user-management', null, { reload: true });
                }
            }]
        });
    }
})();
