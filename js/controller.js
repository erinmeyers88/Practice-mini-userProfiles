angular.module("userProfiles")
	.controller("mainController", function ($scope, mainService) {
		
			$scope.getUsers = function () {
				mainService.getUsers().then(function(response){
					$scope.users = response.data.data;
				})
				
			};
			
			$scope.getUsers();
			
	
	});
	