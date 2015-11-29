(function(){

	var myAppController = function(customService){
		var vm = this;

		vm.transformString = function() {
			
			var output = customService.processString(vm.input);
			vm.output = output;
		}	
	};
	myAppController.$inject = ['customService']; // We are not using $scope. Therefore $scope has not beeen injected.

	angular.module('myApp')
		   .controller('myAppController',myAppController);

}());