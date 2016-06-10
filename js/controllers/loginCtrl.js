angular.module('app')
.controller('LoginCtrl', function ($scope) {

        console.log("LoginCtrl");

        $scope.data = "test";

        $scope.save = function(data){
            console.log(data);
        }

});
