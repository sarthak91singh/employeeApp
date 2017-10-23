import {TeamInfoService} from './services/teamInfoService.js';

	angular
		.module('app',['ui.router'])
		.config(config)
		.run(run);

	function config($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('home',{
				url: '/',
				templateUrl: 'views/home.html',
				controller : "homeCtrl",
				controllerAs : "home",
				resolve : {
					CompanyData : function(TeamInfoService){
						return TeamInfoService.fetchCompanyData();
					}
				}
			});

	}

	function run(){

	}

