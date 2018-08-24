angular.module("appAgendinha").filter("camelCase", function(){
    return function(input){
        var listaDeNomes = input.split(" ");
        //console.log(listaDeNomes);
        var listaDeNomesFormatada = listaDeNomes.map(function(nome){
            if(/(da|de|dos|do|das)/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        return listaDeNomesFormatada.join(" ");
    };

});