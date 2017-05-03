var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
	$scope.answer = 5 + 5 * 25 ^ 2;
});