var myApp=angular.module("myApp",[])


myApp.factory("Mathservice",function (argument) {
	var factory={};
	factory.multiply=function(a,b){
      return a*b;
	}
	// body...
	return factory;
});


myApp.service('calcService',function(Mathservice){

this.square=function(a){
	return Mathservice.multiply(a,a);
}

});

myApp.controller("calcController",function($scope,calcService){

    $scope.square=function(a,a){

    	$scope.result=calcService.square($scope.number);
    }
});











