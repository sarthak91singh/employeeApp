(function(){

	angular
		.module("app")
		.service("TeamInfoService",Service);

	function Service(){
		var serviceObj = {
			fetchCompanyData : function(){
				var data = [{
				    team: 'Engineering',
				    employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway']
				}, {
				    team: 'Executive',
				    employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']
				}, {
				    team: 'Finance',
				    employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']
				}, {
				    team: 'Sales',
				    employees: ['Ankit Jain', 'Anjali Maulingkar']
				}];

				return data;
			}
		}

		return serviceObj;
	}

})()