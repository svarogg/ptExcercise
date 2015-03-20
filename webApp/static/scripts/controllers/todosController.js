var Todo

function deleteTodo(todoId){
  Todo.deleteById({id: todoId});
};

function loadTodos($scope, userId){
  Todo.find(
    {
      filter: { where: {userId: userId} }
    },
    function(list){
      $scope.todos = list;
      if(list.length == 0){
        $scope.errorMessage = "You don't have any todos! :P";
      }
    },
    function(err){
      $scope.errorMessage = "Couldn't load your todos!";
    }
  );
}


webApp.controller(
  'todoController',
  [
    '$scope',
    '$location',
    '$route',
    'Todo',
    'localStorageService',
    function($scope, $location, $route, _Todo, localStorageService){
      Todo = _Todo;

      var user = getCurrentUser(localStorageService);
      if(!user){
        $location.path("/");
        return;
      }
      loadTodos($scope, user.id);

      $scope.deleteTodo = function(todoId){
        deleteTodo(todoId);
        $route.reload();
      }
    }
  ]
);