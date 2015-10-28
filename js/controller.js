angular.module("userProfiles")
	.controller("mainController", function ($scope, mainService) {
		
	$scope.currentPage = 1;
	$scope.maxPages = 4;	
		
		
			$scope.getUsers = function (pageNum) {
				$scope.users = mainService.getUsers(pageNum).then(function(response){
					$scope.users = response.data;
					$scope.maxPages = response.total_pages;
				});
				
			}
	
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
	