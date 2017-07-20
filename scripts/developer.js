var app = angular.module('EmpList',[]);
    app.controller('EmpCtrl',function($scope,$http,$location){
    $http.get('http://localhost:50164/api/Employee/get').then(function(response) {
        var test = $location.search();
        $scope.employees = response.data;
    });
});