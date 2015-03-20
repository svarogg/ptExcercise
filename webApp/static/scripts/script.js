function login($scope, $location, User){
  User.login($scope.user,
    function(res){
      $scope.$root.user = res.user;
      $scope.$root.user.token = res.id;
      $location.path("/todos");
    },
    function(res){
      if(res.status == 401){
        $scope.errorMessage = "Bad email/password!"
      }
      else
      {
        $scope.errorMessage = "Could not log in!"
      }
    }
  );
}

function register($scope, $location, User){
  User.create($scope.user,
    function(res){
      login($scope, $location, User);
    },
    function(res){
      $scope.errorMessage = "Could not register user!"
    }
  );
}

function specifyRoutes($routeProvider){
  $routeProvider
    .when('/',  {templateUrl: 'partials/login_register.html'})
    .when('/todos', {templateUrl: 'partials/todos.html'})
    .when('/todos/new', {templateUrl: 'partials/new_todo.html'})
}

var webApp = angular.module('webApp', ['ngRoute', 'serverApi', 'LocalStorageModule']);

webApp.controller(
  'loginRegisterController',
  [
    '$scope',
    '$location',
    'User',
    function($scope, $location, User){
      $scope.login = function(){
        login($scope, $location, User);
      };
      $scope.register = function(){
        register($scope, $location, User);
      }
    }
  ]
);

webApp.controller(
  'todoController',
  [
    '$scope',
    '$location',
    'User',
    function($scope, $location, User){
      if(!$scope.$root.user){
        // TODO: Remove this. For DEBUG purposes only
        User.login($scope.user, {"email": "pipiska@gmail.com", "password": "1234"},
          function(res){
            $scope.$root.user = res.user;
            $scope.$root.token = res.id;
          });
        // $location.path("/");
      }
    }
  ]
);


webApp.config(specifyRoutes);