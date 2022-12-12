var app = angular.module('myApp',[]);
  app.controller('myCtrl', function($scope) {
    $scope.users = [];
    $scope.current = {};
    let i;
    $scope.addUser = function() {
        if($scope.current != "") {
            $scope.users.push($scope.current);
            $scope.current = {};
        }
    };
    $scope.removeUser = function(index) {
        $scope.users.splice(index,1);
    };

    $scope.editUser = function(index) {
        $scope.current = $scope.users[index];
        i = index;
    };
    $scope.saveUser = function(i) {
        $scope.users[i] = $scope.current
        $scope.current = {};


    };
  });