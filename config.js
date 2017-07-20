var myApp = angular.module('EmpList', ['ngRoute','ui.router', 'ui.router.visualizer']);
alert('config');
myApp.config(function($stateProvider) {
  // An array of state definitions
  var states = [
    { 
      name: 'hello', 
      url: '',
      // Using component: instead of template:
      component: 'Get',
      resolve: {
        people: function(PeopleService) {
          return PeopleService.getAllPeople();
        }
      }
    }
  ]
  
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});