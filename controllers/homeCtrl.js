(function(){

	angular
		.module("app")
		.controller("homeCtrl",homeCtrl);

	function homeCtrl($scope,ModalService,CompanyData){
		var _this = $scope;
		
		this.openModal = function(id){
			ModalService.Open(id);
		}

		this.closeModal = function(id){
			ModalService.Close(id);
		}

		this.teamsData = CompanyData;

		this.employees = [];
		
		$scope.$watch(function(scope){
			return scope.team;
		},function(newValue,oldValue){
			if(newValue!=oldValue){
				var data = $scope.home.teamsData;			
				var selectedObj = data.find(function(obj){
					return obj.team == newValue;
				});
				
				$scope.home.employees = selectedObj.employees;
			}
		})
	}

})()