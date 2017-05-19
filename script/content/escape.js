let app = require("../app.js");

app.directive("escape",['escapeHTMLFilter',function(escapeHTMLFilter) {
    return {
        link: {
            post: function(scope, el, attrs, ctrlr) {
                el[0].innerHTML = escapeHTMLFilter(el[0].innerHTML);
            }
        },
    }
}]);

app.filter("escapeHTML",function() {
    return function(html) { // Taken from this StackOverflow answer: http://stackoverflow.com/a/6234804/5026708
        return html
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            //.replace(/"/g, "&quot;")
            //.replace(/'/g, "&#039;")
            .replace(/&lt;\/code&gt;/g, "</code>");
        };
    }
);
