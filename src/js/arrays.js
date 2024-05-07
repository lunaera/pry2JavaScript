const arrayEnteros = [34, 67, 23, 56];

console.log(
    'La suma del array es:',
    arrayEnteros.reduceRight((first, second) => {
        return first + second;
    }),
);

let sumaArray = 0;
for (let i = 0; i < arrayEnteros.length; i++) {
    sumaArray += arrayEnteros[i];
}

console.log('la suma del array es: ', sumaArray);

let suma = 0;
arrayEnteros.forEach((element) => {
    suma += element;
});

console.log('la suma del array es: ', suma);

arrayEnteros.splice(0, 5, 4, 5, 6);
console.log(arrayEnteros);

const array3 = [34, -3, 78, 11, -89, 45];
let mayor = Math.min(...array3);
console.log('EL número mayor es:  ', mayor);

const nameStudent = ['Carlos', 'Mateo', 'Cirilo', 'Ernesto'];
console.log(nameStudent.filter((nameStudent) => nameStudent.startsWith('C')));

let fruitsName = ['piñaple', 'strawberry', 'apple', 'banana', 'agiacate', 'lemon'];
fruitsName.splice(1, 2, 'er', 'r', 'ty');
console.log(fruitsName);

let matrix = [
    [1, 2, 3, 4, 7],
    [5, 8, 4, 6, 3],
    [9, 56, 4, 2, 3],
];

matrix.forEach((subArray) => subArray.forEach((elemento) => console.log(elemento)));

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

let arrayBidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

arrayBidimensional.forEach((subArray) => subArray.forEach((elemento) => console.log(elemento)));

const edades2 = [23, 56, 78, 12, 7, 4, 67, 14];
console.log(edades2);

function arrayInvertido(arregloEdades) {
    let posicionFinal = arregloEdades.length - 1;
    for (let i = 0; i < posicionFinal; i++) {
        let valorInicio = arregloEdades[i];
        let valorFinal = arregloEdades[posicionFinal];
        arregloEdades[i] = valorFinal;
        arregloEdades[posicionFinal] = valorInicio;
        posicionFinal--;
        //.log(`i=${i}, Fin=${posicionFinal}`,arregloEdades);
    }

    return arregloEdades;
}

console.log(arrayInvertido(edades));

const edades = [23, 56, 78, 12, 7, 4, 67, 14];
console.log(edades);
alert(edades);

const edadesInvertido = (arregloEdades) => {
    for (
        let i = 0, posicionFinal = arregloEdades.length - 1;
        i < posicionFinal;
        i++, posicionFinal--
    ) {
        let valorInicio = arregloEdades[i];
        let valorFinal = arregloEdades[posicionFinal];
        arregloEdades[i] = valorFinal;
        arregloEdades[posicionFinal] = valorInicio;
    }
    return arregloEdades;
};

alert(edadesInvertido(edades));
console.log(edadesInvertido(edades));


const prefijos = ["super", "spider", "ant", "iron"];
const sufijo = "man";
const superheroes = prefijos.map(prefijo => prefijo + sufijo);
console.log(superheroes);



const arrayNumber = [2, 4, 6, 12, 5];
const multiplicador = 2;
const resoult = arrayNumber.map(function (values) {
    return values * multiplicador;
})

console.log(resoult);