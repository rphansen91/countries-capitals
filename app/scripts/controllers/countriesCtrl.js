'use strict';

window.app.controller('CountriesCtrl', ['$scope', '$location', 'countrySrvc', function ($scope, $location, countrySrvc) {

	countrySrvc().then(function (data) {
    	$scope.countries = data;
    	console.log(data);
  	});

  	$scope.change = function(country) {
  		$location.path('/country/' + country.countryCode);
  	}

}]);