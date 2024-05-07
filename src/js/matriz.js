let matrix = [
    [1, 2, 3, 4, 7],
    [5, 8, 4, 6, 3],
    [9, 56, 4, 2, 3],
];

let sumaMatrix = 0;

// for tradicional

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        sumaMatrix += matrix[i][j];
    }
}

console.log(`La suma de la matriz es: ${sumaMatrix}`);


// con FOr of

sumaMatrix = 0;
for (const fila of matrix) {
    for (const colum of fila) {
        sumaMatrix += colum;
    }
}

console.log(`La suma de la matriz 2 es: ${sumaMatrix}`);

//con for each
sumaMatrix = 0;
matrix.forEach((element) => {
    element.forEach((column) => {
        sumaMatrix += column;
    });
});
console.log(`La suma de la matriz con foreach es: ${sumaMatrix}`);

const objPersona = {
    nombre: 'valor1',
    edad: 'valor2',
    peso: 'valor3',
};

// for in se usa para  iterar sobre las claves de las propiedades de un objeto.
for (let clave in objPersona) {
    console.log(`${clave}: ${objPersona[clave]}`);
}



const objJson = {
    "nombre": "erahin",
    "edad": "30",
    "sexo": "34"
}
// for in se usa para  iterar sobre las claves de las propiedades de un objeto.
for (let clave in objJson) {
    console.log(`${clave}: ${objJson[clave]}`);
}

let maximo = Number.NEGATIVE_INFINITY;
console.log(maximo);