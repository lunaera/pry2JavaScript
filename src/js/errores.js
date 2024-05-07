const wrongTypeError = TypeError("Wrong type found, expectedcharacter");
//console.log(wrongTypeError)

// ERRORES RANGEERROR

//1. Crear un arrar con vlongitudes ilegales
const arrayNumber = new Array(-1);
console.log(arrayNumber);


//2. Intentar llamar a métodos numéricos con un valor no numérico
const num = "3236.45"; // Un valor no numérico

console.log(num.toExponential()); // Generará un error si "num" no es un número
console.log(num.toPrecision(2)); // Generará un error si "num" no es un número
console.log(num.toFixed(2)); // Generará un error si "num" no es un número



// 2. Pasando valores ilegales a funciones de cadena como normalize().

/*
const str1 = "café"; // Contiene "é" representado como un único carácter
const str2 = "café"; // Contiene "é" representado como "e" seguido de una marca diacrítica de acento agudo alt +130

// Comparamos las cadenas directamente
console.log(str1 === str2); // Resultado: false

// Normalizamos ambas cadenas en NFC (Forma de Composición Canónica):
const normalizedStr1 = str1.normalize("NFC");
const normalizedStr2 = str2.normalize("NFC");

// Comparamos las cadenas normalizadas
console.log(normalizedStr1 === normalizedStr2); // Resultado: true




const str = []; //"é"
const valorNomalizado = str.normalize("NFC");
console.log(valorNomalizado);

*/
//===========================================================
//REFERENCEERROR => Un ReferenceError se produce cuando algo está mal con la referencia de una variable en el código.

// 1. escribir erroneamente el nombre de una variable

/*
let mivariablé = 4;
console.log(miVariable);



//2. referencia incorrecta en una funcion
function suma(x, y) {
    return x + i;
}

console.log(suma(4, 3));


//3. Acceder a variables fuera de su bloque

function scope() {
    if (true) {
        let miVariable = 34;
    }
    return miVariable * 2;
}

console.log(scope());

*/

// ========================================== ERROR DE SITÁXIS=======================
/**
 * Estos errores son uno de los más sencillos de solucionar, ya que indican un error en la sintaxis del código.
 * Dado que JavaScript es un lenguaje de scripting que se interpreta y no se compila,
 * se lanzan cuando la aplicación ejecuta el script que contiene el error.
*/

/*
let varibale uno = 3456;
let cadena = "esto es una cadena;
console.log("respuesta";

*/

// ===================== TypeError, InternalError, URIError, EvalError