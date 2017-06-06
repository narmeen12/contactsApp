angular
    .module('appRoutes', ["ui.router"])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider.state({
        name: 'contacts',
        url: '/',
        templateUrl: 'public/components/contacts/templates/contacts.template',
        controller: 'ContactsController'
    });

    $urlRouterProvider.otherwise('/');
}]);

// Here, another module is defined: appRoutes . This module has a dependency on ui.router so that we can use $stateProvider to alter application states.
//
// One state is defined in appRoutes: "contacts". When users visit the base URL for my application, /, I want them to see the Contacts controller module using the template and controller.
