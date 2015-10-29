angular.module("userProfiles")
	.controller("mainController", function ($scope, mainService) {

		$scope.currentPage = 1;
		$scope.maxPages = 4;


		$scope.getUsers = function (pageNum) {
			mainService.getUsers(pageNum).then(function (dataFromService) {
				$scope.users = dataFromService;
				$scope.maxPages = dataFromService.total_pages;
			});

		};

		$scope.next = function () {
			$scope.currentPage++;
			$scope.getUsers($scope.currentPage);

		}


		$scope.previous = function () {
			$scope.currentPage--;
			$scope.getUsers($scope.currentPage);
		}

		$scope.getUsers();

	});
	