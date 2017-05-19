let app = require("../app.js");

app.controller("coolController",
    ['$scope',
    '$rootScope',
    'events',
    'userCheck',
    function($scope,$rootScope,events,check) {
        $scope.noDate = function() {return check.noDate($rootScope.user.birth);}
        $scope.noQuote = function() {return check.noQuote($rootScope.user.quote);}
        $scope.events = events;
    }]
);

app.service("userCheck",function() {
    this.noDate = function(birth) {
        return birth == "Invalid Date";
    };
    this.noQuote = function(quote) {
        return !quote;
    }
});

app.filter("earlierThan",function() {
    return function(events, limit) {
        return events.filter(function(entry) {
            return (new Date(entry.date)) < limit;
        });
    }
})
