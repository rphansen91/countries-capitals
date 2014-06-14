'use strict';

window.app.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
	$scope.isActive = function (path) {
		return $location.path() === path;
	};
}]);