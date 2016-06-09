(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .controller('UserManagementDetailController', UserManagementDetailController);

    UserManagementDetailController.$inject = ['$stateParams', '$rootScope', '$state', '$http'];

    function UserManagementDetailController ($stateParams, $rootScope, $state, $http) {
        var vm = this;

        vm.load = load;
        vm.getPlik = getPlik;
        vm.user = {};

        vm.load($stateParams.index);

        function load (index) {
            if (angular.isDefined($rootScope.users)) {
                vm.user = $rootScope.users[index];
            } else {
                $state.go('user-management', null, { reload: true });
            }
        }

        function getPlik(plik) {
            var req = {
                method: 'GET',
                url: 'dokumenty/' + plik,
                responseType: 'arraybuffer'
            };
            return $http(req).success(function (data) {
                var file = new Blob([data], {type: 'application/msword'});
                if (file.size > 0) {
                    saveAs(file, plik);
                } else {
                    self.JQueryService.pokazBlad("Podana sprawa nie zawiera zdjęć");
                }
            });
        }
    }
})();
