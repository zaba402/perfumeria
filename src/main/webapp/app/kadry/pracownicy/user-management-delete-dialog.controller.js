(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .controller('UserManagementDeleteController', UserManagementDeleteController);

    UserManagementDeleteController.$inject = ['$uibModalInstance', 'entity', '$rootScope'];

    function UserManagementDeleteController ($uibModalInstance, entity, $rootScope) {
        var vm = this;
        vm.index = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (index) {
            $rootScope.users.splice(index, 1);
            clear();
        }
    }
})();
