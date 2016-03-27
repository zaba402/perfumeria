(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .factory('KsiegowoscService', KsiegowoscService);

    KsiegowoscService.$inject = ['$resource'];

    function KsiegowoscService ($resource) {
        var service = {
            
        };

        return service;
    }

})();
