var contacts = angular.module("contacts", []);

angular
    .module('ContactsApplication', [
        'appRoutes',
        'contacts',
        'ngResource'
    ]);

// Application module is created. This will act as the main module that brings together all other modules within the application. 
// We also have our three dependencies inserted here.
