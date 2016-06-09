(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('szkolenia', {
            parent: 'kadry',
            url: '/szkolenia',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'perfumeria'
            },
            views: {
                'content@': {
                    templateUrl: 'app/kadry/szkolenia/szkolenia.html',
                    controller: 'SzkoleniaController',
                    controllerAs: 'vm'
                }
            }
        })
            .state('szkolenia.new', {
                parent: 'szkolenia',
                url: '/dodaj',
                data: {
                    authorities: ['ROLE_ADMIN']
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'app/kadry/szkolenia/szkolenia-dialog.html',
                        controller: 'SzkoleniaDialogController',
                        controllerAs: 'vm',
                        backdrop: 'static',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    id: null, nazwa: null, temat: null, liczbaGodzin: null, dataOd: null, dataDo: null
                                };
                            }
                        }
                    }).result.then(function() {
                        $state.go('szkolenia', null, { reload: true });
                    }, function() {
                        $state.go('szkolenia');
                    });
                }]
            })
            .state('szkolenia.edit', {
                parent: 'szkolenia',
                url: '/edytuj/:index',
                data: {
                    authorities: ['ROLE_ADMIN']
                },
                onEnter: ['$stateParams', '$state', '$uibModal', '$rootScope', function($stateParams, $state, $uibModal, $rootScope) {
                    if (angular.isDefined($rootScope.szkolenia)) {
                        $uibModal.open({
                            templateUrl: 'app/kadry/szkolenia/szkolenia-dialog.html',
                            controller: 'SzkoleniaDialogController',
                            controllerAs: 'vm',
                            backdrop: 'static',
                            size: 'lg',
                            resolve: {
                                entity: [function() {
                                    return angular.copy($rootScope.szkolenia[$stateParams.index]);
                                }]
                            }
                        }).result.then(function() {
                            $state.go('szkolenia', null, { reload: true });
                        }, function() {
                            $state.go('szkolenia', null, { reload: true });
                        });
                    } else {
                        $state.go('szkolenia', null, { reload: true });
                    }
                }]
            })
            .state('szkolenia.delete', {
                parent: 'szkolenia',
                url: '/usun/:index',
                data: {
                    authorities: ['ROLE_ADMIN']
                },
                onEnter: ['$stateParams', '$state', '$uibModal', '$rootScope', function($stateParams, $state, $uibModal, $rootScope) {
                    if (angular.isDefined($rootScope.szkolenia)) {
                        $uibModal.open({
                            templateUrl: 'app/kadry/szkolenia/szkolenia-delete-dialog.html',
                            controller: 'SzkoleniaDeleteController',
                            controllerAs: 'vm',
                            size: 'md',
                            resolve: {
                                entity: [function() {
                                    return $stateParams.index;
                                }]
                            }
                        }).result.then(function() {
                            $state.go('szkolenia', null, { reload: true });
                        }, function() {
                            $state.go('szkolenia', null, { reload: true });
                        });
                    } else {
                        $state.go('szkolenia', null, { reload: true });
                    }
                }]
            });
    }
})();
