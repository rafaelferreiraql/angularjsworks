let app = require("../app.js");

app.directive('colorformat',['colorFormatValidation',function(validation) {
    return {
        require: "ngModel",
        link: function(scope, el, attrs, ctrl) {
            ctrl.$validators.colorformat = function(modelValue, viewValue) {
                return validation(viewValue);
            }
        }
    }
}]);

app.factory("colorFormatValidation",function() {
    return function(viewValue) {
        return /#(\d|[a-f]|[A-F]){6}/.test(viewValue);
    }
});
