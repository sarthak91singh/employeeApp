(function(){

	angular
		.module("app")
		.directive("modal",Directive);

	function Directive(ModalService){
		var DDO = {
			link : function(scope,element,attrs){
				
				function Open(){
					element.show();
					$('body').addClass('modal-open');
				}

				function Close(){
					element.hide();
					$('body').removeClass('modal-open');
				}



				if(!attrs.id){
					console.error("Can't find id of the modal");
				}

				// move element to bottom of page, so it can be placed above everything else
				element.appendTo('body');


				
				var modal = {
					id : attrs.id,
					open : Open,
					close : Close
				}
				// Adding this modal instance to the modal service so it can be accessed from inside the controller. 
				ModalService.Add(modal);


				// Close modal on background click
				element.on('click',function(e){
					var $target = $(e.target);
					if(!$target.closest('.modal-body').length){
						scope.$evalAsync(Close);
					}
				})

				scope.$on('$destroy',function(){
					ModalService.remove(modal.id);
					element.remove();
				})

				
			},
			templateUrl : 	'../views/modalView.html'
		};
		return DDO;
	}

})();