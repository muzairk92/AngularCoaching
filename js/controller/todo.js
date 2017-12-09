
app.controller('todoCtrl', function($scope,authServices,todoServices) {
 $scope.allTodos;

    $scope.addTodo = function (todo) {
        todoServices.add(todo);
        $scope.getAllTodo();
    };

    $scope.getAllTodo = function(){
        $scope.allTodos = todoServices.getAllTodo();
    };

    $scope.deleteTodo = function(data){
        console.log(data);
        todoServices.deleteTodo(data)
    };

    $scope.updateTodo = function(data){
        console.log(data);
        todoServices.updateTodo(data)
    };
    console.log('Working Todo');
});