/*var app = angular.module('App', []);
 app.controller('registerCtrl', function() {
    console.log('Working Reg');

});
<script src="./js/controller/register.js"></script>*/

app.controller('registerCtrl', function($scope , authServices, $state) {
    var isRegister;
    $scope.user ={
        name:'',
        pass:'',
        email:''
    };
    $scope.register =  function (data) {
        $scope.user ={
            name:'',
            email:'',
            pass:''
        };
        isRegister = authServices.doRegister(data);
        if(isRegister) return $state.go('login');
        return console.log('something wrong');
    };

});