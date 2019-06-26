var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
    $scope.GetAllData = function () {
        $http({
            method: "get",
            url: "/Employee/GetAll"
        }).then(function (response) {
            $scope.employees  = response.data;
        }, function () {
                alert("Error occure");
        })
    }

});