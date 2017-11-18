
app.controller('todoCtrl', function($scope,authServices,todoServices) {


    $scope.addTodo = function (todo) {
        todoServices.add(todo);
    };

    $scope.getAllTodo = function(){
    };

    console.log('Working Todo');
});