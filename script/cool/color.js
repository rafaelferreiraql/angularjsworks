let app = require("../app.js");

app.directive("favColor",["tooBright",function(tooBright) {
    return {
        link: function(scope, el) {
            el[0].style.backgroundColor = scope.user.color;
            el[0].getElementsByClassName("citation")[0].style.backgroundColor = function() {
                if(tooBright(scope.user.color)) return "rgba(0,0,0,0.35)";
                else return "rgba(255,255,255,0.35)";
            }();
            el[0].style.color = function() {
                if(tooBright(scope.user.color)) return "#000";
                else return "#fff";
            }();
        }
    }
}])

app.service("rgbToHSL",function() {
    function parseColor(color) {
        // color is a hex value!
        let work = color.split("#")[1];
        let r = parseInt(work.substr(0,2),16);
        let g = parseInt(work.substr(2,2),16);
        let b = parseInt(work.substr(4,2),16);
        return [r,g,b];
    };
    function delta(color) {
        let rgbColor = parseColor(color);
        return (rgbColor
            .map(function(key) {
                return key/255;
            }) // To percentage
            .sort(function(a, b) {
                return a - b;
            }) // From min to max
            .filter(function(key, index, arr) {
                //console.log(arr);
                if(index !== 1) return true;
            }) // Remove middle value
            .reduce(function(total, item, _, arr) {
                return total + item;
            }) // Sum
        );
    };
    function saturation(color) {

    };
    function hue(color) {

    };
    return {
        parse: parseColor,
        hue: hue,
        saturation: saturation,
        lightness: function(color) {
            return delta(color)/2 * 240
        },
    };
});

app.factory("tooBright",['rgbToHSL',function(toHSL) {
    return function(color) {
        return (toHSL.lightness(color) > 120 ||
            toHSL.parse(color)[1] > 200 // Colors with lots of green look brighter (yellow, cyan)
        );
    }
}])
