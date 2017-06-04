contacts
    .factory('ContactList', function($resource, $http) {
      $http.get("/getContacts")
    .then(function(resp){
      var parsed = JSON.parse(resp.data)
      console.log("HEREEEEEEEEEEEEEEEEEEEEE",parsed)
    
      })
    });
