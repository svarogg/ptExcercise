function addTodo($scope, $location, Todo){
  Todo.create($scope.todo,
    function(res){
      $location.path("/todos")
    },
    function(res){
      $scope.errorMessage = "Could not create todo!"
    }
  );
}

webApp.controller(
  'newTodoController',
  [
    '$scope',
    '$location',
    'User',
    'Todo',
    'localStorageService',
    function($scope, $location, User, Todo, localStorageService){
      var user = getCurrentUser(localStorageService);
      if(!user){
        $location.path("/");
      }
      if(!$scope.todo)
        $scope.todo = {};
      $scope.todo.userId = user.id;
      $scope.addTodo = function(){
        addTodo($scope, $location, Todo);
      }
    }
  ]
);