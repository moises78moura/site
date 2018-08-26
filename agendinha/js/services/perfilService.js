angular.module("appAgendinha").service("perfilApi", function($http, config){
    this.getPerfis = function(){
        return $http.get(config.baseUrl+"/agendinha-core/rest/usuario/perfis");
    };

} );