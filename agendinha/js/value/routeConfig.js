angular.module("appAgendinha").config(function($routeProvider){
    $routeProvider.when("/usuarios", {
        templateUrl: "view/usuarios.html",
        controller: "listaUsuarioCtrl"
    });

    $routeProvider.when("/novoUsuario",{
        templateUrl: "view/novoUsuario.html",
        controller: "listaUsuarioCtrl"
    });
});