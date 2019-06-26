/// <reference path="angular.min.js" />

//var myApp = angular.module("myModule", []);

//myApp.controller("myController", function ($scope) {
//    $scope.message = "Hai alfan";
//})

var myApp = angular.module("myModule", [])
    .controller("empController", function ($scope) {
        var employee = {
            name: "alfan",
            address: "Jl burangrang",
            position: "Software Engineer"
        }

        var imagedesc = {
            imagename: "visual studio logo",
            logosrc: "/Images/vs_code_logo.png"
        }

        var departments = [
            { departmentname: "IT", location: "jakarta" },
            { departmentname: "Finance", location: "Bandung" },
            { departmentname: "HR", location: "Sukabumi" },
            { departmentname: "Support", location: "Kalimalang" }
        ];

        var countries = [
            { name: "Indonesia", cities: [{ name: "Jakarta" }, { name: "Bandung" }]},
            { name: "German", cities: [{ name: "Hamburg" }, { name: "Muenchen" }, { name: "Berlin" }]}
        ];

        var presidents = [
            { name: "Jokowi", origin: "Indonesia", like: 0, dislike: 0 },
            { name: "Abdelaziz", origin: "Algeria", like: 0, dislike: 0 },
            { name: "Loerincio", origin: "Angola", like: 0, dislike: 0 },
            { name: "Patrice", origin: "Benin", like: 0, dislike: 0 },
            { name: "Trumph", origin: "USA", like: 0, dislike: 0 },
            { name: "George Weah", origin: "Liberia", like: 0, dislike: 0 },
            { name: "Macky Sall", origin: "Senegal", like: 0, dislike: 0 },
            { name: "Ramaphosa", origin: "South Africa", like: 0, dislike: 0 },
            { name: "Beji", origin: "Tunisia", like: 0, dislike: 0 },
            { name: "Emerson", origin: "Zimmbabwe", like: 0, dislike: 0 },
        ];


        $scope.presidents = presidents;
        $scope.countries = countries;
        $scope.departments = departments;
        $scope.imagedesc = imagedesc;
        $scope.message = "Hai alfan";
        $scope.employee = employee;

        $scope.incrementlikes = function (president) {
            president.like++;            
        }

        $scope.incrementdislikes = function (president) {
            president.dislike++;
        }
    });

