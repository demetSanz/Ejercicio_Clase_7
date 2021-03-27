function unirNombres(nombre, apellido){
    return nombre + " " + apellido;
}


function saludar (nombre, apellido, callback){
    return "Hola, " + callback(nombre, apellido);
}

function despedir (nombre, apellido, callback){
    return "Chau, " + callback(nombre, apellido);    
}
<<<<<<< HEAD
console.log(saludar("Juan Carlos", "Gomez", unirNombres));
=======
console.log(saludar("Juan Pedro", "Gomez", unirNombres));
>>>>>>> 3741e8dd26755bb76a7dcb27417b5d56919b528c

console.log(despedir("Maria Luisa", "Gimenez", unirNombres));