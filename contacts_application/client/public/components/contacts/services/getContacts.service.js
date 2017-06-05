contacts
    .factory('ContactList', function($resource) {
        return $resource(
            'http://localhost:8000/contacts/:id/',
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: true,
                    headers: {
                        'Content-Type':'application/json'
                    }
                },
                'create': {
                  method:'POST',
                  headers:{
                    'Content-Type':'application/json'
                  }
                }
            },
            {
                stripTrailingSlashes: false
            }
        );
});
