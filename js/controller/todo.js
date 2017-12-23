
app.controller('todoCtrl', function($scope,authServices,todoServices) {

    $scope.isSorting = false;

    $scope.addTodo = function (todo) {
        var aa = angular.copy(todo);
        todoServices.add(aa);
        // todo = null;
       // $scope.getAllTodo();
    };

    $scope.getAllTodo = function(){
        $scope.allTodos = todoServices.getAllTodo();
    };

    $scope.getAllTodo();

    $scope.deleteTodo = function(data){
        console.log(data);
        todoServices.deleteTodo(data)
    };

    $scope.updateTodo = function(data){
        console.log(data);
        todoServices.updateTodo(data)
    };

    $scope.sort = function () {
        $scope.isSorting = !$scope.isSorting;
    }
    console.log('Working Todo');
});