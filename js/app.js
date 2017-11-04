
var app = angular.module('App', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    // setup an abstract state for the tabs directive
       .state('Welcome', {
   	  	url : '/welcome',
   	  	templateUrl : 'templates/welcome.html'
   	  })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html'
		  ,controller: 'loginCtrl'
      })
   	  .state('Register',{
   	  	url : '/register',
   	  	templateUrl : 'templates/register.html'
		  ,controller: 'registerCtrl'
   	  })
   	  .state('Todo', {
   	  	url : '/todo',
   	  	templateUrl : 'templates/todo.html'
		  ,controller: 'todoCtrl'
   	  })
   	  .state('404', {
   	  	url : '/404',
   	  	templateUrl : 'templates/404.html'
   	  });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/welcome');

  });
