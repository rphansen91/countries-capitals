'use strict';

window.app.controller('CountryCtrl', ['$scope', 'country','capitalSrvc','neighborSrvc', function ($scope, country, capitalSrvc, neighborSrvc) {
	$scope.country = country[0];
	console.log($scope.country);

	capitalSrvc($scope.country.countryCode,$scope.country.capital).then(function (data) {
		$scope.capital = data;
	});

	neighborSrvc($scope.country.countryCode).then(function (data) {
		$scope.neighbors = data;
		// True if neighbors equals zero
		$scope.island = ($scope.neighbors.length)?false:true;
	});

}]);