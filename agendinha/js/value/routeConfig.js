/**
 * Configuração de rotas
 */
angular.module("appAgendinha").config(function($routeProvider){

    $routeProvider.when("/usuarios", {
        templateUrl: "view/usuarios.html",
        controller: "listaUsuarioCtrl",
        resolve:{
            usuarios: function(usuarioApi){
                return usuarioApi.getUsuarios();
            }
        }
    });

   $routeProvider.when("/novoUsuario",{
        templateUrl: "view/novoUsuario.html",
        controller: "UsuarioController",
        resolve:{    
            perfis: function(perfilApi){ 
                return  perfilApi.getPerfis();
            },
            usuario: function(){
                var usuario = {};
                return usuario;
            }
        }
    });

   $routeProvider.when("/detalharUsuario/:id",{
        templateUrl: "view/detalharUsuario.html",
        controller: "UsuarioController",
        resolve:{    
            perfis: function(perfilApi){ 
                return  perfilApi.getPerfis();
            },
            usuario: function (usuarioApi, $route) {
				return usuarioApi.getUsuario($route.current.params.id);
			}
        }
    });

    $routeProvider.when("/error",{
        templateUrl: "view/error.html"
    });

    $routeProvider.otherwise({redirectTo:"/usuarios"});
});

