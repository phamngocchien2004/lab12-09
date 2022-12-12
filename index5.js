var myApp=angular.module('Mylist',[]);
myApp.controller("myListController",function($scope){
    $scope.items=["HTML","CSS","JS"];
    $newItem="";
    $scope.pushItem=function() {
        if ($scope.newItem != "") {
            $scope.items.push($scope.newItem);
            $scope.newItem="";
        }

    }
    $scope.deleteItem=function(index) {
        $scope.items.splice(index, 1);

    }
})