var app = angular.module('myFirstApp', []);
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		template: 'templates/home.html',
		controller: 'HomeController'
	})
	.otherwise({redirectTo: '/'});
});