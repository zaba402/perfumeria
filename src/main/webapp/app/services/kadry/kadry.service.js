/**
 * Created by User on 2016-03-30.
 */
(function () {
    'use strict';

    angular
        .module('perfumeriaApp')
        .factory('Pracownik', Pracownik);

    Pracownik.$inject = ['$resource'];

    function Pracownik($resource) {
        var service = $resource('/api/kadry/pracownicy', {}, {
            'query': {method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'save': {method: 'POST'},
            'update': {method: 'PUT'},
            'delete': {method: 'DELETE'}
        });

        return service;
    }
})();
