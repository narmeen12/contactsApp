contacts
    .controller('ContactsController', function($scope, ContactList) {
        ContactList.query().$promise.then(function(data) {
          console.log("DATA RESPONSE CONTACTS QUERY:", data);
            $scope.contactList = data;
        });

});

contacts
    .controller('FormController', ['$scope', function($scope) {
        $scope.message = "Hello World";
        console.log($scope.message)
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
