(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('accountancy', {
                parent: 'entity',
                url: '/accountancy',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'perfumeria'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/ksiegowosc/ksiegowosc.html',
                        controller: 'KsiegowoscController',
                        controllerAs: 'vm'
                    }
                }
            })
    }
})();
