angular.module('EmpList').service('PeopleService', function($http) {
  var service = {
    getAllPeople: function() {
        return $http.get('http://localhost:50164/api/Employee/get').then(function(resp) {
            return resp.data;
      });
    }
  }
  
  return service;
})
