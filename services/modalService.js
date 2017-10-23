(function(){

	angular
		.module("app")
		.factory("ModalService", Service);

	function Service(){
		var modals = [];
		
		var serviceObj = {

			checkForModalIndex : function(id){
				return 	modals.findIndex(function(obj,index){
							return obj.id == id;
						});
			},

			fetchModal : function(id){
				return 	modals.find(function(obj,index){
							return obj.id == id;
						});
			},

			Add : function(modal){
				modals.push(modal);
			},

			Remove : function(id){
				var foundModalIndex = this.checkForModalIndex(id);
				if(foundModalIndex>-1){
					modals.splice(foundModalIndex,1);
				}
			},

			Open : function(id){
				var foundModalIndex = this.checkForModalIndex(id);
				if(foundModalIndex>-1){
					var modal = this.fetchModal(id);
					modal.open();
				}
			},

			Close : function(id){
				var foundModalIndex = this.checkForModalIndex(id);
				if(foundModalIndex>-1){
					var modal = this.fetchModal(id);
					modal.close();
				}
			}

		};
		
		return serviceObj;		
	}

})()