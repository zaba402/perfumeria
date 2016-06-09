(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('kadry', {
            abstract: true,
            parent: 'app'
        });
    }
})();
