var User, localStorageService;

function logout($scope, $location){
  clearCurrentUser(localStorageService);
  User.logout();
  $location.path("/");
}

function login($scope, $location){
  User.login($scope.user,
    function(res){
      user = res.user;
      setCurrentUser(localStorageService, user);
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

function register($scope, $location){
  User.create($scope.user,
    function(res){
      login($scope, $location);
    },
    function(res){
      $scope.errorMessage = "Could not register user!"
    }
  );
}

webApp.controller(
  'loginRegisterController',
  [
    '$scope',
    '$location',
    'User',
    'localStorageService',
    function($scope, $location, _User, _localStorageService){
      User = _User;
      localStorageService = _localStorageService;
      $scope.login = function(){
        login($scope, $location);
      };
      $scope.register = function(){
        register($scope, $location);
      }
      $scope.logout = function(){
        logout($scope, $location);
      }
    }
  ]
);