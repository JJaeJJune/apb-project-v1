angular.module('app')
    .controller('ListCtrl', function ($scope) {

        console.log("ListCtrl");

        $scope.data = "test";

        $scope.save = function(data){
            console.log(data);
        }

    });
