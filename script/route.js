let app = require("./app.js");

app.config(["$routeProvider",function($route) {
    $route
    .when('/', {
        templateUrl: "./views/home.html",
    })
    .when('/ng', {
        templateUrl: "./views/angular.html",
    })
    .when('/coolstuff', {
        templateUrl: "./views/coolstuff.html",
        controller: "coolController",
    })
    .when('/explain', {
        templateUrl: "./views/process.html",
    })
    .when('/explain1',{
        templateUrl: "./views/process_general.html",
    })
    .when('/explain2',{
        templateUrl: "./views/process_user.html",
    })
    .when('/explain3',{
        templateUrl: "./views/process_cool.html",
    })
    .when('/edit',{
        templateUrl: "./views/profile.html",
        controller: "editController",
    })
    .otherwise({
        template: "<h1>This page does not exist. Honest.</h1>",
    })
}]);
