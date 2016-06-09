(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .controller('SzkoleniaDeleteController', SzkoleniaDeleteController);

    SzkoleniaDeleteController.$inject = ['$uibModalInstance', 'entity', '$rootScope'];

    function SzkoleniaDeleteController ($uibModalInstance, entity, $rootScope) {
        var vm = this;
        vm.index = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (index) {
            $rootScope.szkolenia.splice(index, 1);
            clear();
        }
    }
})();
