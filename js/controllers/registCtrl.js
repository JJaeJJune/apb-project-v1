angular.module('app')
    .controller('RegistCtrl', function ( $scope ) {

        console.log("RegistCtrl");

        $scope.data = "test";

        $scope.save = function(data){
            console.log(data);
        }
    });
