angular.module("appAgendinha").factory("usuarioApi", function($http, config){
    var _getUsuarios = function(){
        return $http.get(config.baseUrl+"/agendinha/rest/usuario/listar");
    };
    
    var _saveUsuario = function(usuario){
        return $http.post(config.baseUrl+"/agendinha/rest/usuario/add", usuario);
    };
    

    return {
        getUsuarios: _getUsuarios,
        saveUsuario: _saveUsuario
    };

});