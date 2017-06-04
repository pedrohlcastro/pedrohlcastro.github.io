'use strict';

angular.module("app",["duScroll"])
	.controller("mainCtrl",['$scope',($scope) => {
		let vm = $scope
		vm.title = "TESTE";
	}]);