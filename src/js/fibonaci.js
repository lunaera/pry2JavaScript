

let priNum = 0;
let segNumero = 1;
let suma = 0;
const tope = 10;
let serie = `${priNum} , ${segNumero} ,`;

for (let i = 1; i <= tope; i++) {
    suma = priNum + segNumero
    priNum = segNumero;
    segNumero = suma;
    if (i <= tope - 1)
        serie += ` ${suma} ,`;
    else serie += ` ${suma}`;
}

console.log(serie);
