function unirNombres(nombre, apellido){
    return nombre + " " + apellido;
}


function saludar (nombre, apellido, callback){
    return "Hola, " + callback(nombre, apellido);
}

function despedir (nombre, apellido, callback){
    return "Chau, " + callback(nombre, apellido);    
}
console.log(saludar("Juan Pedro", "Gomez", unirNombres));

console.log(despedir("Maria Luisa", "Gimenez", unirNombres));