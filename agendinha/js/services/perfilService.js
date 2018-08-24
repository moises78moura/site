angular.module("appAgendinha").service("perfilApi", function($http, config){
    this.getPerfis = function(){
        return $http.get(config.baseUrl+"/agendinha/rest/usuario/perfis");
    };

} );