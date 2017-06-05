contacts
    .controller('ContactsController', function($scope, ContactList) {
        ContactList.query().$promise.then(function(data) {
          console.log("DATA RESPONSE CONTACTS QUERY:", data);
            $scope.contactList = data;
        });

});

contacts
    .controller('FormController', ['$scope','$http', function($scope,$http) {
        $scope.data = {};
        $scope.data.message = '';

        $scope.submit = function(name,number) {

          console.log('inSubmit:',name,number)

          if(number.length <= 10) {
            $scope.data.message = 'please enter a e.164 valid format';
          } else {
            $scope.data.message = '';
          $http({
                method:'POST',
                url:"http://localhost:8000/contacts",
                headers: {
                    'Content-Type': 'text/plain'
                },
                data: {name: name, number: number}
            }).then(function(response) {
                console.log('RESPONSE: ', response);
                return response;
            })
          }
      }
}]);
