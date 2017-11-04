
app.controller('loginCtrl', function($scope ,authServices) {
    var isLogin;

    $scope.user = {
        email : '',
        pass : ''
    };

    $scope.login = function (data) {
     isLogin=authServices.doLogin(data);
        if(isLogin) return $state.go('todo');
        return console.log('something wrong');

    };
});
