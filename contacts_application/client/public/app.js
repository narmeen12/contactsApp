var contacts = angular.module("contacts", []);

angular
    .module('ContactsApplication', [
        'appRoutes',
        'contacts',
        'ngResource'
    ]);
