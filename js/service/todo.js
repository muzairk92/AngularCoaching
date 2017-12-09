

app.service('todoServices', function(){
    var allTodo = [];
    this.id = 0;

    this.add = function(todo) {
        todo.id = this.id++;
        allTodo.push(todo);
        //return console.log(allTodo);
    };

    this.deleteTodo = function(data) {
        var removed = allTodo.splice(data.id,1);
        if(!removed.length>0) return console.log('something is wrong in delete');
        return console.log('successfully delete');
    };
    this.updateTodo = function(user) {
        var updateUser = {};
        allTodo.splice(user.id,1,updateUser)
    };

    this.getAllTodo = function(){
        return allTodo;
    };

    this.todoById = function(user) {


    };

    this.todoByUserId = function(user) {


    };
});