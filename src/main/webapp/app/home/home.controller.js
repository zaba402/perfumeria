(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$rootScope'];

    function HomeController ($scope, Principal, LoginService, $rootScope) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();
        if (angular.isUndefined($rootScope.users)) {
            loadMockUsers();
        }
        if (angular.isUndefined($rootScope.szkolenia)) {
            loadMockSzkolenia();
        }

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

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }
    }
})();
