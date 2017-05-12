require("../lib/angular.min.js");
require("../lib/angular-route.min.js");

module.exports = angular.module("ngWorks",["ngRoute"]);

// Execute other scripts

require("./route.js");
require("./edit_ctrl.js");
