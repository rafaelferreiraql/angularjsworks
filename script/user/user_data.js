let app = require("../app.js");

app.run(['$rootScope','defaultUser',function($rootScope,defaultUser) {
    if(localStorage.getItem('userData')) {
        $rootScope.user = JSON.parse(localStorage.getItem('userData'));

        // When inserted to localStorage, the date is converted to string;
        // this will convert it back as soon as it's put into the root scope!
        $rootScope.user.birth = new Date($rootScope.user.birth);
    }
    else {
        $rootScope.user = defaultUser;
    }
}]);

app.constant("defaultUser",{
    name: "person",
    birth: new Date(undefined),
    quote: "",
    color: "#FFFFFF",
});
