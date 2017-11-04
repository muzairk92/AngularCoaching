/*var app = angular.module('App', []);
 app.controller('registerCtrl', function() {
    console.log('Working Reg');

});
<script src="./js/controller/register.js"></script>*/

app.controller('registerCtrl', function($scope , authServices) {
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
        authServices.doRegister(data)
    };

});