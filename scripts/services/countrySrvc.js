'use strict';

window.app.factory('countryService', ['$http','$q','$cacheFactory','COUNTRY_INFO_URL','USERNAME', function ($http,$q,$cacheFactory,COUNTRY_INFO_URL, USERNAME) {
    
    var cacheEngine = $cacheFactory('countries');
    
    return {
        countries : function () {
            var cache = cacheEngine.get('countries');
            var url = COUNTRY_INFO_URL + USERNAME;
            var defer = $q.defer();
            if (cache) {
                defer.resolve(cache);
            } else {
                $http({
                	url: url,
                	method: 'GET',
                	cache: true
                })
                .success(function (data) {
                	cacheEngine.put('countries', data.geonames);
                    defer.resolve(data.geonames);
                })
                .error(function (err, data) {
                    defer.reject(data);
                });
            }
            return defer.promise;
        }  
    };
}]);

window.app.factory('countryCode', ['COUNTRY_INFO_URL', 'USERNAME', '$http', '$q', function (COUNTRY_INFO_URL, USERNAME, $http, $q) {
	return function(code) {
		var defer = $q.defer();
		var url = COUNTRY_INFO_URL + 'country=' + code + '&' + USERNAME
		$http.get(url)
		.success(function (data) {
			defer.resolve(data.geonames);
		});
		return defer.promise;
	};
}]);

