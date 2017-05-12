let app = require("./app.js");

app.config(["$routeProvider",function($route) {
    $route
    .when('/', {
        templateUrl: "./views/home.html",
    })
    .when('/ng', {
        templateUrl: "./views/angular.html",
    })
    .when('/interactive', {
        templateUrl: "./views/coolstuff.html",
    })
    .when('/explain', {
        templateUrl: "./views/process.html",
    })
    .when('/edit',{
        templateUrl: "./views/profile.html",
        controller: "editController",
    })
    .otherwise({
        template: "erro?",
    })
}]);
