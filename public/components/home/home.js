angular.module("myApp");

app.controller("homeController", ["$scope","omeletService", function($scope, omeletService){

    $(document).ready(function(){
        $('#nav-icon4').click(function(){
            $(this).toggleClass('open');
        });
    });

    omeletService.getOmelets().then(function(omelets){
        $scope.omelets = omelets;
    })

    $scope.omeletFunction = function (omelet){
        omeletService.postOmelet(omelet);
    }

}])

