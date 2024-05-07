// Función por declaración

/**
 * Es la forma más común de crear las funciones, de esta manera podemos ejecutar la
función incluso antes de haberla creado, ya que este tipo de función es compatible
con el hoisting. término para describir que las declaraciones de variables y funciones son
desplazadas a la parte superior del scope más cercano
 */

let arrayNumber = [4, 5, 6, 7];

function calcAdd(array) {
    //let suma = array.reduce((acum, number) => { return acum + number }); // cuando se colocan las llaves deve llevar return
    let suma = array.reduce((acum, number) => acum + number); // es de una sola línea no hace falta las llaves
    console.log(`La suma de ${array} es: ${suma}`);

}
calcAdd(arrayNumber);


// funciones por expresión, permite alamacenar el valor en una variable

let arrayNumber2 = [4, 5, 6, 4];

let resoultSuma = function suma2(array) {
    return array.reduce((acum, number) => acum + number); // es de una sola línea no hace falta las llaves
}
console.log(`La suma de ${arrayNumber2} es: ${resoultSuma(arrayNumber2)}`);

/**
 * La diferencia con la anterior es que si se intenta ejecutar antes de la declaración
 * de la variable resoultSuma, mostrará un error porque aún no está declarada
 */


/**
 * Función Anónima
 * 
Las funciones por expresión nos abre paso a las funciones anónimas o funciones
lambda que son un tipo de funciones que se declaran sin nombre de función y se
alojan en el interior de una variable, haciendo referencia a ella cada vez que
queramos utilizarla.
 */


let arrayNumber3 = [4, 5, 5, 4];

let resoultSuma2 = function (array) {
    return array.reduce((acum, number) => acum + number); // es de una sola línea no hace falta las llaves
}
console.log(`La suma de ${arrayNumber3} es: ${resoultSuma2(arrayNumber3)}`);


// Funcion constructora
//que nos devuelva un objeto o una especie de plantilla utilizando el constructor de funciones y el operador “new”,

function User(name, gender) {
    this.name = name;
    this.gender = gender;
}

const obj1 = new User("erahin", "Male");
const obj2 = new User("Sandra", "Female")

console.log(obj1, obj2);

/**
 * Funciones Flechas (Arrow Function)
 * 
Las Funciones Flechas son una forma corta de escribir funciones que aparece en
JavaScript a partir de ECMAScript 6. Básicamente, se trata eliminar la palabra
function y añadir => antes de abrir las llaves
 */

let a = 3;
let b = 6;

// si el cuerpo tiene una sola linea se pueden omitir las llaves y el return
// hace un return en automático
const sumaDosNumerosA = (a, b) => a + b;

// si el cuerpo es de mas de dos líneas se colocan las {} con return
const sumaDosNumerosB = (a, b) => { return a + b };
console.log(`la suma de ${a} + ${b} es ${sumaDosNumerosA(a, b)}`);



const multiplicación = (arrayNumbers, multiplicador) => {
    return arrayNumbers.map((valores) => valores * multiplicador);
}

console.log(`El nuevo array es: ${multiplicación([3, 4, 5, 6], 2)}`);


