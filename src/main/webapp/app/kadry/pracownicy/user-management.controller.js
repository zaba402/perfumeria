(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .controller('UserManagementController', UserManagementController);

    UserManagementController.$inject = ['Principal', 'User', 'ParseLinks', 'paginationConstants', '$rootScope'];

    function UserManagementController(Principal, User, ParseLinks, paginationConstants, $rootScope) {
        var vm = this;

        vm.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        vm.clear = clear;
        vm.currentAccount = null;
        vm.languages = null;
        vm.links = null;
        vm.loadPage = loadPage;
        vm.page = 1;
        vm.totalItems = null;


        Principal.identity().then(function(account) {
            vm.currentAccount = account;
        });

        function loadPage (page) {
            vm.page = page;
        }

        function clear () {
            vm.user = {
                id: null, imie: null, nazwisko: null, pesel: null, stanwisko: null, adres: null
            };
            vm.editForm.$setPristine();
            vm.editForm.$setUntouched();
        }
    }
})();
