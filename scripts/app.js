'use strict';

(function (window) {
	window.app = angular.module('CnCApp', ['ngRoute','ngAnimate']);

	window.app.constant('USERNAME','username=rphansen91');
	window.app.constant('COUNTRY_INFO_URL','http://api.geonames.org/countryInfoJSON?');
	window.app.constant('NEIGHBOR_URL','http://api.geonames.org/neighboursJSON?country=');
	window.app.constant('SEARCH_URL',' http://api.geonames.org/searchJSON?');

	window.app.config( ['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'views/home.html'
		}).when('/countries', {
			templateUrl: 'views/countries.html'
		}).when('/country/:code', {
			templateUrl: 'views/country.html',
			controller: 'CountryCtrl',
			resolve: {
				country: function ($route, countryCode) {
					return countryCode($route.current.params.code);
				}
			}
		})
		.otherwise({ redirectTo: '/' });
	}]);
}(window));