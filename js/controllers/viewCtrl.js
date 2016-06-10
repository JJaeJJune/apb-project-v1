angular.module('app')
    .controller('ViewCtrl', function ($scope) {

        console.log("ViewCtrl");

        $scope.data = "test";

        $scope.save = function(data){
            console.log(data);
        }

    });
