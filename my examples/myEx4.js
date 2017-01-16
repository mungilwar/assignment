var myApp=angular.module("myApp",[])


  myApp.controller=("myCtrl",function($scope) {



       $scope.student={
                           
             firstname:"nitin",
             lastname:"mungilwar",
             fees:500,
             subjects:[
              {name:'physics',marks:70},
              {name:'chemistry',marks:89},
              {name:'math',marks:90}

              ],
                  fullname:function(){
                  var studentobject;
                  studentobject=$scope.student;

                  return studentobject.firstname+""+studentobject.lastname;

                                     }
        

       };


  }