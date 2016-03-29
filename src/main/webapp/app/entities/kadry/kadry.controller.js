/**
 * Created by User on 2016-03-30.
 */
(function () {
    'use strict';

    angular
        .module('perfumeriaApp')
        .controller('KadryController', KadryController);

    KadryController.$inject = ['KadryService', 'Pracownik', 'ParseLinks', 'paginationConstants'];

    function KadryController(KadryService, Pracownik, ParseLinks, paginationConstants) {
        var vm = this;

        vm.currentAccount = null;
        vm.languages = null;
        vm.links = null;
        vm.loadAll = loadAll;
        vm.loadPage = loadPage;
        vm.page = 1;
        vm.pracownicy = [];
        vm.loadAll();
        function loadAll() {
            Pracownik.query({page: vm.page - 1, size: paginationConstants.itemsPerPage}, function (result, headers) {
                vm.links = ParseLinks.parse(headers('link'));
                vm.totalItems = headers('X-Total-Count');
                vm.pracownicy = result;
                //console.log(vm.pracownicy);
            });
        }

        function loadPage(page) {
            vm.page = page;
            vm.loadAll();
        }
    }


})();
