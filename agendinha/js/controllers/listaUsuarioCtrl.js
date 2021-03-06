angular.module("appAgendinha").controller("listaUsuarioCtrl", function($scope, usuarios){
    $scope.cadastro = "Cadastro de Usuarios";
    $scope.lista = "Lista de Usuarios";
    $scope.usuarios= usuarios.data;
    $scope.exibirErroListaUsuarios = 0;
    /**Essa função pode ser sobstituída de acordo com o arquivo de rota, lá já é predefinido o carregamento 'tárdio digamos assim' */
   /* var carregarUsuarios = function(){
        usuarioApi.getUsuarios().success(function(data){
            $scope.usuarios = data;
            //console.log(data);
        }).error(function(data, status){
            $scope.error = "Não foi possível carregar os dados!";
        });
    };*/

   /* $scope.perfis  = [];

    var carregarPerfis = function(){
        perfilApi.getPerfis().success(function(data){
            $scope.perfis = data;
          //  console.log(data);
        });
    };    

    $scope.adicionarUsuario = function(usuario){

        usuarioApi.saveUsuario(usuario).success(function(data){
            delete $scope.usuario;  
            $scope.usuarioForm.$setPristine();
             carregarUsuarios();
        }).error(function(data, status){
            $scope.message = "Ocorreu um erro: " + data;
        });
    
        //$scope.usuarios.push(angular.copy(usuario));
    };
*/
    $scope.apagarUsuario = function(usuarios){
        //Reatribui a lista de usuários que não foram selecionados
        $scope.usuarios = usuarios.filter(function(usuario){
            if(!usuario.selecionado) return usuario;
        });
    };

    $scope.isUsuarioSelecionado = function(usuarios){
        //Retorna true, se pelo menos um usuário tiver sido selecionado.
        return usuarios.some(function(usuario){
            return usuario.selecionado;
        });
    };

    $scope.ordernarPor = function(campo){
        $scope.criterioOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    };

   // carregarUsuarios();
  //  carregarPerfis();
});