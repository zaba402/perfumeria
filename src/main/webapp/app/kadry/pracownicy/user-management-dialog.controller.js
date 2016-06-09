(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .controller('UserManagementDialogController',UserManagementDialogController);

    UserManagementDialogController.$inject = ['$stateParams', '$uibModalInstance', 'entity', '$rootScope'];

    function UserManagementDialogController ($stateParams, $uibModalInstance, entity, $rootScope) {
        var vm = this;

        vm.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        vm.clear = clear;
        vm.languages = null;
        vm.save = save;
        vm.user = entity;



        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function onSaveSuccess (result) {
            vm.isSaving = false;
            $uibModalInstance.close(result);
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        function save () {
            vm.isSaving = true;
            if (vm.user.id !== null) {
                $rootScope.users.forEach(function (user) {
                    if (user.id === vm.user.id) {
                        user.imie = vm.user.imie;
                        user.nazwisko = vm.user.nazwisko;
                        user.pesel = vm.user.pesel;
                        user.stanwisko = vm.user.stanwisko;
                        user.adres = vm.user.adres;
                    }
                });
            } else {
                vm.user.id = $rootScope.users.length + 1;
                $rootScope.users.push(vm.user);
            }
            clear();
        }
    }
})();
