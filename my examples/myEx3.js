 var myApp=angular.module("myApp",[])


 var studentctrl=function studentcontroller($scope){

     $scope.student={
             firstname:"nitin"
             lastname:"mungilwar"
             number  :"8857888766"
             email   :"nitinmungilwar@gmail.com"
             fullname: function($scope){


             	var newObj
             	newObj=$scope.student;
             	return newObject.firstname+""+newObject.lastname;
             }


     };




	}