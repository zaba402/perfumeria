(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .controller('SzkoleniaDialogController',SzkoleniaDialogController);

    SzkoleniaDialogController.$inject = ['$stateParams', '$uibModalInstance', 'entity', '$rootScope'];

    function SzkoleniaDialogController ($stateParams, $uibModalInstance, entity, $rootScope) {
        var vm = this;

        vm.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        vm.clear = clear;
        vm.languages = null;
        vm.save = save;
        vm.szkolenie = entity;
        vm.datePickerOd = {
            opened: false
        };
        vm.datePickerDo = {
            opened: false
        };


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
            if (vm.szkolenie.id !== null) {
                $rootScope.szkolenia.forEach(function (szkolenie) {
                    if (szkolenie.id === vm.szkolenie.id) {
                        szkolenie.nazwa = vm.szkolenie.nazwa;
                        szkolenie.temat = vm.szkolenie.temat;
                        szkolenie.liczbaGodzin = vm.szkolenie.liczbaGodzin;
                        szkolenie.dataOd = vm.szkolenie.dataOd;
                        szkolenie.dataDo = vm.szkolenie.dataDo;
                    }
                });
            } else {
                vm.szkolenie.id = $rootScope.szkolenia.length + 1;
                $rootScope.szkolenia.push(vm.szkolenie);
            }
            clear();
        }
    }
})();
