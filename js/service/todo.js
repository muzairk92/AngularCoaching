

app.service('todoServices', function(){

    this.id = 0;
    var allTodo=[];

    this.add = function(todo) {
        todo.id = this.id++;
       allTodo.push(todo);
        return console.log(allTodo);

    };

    this.deleteTodo = function(user) {


    };
    this.updateTodo = function(user) {

    };

    this.getAllTodo = function(){
    };

    this.todoById = function(user) {


    };

    this.todoByUserId = function(user) {


    };
});