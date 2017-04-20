var app = angular.module("myApp",["ngRoute"]);


app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "/components/home/home.html",
            controller: "homeController"
        })
        .when("/contact",{
            templateUrl: "/components/contact/contact.html",
            controller: "contactController"
        })
        .when("/about",{
            templateUrl: "/components/about/about.html",
            controller: "aboutController"
        })
        .otherwise({
            redirectTo: "/home"
        });
}])



