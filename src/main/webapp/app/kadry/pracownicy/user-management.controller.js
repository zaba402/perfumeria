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
        if (angular.isUndefined($rootScope.users)) {
            loadMockUsers();
        }


        Principal.identity().then(function(account) {
            vm.currentAccount = account;
        });


        function loadMockUsers () {
            $rootScope.users = [{
                id: 1,
                imie: "Jan",
                nazwisko: "Nowak",
                pesel: "43223443223",
                stanwisko: 'Administrator',
                adres: '10-075 Olsztyn, Dworcowa 12a/2'
            }]
        }

        function loadPage (page) {
            vm.page = page;
        }

        function clear () {
            vm.user = {
                id: null, login: null, firstName: null, lastName: null, email: null,
                activated: null, langKey: null, createdBy: null, createdDate: null,
                lastModifiedBy: null, lastModifiedDate: null, resetDate: null,
                resetKey: null, authorities: null
            };
            vm.editForm.$setPristine();
            vm.editForm.$setUntouched();
        }
    }
})();
