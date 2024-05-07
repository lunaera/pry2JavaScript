
// se pueden exportar todas las funciones con un objeto export
/*
const multiplicación = (arrayNumbers, multiplicador) => {
    return arrayNumbers.map((valores) => valores * multiplicador);
}
const sumaDosNumerosB = (a, b) => { return a + b };

export { multiplicación, sumaDosNumerosB };
*/

// o uno por uno
export const multiplicación = (arrayNumbers, multiplicador) => {
    return arrayNumbers.map((valores) => valores * multiplicador);
}
export const sumaDosNumerosB = (a, b) => { return a + b };


//quitando los exports y quitando el type de json. despues se accede desee linea de comandos
// ./src/js/modulo_esport.js
//console.log(module);