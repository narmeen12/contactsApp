// Only one controller for this App needed. Here we have the functions that submit, create, and delete(destroy) contacts.

contacts
    .controller('ContactsController', function($scope, ContactList) {
    //Get all Contacts
        ContactList.query().$promise.then(function(data) {
            $scope.contactList = data;
        });

          $scope.data = {}

          $scope.data.message = '';
          $scope.data.invalidName = '';
          $scope.deleteContact = null;

    //Create New Contact
          $scope.submit = function(name,number) {
            if(name === undefined) {
              $scope.data.invalidName = 'Must Enter a Contact Name'
            } else if(number === undefined || number.length < 11) {
              $scope.data.message = 'Invalid Phone Number'
            } else {
              $scope.data.message = '';
              $scope.data.invalidName = '';
              ContactList.create({name:name,number:number}).$promise.then(function(resp){
                console.log(resp)
                window.location = '/';
              })
            }
          }
    //Delete Contact
          $scope.destroy = function(contact) {
            console.log(contact)
            ContactList.delete(contact.number,{id:contact.id}).$promise.then(function(resp){
              window.location = '/';
            })

          }
});
