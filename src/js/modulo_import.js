
// usando la extención msj en cada archivo de export como de import
// import { multiplicación, sumaDosNumerosB } from "./modulo_export.mjs";


// agregando la propiedad type:module en el archvo json
import { multiplicación, sumaDosNumerosB } from "./modulo_export.js";

console.log(`El nuevo array es: ${multiplicación([3, 4, 5, 6], 3)}`);

let a = 5;
let b = 8;
console.log(`la suma de ${a} + ${b} es ${sumaDosNumerosB(a, b)}`);