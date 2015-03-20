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