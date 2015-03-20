
function specifyRoutes($routeProvider){
  $routeProvider
    .when('/',  {templateUrl: 'partials/login_register.html'})
    .when('/todos', {templateUrl: 'partials/todos.html'})
    .when('/todos/new', {templateUrl: 'partials/new_todo.html'})
}

var webApp = angular.module('webApp', ['ngRoute', 'lbServices', 'LocalStorageModule']);

webApp.config(specifyRoutes);