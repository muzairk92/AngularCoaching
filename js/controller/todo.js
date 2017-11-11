
app.controller('todoCtrl', function($scope,authServices,todoServices) {


    $scope.addTodo = function (todo) {
        todo.uid = authServices.id;
        todoServices.addTodo(todo)
    };

    $scope.getAllTodo = function(){

    };

    console.log('Working Todo');
});