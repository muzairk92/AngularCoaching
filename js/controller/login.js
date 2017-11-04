
app.controller('loginCtrl', function($scope ,authServices) {
    authServices.demo();

    $scope.user = {
        email : '',
        pass : ''
    };

    $scope.login = function (data) {
     var check=authServices.doLogin(data);
     console.log(check);
    };
});
