/**
 * Created by User on 2016-03-30.
 */
(function () {
    'use strict';

    angular
        .module('perfumeriaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('kadry', {
                parent: 'entity',
                url: '/kadry',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'perfumeria'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/kadry/kadry.html',
                        controller: 'KadryController',
                        controllerAs: 'vm'
                    }
                }
            })
    }
})();
