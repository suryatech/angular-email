var app = angular.module('myFirstApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
		.when('/settings', {
			templateUrl: 'templates/settings.html',
			controller: 'SettingsController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

app.controller('HomeController', function($scope) {
	$scope.selectedMail;

	$scope.setSelectedMail = function(mail){
		$scope.selectedMail = mail;
	}

	$scope.isSelected = function(mail){
		if($scope.selectedMail){
			return $scope.selectedMail === mail
		}
	}
});

app.controller('SettingsController', function($scope) {
	// used to populate it will default values of the user

	$scope.settings = {
		name: "Surya",
		email: "me@example.com",
	}

	$scope.updateSettings = function() {
		console.log('UpdateSettings called');
	}
});

app.controller('mailListingController', ['$scope','$http', function($scope, $http) {
	$scope.email = [];

	$http({
		method: 'GET',
		url: 'api/data.php'
	})
	.success(function(data, status, headers){
    	$scope.email = 	data.all;
   	})
	.error(function(data, status, headers){

	});

}]);



app.controller('contentController', function($scope) {

});