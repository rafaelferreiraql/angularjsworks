let app = require("../app.js");

app.directive('dateformat',['dateFormatValidation',function(validation) {
    return {
        require: "ngModel",
        link: function(scope, el, attrs, ctrl) {
            ctrl.$validators.dateformat = function(modelValue, viewValue) {
                return validation(viewValue);
            }
        }
    }
}]);

app.factory("dateFormatValidation",[function() {
    return function(viewValue) {
        let test1 = /\d{4}\-\d{1,2}\-\d{1,2}/.test(viewValue);
        let test2 = viewValue.split("-").every(function(el, index, arr) {
            if(index > 0) {
                if (el > 0 && el < 32) return true;
                else return false;
            }
            else return true;
        });
        let test3 = new Date(viewValue) < Date.now();
        return (test1 && test2 && test3);
    }
}]);
