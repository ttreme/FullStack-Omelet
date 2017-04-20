angular.module("myApp");

app.controller("aboutController", ["$scope", function($scope){

    $(document).ready(function(){
        $('#nav-icon4').click(function(){
            $(this).toggleClass('open');
        });
    });
}])