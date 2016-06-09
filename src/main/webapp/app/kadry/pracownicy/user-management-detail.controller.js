(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .controller('UserManagementDetailController', UserManagementDetailController);

    UserManagementDetailController.$inject = ['$stateParams', '$rootScope', '$state'];

    function UserManagementDetailController ($stateParams, $rootScope, $state) {
        var vm = this;

        vm.load = load;
        vm.user = {};

        vm.load($stateParams.index);

        function load (index) {
            if (angular.isDefined($rootScope.users)) {
                vm.user = $rootScope.users[index];
            } else {
                $state.go('user-management', null, { reload: true });
            }
        }
    }
})();
