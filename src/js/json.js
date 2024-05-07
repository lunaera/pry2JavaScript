const student = {
    name: 'Joselyn',
    age: 23,
    isAdmin: false,
    courses: ['JavaScript', 'Kotlin', 'Java'],
};
console.log(JSON.stringify(student));// convierte un objeto en formato json



//=======================JSON CON SESSIONSTORAGE []========================

// se accede a los datos que contiene la session en la clave indicada sin hacer ninguna conversión 
// es decir se accede a los datos tal cual están almacenados
const datos = sessionStorage.getItem(keySession);

/**
 * lo que datos devuelve es una cadena como esta: 
 * [{"idPersona":"1","nombre":"GUSTAVO","apellidos":"pacheco luna","edad":"67"},
 * {"idPersona":"5","nombre":"YOLANDA","apellidos":"DWQQ","edad":"45"}]
 */

//por lo tanto al acceder a la posición [0] lo que reamente estamos haciendo es accediendo a la pimera posición de 
// esa cadena y por lo tanto la respuesta es: [
console.log("Accediendo a datos:" + datos[0]);

// SOLUCIÓN: se debe convertir la cadena de textos en objeto JSON con JSON.parse(sessionStorage.getItem(keySession));
const datos3 = JSON.parse(sessionStorage.getItem(keySession));

//esto devuelve un array de objetos y ya se podría acceder a cada una de sus propiedades
console.log("Accediendo a datos:" + datos3[0]);
console.log("Accediendo al nombre:" + datos3[0].nombre);



// =============== RECORRIENDO [{}]======================
/**
 * [{"idPersona":"1","nombre":"GUSTAVO","apellidos":"pacheco luna","edad":"67"},
 * {"idPersona":"5","nombre":"YOLANDA","apellidos":"DWQQ","edad":"45"}]
 */

for (const persona of datos) {
    console.log("ID:", persona.idPersona);
    console.log("Nombre:", persona.nombre);
    console.log("Apellidos:", persona.apellidos);
    console.log("Edad:", persona.edad);
}

datos.forEach(persona => {
    console.log("ID:", persona.idPersona);
    console.log("Nombre:", persona.nombre);
    console.log("Apellidos:", persona.apellidos);
    console.log("Edad:", persona.edad);
});


/**
 * SI TUVIERA ESTA ESTRUCTURA {clave1:{ }, clave2: {}}
 * 
 * const datos = {
    "persona1": {"idPersona":"1","nombre":"GUSTAVO","apellidos":"pacheco luna","edad":"67"},
    "persona2": {"idPersona":"5","nombre":"YOLANDA","apellidos":"DWQQ","edad":"45"}
};
 */

const datos6 = {
    "persona1": { "idPersona": "1", "nombre": "GUSTAVO", "apellidos": "pacheco luna", "edad": "67" },
    "persona2": { "idPersona": "5", "nombre": "YOLANDA", "apellidos": "DWQQ", "edad": "45" }
};

for (const key in datos6) {
    if (datos6.hasOwnProperty(key)) {
        const persona = datos6[key];
        console.log("Persona:", key);
        console.log("ID:", persona.idPersona);
        console.log("Nombre:", persona.nombre);
        console.log("Apellidos:", persona.apellidos);
        console.log("Edad:", persona.edad);
    }
}



//================================recuperando y guardando nuevamente

const datos4 = JSON.parse(sessionStorage.getItem(keySession));

// esto imprime un arreglo de objetos
console.log("datos convertidos de JSON a objeto []: " + datos4);

// esto se usa para guardar nuevamente los datos en la sessión, es decir, se vuelve a crear la cadena json, no se puede recorrer como un array
const datos5 = JSON.stringify(datos4);
console.log("Los datos recuperados y convertidos a cadena JSON: " + datos5);

//=======================JSON CON SESSIONSTORAGE { }========================

