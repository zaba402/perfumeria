/**
 * Created by User on 2016-03-30.
 */
(function () {
    'use strict';

    angular
        .module('perfumeriaApp')
        .factory('KadryService', KadryService);

    KadryService.$inject = ['$resource'];

    function KadryService($resource) {
        var service = {};

        return service;
    }

})();
