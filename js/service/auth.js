

app.service('authServices', function(){
    var reg = [];
    this.demo = function() {
        console.log('Auth Services');
    };

    this.doLogin = function(user) {
        return reg.find(function (data) {
            return data.email == user.email  ;
        });
    };

    this.doRegister = function (user){
        reg.push(user);
        console.log(reg);
    }
});