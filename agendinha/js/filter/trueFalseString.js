angular.module("appAgendinha").filter("trueFalseString", function(){
    return function(input){
        return input ? "S" : "N";
    };
});