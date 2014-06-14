'use strict';

window.app.factory('countrySrvc', ['COUNTRY_INFO_URL','USERNAME','$http', '$q',
						function   (COUNTRY_INFO_URL, USERNAME, $http, $q) {

	return function() {
		var defer = $q.defer();
		$http.get(COUNTRY_INFO_URL + USERNAME)
		.success(function (data) {
			defer.resolve(data.geonames);
		});
		return defer.promise;
	};
}]);

window.app.factory('countryCode', ['COUNTRY_INFO_URL', 'USERNAME', '$http', '$q', function (COUNTRY_INFO_URL, USERNAME, $http, $q) {
	return function(code) {
		var defer = $q.defer();
		$http.get(COUNTRY_INFO_URL + 'country=' + code + '&' + USERNAME)
		.success(function (data) {
			defer.resolve(data.geonames);
		});
		return defer.promise;
	};
}]);

