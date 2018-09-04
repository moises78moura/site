angular.module("appAgendinha").controller("UsuarioController", 
    function($scope,$http,$location, usuarioApi, perfis, usuario){
 
    $scope.cadastro = "Cadastro de Usuarios";
    $scope.perfis  = perfis.data;
    $scope.usuario = usuario.data;
    
   /* var carregarPerfis = function(){
        perfilApi.getPerfis().success(function(data){
            $scope.perfis = data;
          //  console.log(data);
        });
    };    */

    $scope.adicionarUsuario = function(usuario){

        usuarioApi.saveUsuario(usuario).success(function(data){
            delete $scope.usuario;  
            $scope.usuarioForm.$setPristine();
            $location.path("/usuarios");
        }).error(function(data, status){
            $scope.message = "Ocorreu um erro: " + data;
        });
        //$scope.usuarios.push(angular.copy(usuario));
    };
    


   // carregarPerfis();
});