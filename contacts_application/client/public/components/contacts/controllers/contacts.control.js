contacts
    .controller('ContactsController', function($scope, ContactList) {
        ContactList.query().$promise.then(function(data) {
          console.log("DATA RESPONSE CONTACTS QUERY:", data);
            $scope.contactList = data;
        });

});
