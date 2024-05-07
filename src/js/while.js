

let contador = 0;
while (contador <= 10) {
    console.log(`Hola ${contador}`);
    contador += 2;
}

// realizar la tabla de multiplicar del número 5;
let count = 1;
const tableNumber = 5;
let resultTable = "la tabla del 5 es:\n";

while (count <= 10) {
    resultTable += `${count} * ${tableNumber} = ${count * tableNumber} \n`;
    count++;
}
console.log(resultTable);

