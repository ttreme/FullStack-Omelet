angular.module("myApp");
app.service("omeletService", function($http){


this.getOmelets = function(){
    var omelets;
    return $http.get("/omelets").then(function(response){
        omelets = response.data;
        return omelets;
    })
}

this.postOmelet = function(omelet){
return $http.post("/omelets", omelet).then(function(response){
        return response.data;
    })
}

})
