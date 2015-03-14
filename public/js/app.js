var app = angular.module('coachK', ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/templates/home.html',
		controller: 'homeCtrl'
	})
	.when('/about', {
		templateUrl: '/templates/about.html',
		controller: 'homeCtrl'
	})
	.when('/work', {
		templateUrl: '/templates/work.html',
		controller: 'homeCtrl'
	})
	.when('/contact', {
		templateUrl: '/templates/contact.html',
		controller: 'homeCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
})
