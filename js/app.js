'use strict';

angular.module("app",["duScroll"])
	.controller("mainCtrl",['$scope',($scope) => {
		let vm = $scope
		vm.career = [
			{
				title: 'CEFET-MG',
				subtitle: 'Formation',
				img: 'img/cefet-mg.jpg',
				text: 'Lorem...',
				links: [{
					icon: 'glyphicon-new-window',
					link: 'http://cefetmg.br/'
				}]
			},
			{
				title: 'PlayCode',
				subtitle: 'CNPq - Scientific Research',
				img: 'img/playcode.svg',
				text: 'Lorem...',
				links: [{
					icon: 'glyphicon-new-window',
					link: '#portifolio'
				}]
			},
			{
				title: 'WayCarbon',
				subtitle: 'Full Stack MEAN developer',
				img: 'img/way.png',
				text: 'Lorem...',
				links: [{
					icon: 'glyphicon-new-window',
					link: 'http://www.waycarbon.com/'
				}]
			},
			{
				title: 'Banco Inter',
				subtitle: 'Process analyst',
				img: 'img/inter.jpg',
				text: 'Lorem...',
				links: [{
					icon: 'glyphicon-new-window',
					link: 'http://www.waycarbon.com/'
				}]
			},
			{
				title: 'IBM',
				subtitle: 'Developer Advocate',
				img: 'img/ibm.jpg',
				text: 'Lorem...',
				links: [{
					icon: 'glyphicon-new-window',
					link: 'http://www.waycarbon.com/'
				}]
			},
		];

	}]);