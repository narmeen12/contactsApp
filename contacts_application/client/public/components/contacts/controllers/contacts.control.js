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

        console.log('shouldBeNull:',$scope.name,$scope.number)

        $scope.submit = function(name,number) {

          console.log('inSubmit:',name,number)

          if(number.length <= 10) {
            $scope.data.message = 'please enter a e.164 valid format';
          } else {
            $scope.data.message = '';
          $http({
                method:'POST',
                url:"http://localhost:8000/contacts/:id/",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {name: name, number: number}
            }).then(function(response) {
                console.log('RESPONSE: ', response);
                return response;
            })
          }
      }
}]);

// contacts
//     .controller('FormController', function($scope, $http,FormInput) {
//         $scope.data = {};
//         $scope.info = null;
//         $scope.submit = function() {
//           console.log($scope.data)
//           $http.post('http://localhost:8000/contacts/:id/')
//
//         }
//
// });
