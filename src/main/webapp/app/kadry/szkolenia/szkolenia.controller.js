(function() {
    'use strict';

    angular
        .module('perfumeriaApp')
        .controller('SzkoleniaController', SzkoleniaController);

    SzkoleniaController.$inject = ['Principal', 'User', 'ParseLinks', 'paginationConstants'];

    function SzkoleniaController(Principal, User, ParseLinks, paginationConstants) {
        var vm = this;

    }
})();
