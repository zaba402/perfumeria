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
        if (angular.isUndefined($rootScope.szkolenia)) {
            loadMockSzkolenia();
        }

        function loadMockSzkolenia () {
            $rootScope.szkolenia = [{
                id: 1,
                nazwa: "Szkolenie 1",
                temat: "O życiu",
                dataDo: new Date(),
                dataOd: new Date(),
                liczbaGodzin: 3
            }, {
                id: 2,
                nazwa: "Szkolenie 2",
                temat: "O rozpuście",
                dataDo: new Date(),
                dataOd: new Date(),
                liczbaGodzin: 5
            }];
        }

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
