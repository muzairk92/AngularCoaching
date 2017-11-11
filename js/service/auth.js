

app.service('authServices', function(){

    var reg = [];
    var id=0;

    this.demo = function() {
        console.log('Auth Services');
    };

    this.doLogin = function(user) {
        return reg.find(function (data) {
            return data.email == user.email  ;
        });
    };

    this.doRegister = function (user){
        var isUser;
        isUser = reg.some(function(item){
            return item.email == user.email;
        });
        if(isUser) return console.log('Account already available');
        user.id= id++;
        reg.push(user);
        console.log(user);
        return reg;
    }
});