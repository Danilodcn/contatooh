angular.module("contatooh").controller("ContatosController",
    function($scope){

        $scope.total = 0;
        // console.log("scope", $scope);
        
        $scope.incrementa = function(){
            $scope.total++;
        };
});