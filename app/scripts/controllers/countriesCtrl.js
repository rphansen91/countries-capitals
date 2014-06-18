'use strict';

'use strict';

window.app.controller('CountriesCtrl', ['$scope', '$location', 'countryService', function ($scope, $location, countryService) {

    function SuccessHandler(data){
        $scope.countries = data;
        if($scope.countries === undefined){
            return;
        }
    }
    function errorHandler(err){
        $scope.error = true;
    }

    countryService.countries().then(SuccessHandler, errorHandler);

    $scope.change = function(country) {
        $location.path('/country/' + country.countryCode);
    };

}]);


// window.app.controller('CountriesCtrl', ['$scope', '$location', 'countrySrvc', function ($scope, $location, countrySrvc) {

// 	countrySrvc().then(function (data) {
//     	$scope.countries = data;
//     	console.log(data);
//   	});

//   	$scope.change = function(country) {
//   		$location.path('/country/' + country.countryCode);
//   	}

// }]);