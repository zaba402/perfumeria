(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .controller('SzkoleniaController', SzkoleniaController);

    SzkoleniaController.$inject = ['Principal', 'ParseLinks', 'paginationConstants', '$rootScope'];

    function SzkoleniaController(Principal, ParseLinks, paginationConstants, $rootScope) {
        var vm = this;

        vm.clear = clear;
        vm.loadPage = loadPage;
        vm.page = 1;
        vm.totalItems = null;

        function loadPage (page) {
            vm.page = page;
        }

        function clear () {
            vm.szkolenie = {
                id: null, nazwa: null, temat: null, dataOd: null, dataDo: null, liczbaGodzin: null
            };
            vm.editForm.$setPristine();
            vm.editForm.$setUntouched();
        }
    }
})();
