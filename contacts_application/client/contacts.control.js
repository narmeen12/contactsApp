contacts
    .controller('ContactsController', function($scope, ContactList) {
        ContactList.query().$promise.then(function(data) {
            $scope.contactList = data;
        });

          $scope.data = {}
          //scope object created so we can append variables;
          $scope.data.message = '';
          $scope.data.invalidName = '';

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

        $scope.destroy = function(contact) {
          console.log(contact)
          ContactList.delete(contact.number,{id:contact.id}).$promise.then(function(resp){
            window.location = '/';
      })
    }
});
