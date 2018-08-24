<<<<<<< HEAD


/**Testando um commit vindo do eclipse, vai dar merger */
=======
/**
 * Configuração de rotas
 */
>>>>>>> 5eb1f2362a7a9205cb4ec8f49750865a3f635411
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

