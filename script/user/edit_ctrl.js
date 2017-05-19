let app = require("../app.js");

app.controller("editController",[
    '$scope',
    '$rootScope',
    function($scope,$rootScope,storage) {
        $scope.updateStorage = function() {
            localStorage.setItem('userData',JSON.stringify($rootScope.user));
        };
        $scope.incorrectInput = function(field) {
            return (field.$dirty && field.$invalid);
        };
        $scope.updateRule = {
            updateOn: 'submit',
        }
}]);

app.service("manipulateStorage",function() {
    this.set = function(data) {
        localStorage.setItem('userData',JSON.stringify(data));
    }
});
