contacts
    .controller('ContactsController', function($scope, ContactList) {
        ContactList.query().$promise.then(function(data) {
          console.log("DATA RESPONSE CONTACTS QUERY:", data);
            $scope.contactList = data;
        });

          $scope.data = {}
          $scope.data.message = '';

          $scope.submit = function(name,number) {
            ContactList.create({name:name,number,number}).$promise.then(function(resp){
              console.log(resp)
            })
          }
});

contacts
    .controller('FormController', ['$scope','$http', function($scope,$http,) {
        $scope.data = {};
        $scope.data.message = '';

        $scope.submit = function(name,number) {

          console.log('inSubmit:',name,number)

          if(number.length <= 10) {
            $scope.data.message = 'please enter a e.164 valid format';
          } else {
            $scope.data.message = '';
            Form.create({name:name,number,number})
                .$promise.then(function(data){
                  console.log("THE DATA RESPONSE", data)
                })

          }
      }
}]);
