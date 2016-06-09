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
        });
    }
})();
