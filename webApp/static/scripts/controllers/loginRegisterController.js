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