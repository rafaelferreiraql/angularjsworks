let app = require("../app.js");

app.factory("events",function() {
    let json = require("./events.json");
    return angular.fromJson(json).events;
});
