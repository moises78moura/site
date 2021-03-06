angular.module("appAgendinha").factory("usuarioApi", function($http, config){
    var _getUsuarios = function(){
        var retorno = $http.get(config.baseUrl+"/agendinha-core/rest/usuario/listar");
        return retorno;
    };
    
    var _getUsuario = function(id){
        var retorno = $http.get(config.baseUrl+"/agendinha-core/rest/usuario/"+id);
        return retorno;
    };

    var _saveUsuario = function(usuario){
        return $http.post(config.baseUrl+"/agendinha-core/rest/usuario/add", usuario);
    };
    

    return {
        getUsuarios: _getUsuarios,
        getUsuario: _getUsuario,
        saveUsuario: _saveUsuario
    };

});