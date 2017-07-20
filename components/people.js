alert('component');

angular.module('EmpList').component('Get', {
  bindings: { people: '<' },
  
  template: '<h3>Some people:</h3>'
})