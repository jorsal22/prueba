var app1 = angular.module("App");
app1.controller('miTramite', function($scope) {
    $scope.edad = 1;
    $scope.fecha = "19/07/1981";    
    $scope.nombreCompleto ="jorge salsamendi";
});
$scope.tramites = ['Tramite1', 'Tramite2', 'Tramite3',"Tramite4"];
$scope.tramite = "";
$("enviar").click(function(){
    if($("#edad").val()<18){
        $("#menordeedad").text("Usuario menor de edad");
    }
    $("#notificacion").text("Estimado"+ {nombreCompleto},"usted se agendó para el trámite para el próximo día"+{date});
  
});
