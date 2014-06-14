'use strict';

window.app.factory('capitalSrvc', ['SEARCH_URL', 'USERNAME','$http','$q', 
						function (SEARCH_URL, USERNAME, $http, $q) {
	return function (code, capital) {
		var defer = $q.defer();
		$http.get(SEARCH_URL + 'country=' + code + '&q=' + capital + '&' + USERNAME)
		.success(function (data) {
			defer.resolve(data.geonames[0]);
			console.log(data);
		});
		return defer.promise;
	};
}]);

window.app.factory('neighborSrvc', ['NEIGHBOR_URL','USERNAME','$http','$q', 
							function (NEIGHBOR_URL, USERNAME, $http, $q) {
	return function (code) {
		var defer = $q.defer();
		$http.get(NEIGHBOR_URL + code + '&' + USERNAME)
		.success(function (data) {
			defer.resolve(data.geonames);
			console.log(data);
		});
		return defer.promise;
	};
}]);