

/*
let a = 3;
let b = 5;
let result = b/a;

console.log(result);  // sin redondear 1.6666666666666667
console.log(Math.round(result)); // redondea a entero próximo 2
console.log(result.toFixed(2)); // redondea a dos dígitos decimales 1.67
console.log(5/0); // división entre 0: infinito
console.log(0/0) // NOT AN NUMBER NaN



let numero = 3;
let result = numero++; //3
console.log(result);
    result = ++numero; //5
console.log(result);

console.log(numero); //5*/

/*
// Resta y asignación

let x = 10;
let y = 5;
x -= y;
console.log(x);
*/
// Multiplicación y asignación

/*

let num = 3;  // Representación binaria: 0101
let resultado = ~num; // Resultado: -6 (en complemento a dos)
console.log(resultado); // Output: -6


// (-)*(25+1) se le suma 1
// (-) * (26)
// -26

let num2 = -34;  // Representación binaria: 1000
let resultado2 = ~num2; // Resultado: 7 (en complemento a dos)
console.log(resultado2); // Output: 7

// (-)*(-14+1) se le suma 1
// (-) * (-13)
// 13
*/
/*

let num = 4;  // Representación binaria: 0100
// 0100 + 00 se añaden dos bits
console.log(num>>>2); // Output: 16

let numero = -127; // Representado en binario como 0110 1110
// 0110 1-> 110 estos 3 bit son desplazados (eliminados)
// 000+0 1101 se llena con ceros a la izquierda la misma cantidad de bits desplazado
console.log(numero >> 3); // Resultado: 13
*/

/*

let arrayEdad = [10,45,23,14];
// primero adiciona los elementos del array 
// y después ejecuta la otra instrucción
console.log(arrayEdad.push(22,34),arrayEdad.length);

//Sin operador coma


let a=3+4, b=4+4, c=8-2;
// realiza la operación a=a**2 y al final imprime
console.log(a**=2,`b=${b}`,`c=${c}`,`valor final de a=${a}`);

*/

/*
//operador ternario


let a = 73, b = 30;
// IF a>b, retorna el valor de a,
// ELSE retorna el valor de b
let result = a>b?`${a} es mayor que ${b}`:`${b} Es mayor que ${a}`;
console.log(result); // Imprime 73 es mayor que 30
*/

/*
let a=null, b = 30;
// devuelve el valor de a, si no es null o undefined
// devuelve el valor de b, si a es null o undefined 
let result = a??b;
console.log(result); // devuelve 30

let c, d = 30;
// devuelve el valor de c, si no es null o undefined
// devuelve el valor de d, si a es null o undefined 
let result2 = c??d;
console.log(result); // devuelve 30
*/
/*
let clientData={
    name:"Erahin",
    age:null,
    adress:null,
    phoneNumber:"9511940403"
};

let clientDataFinal={
    name:clientData.name??"Invitado",
    age:clientData.age??18,
    adress:clientData.adress??"Domicilio conocido",
    phoneNumber:clientData.phoneNumber??"951-000-00-00"
};

console.log(clientDataFinal);
// imprime: {name: 'Erahin', age: 18, adress: 'Domicilio conocido', phoneNumber: '9511940403'}

*/
/*

let clientData={
    name:"Erahin",
    age:undefined,
    adress:null,
    phoneNumber:"9511940403"
};

let clientDataFinal={
    name:clientData.name??"Invitado",
    // se requier que por lo menos una condición sea falsa por eso se usa and
    age:clientData.age!=="" && clientData.age!==null && clientData.age!==undefined?clientData.age:18,
    adress:clientData.adress??"Domicilio conocido",
    phoneNumber:clientData.phoneNumber??"951-000-00-00"
};

console.log(clientDataFinal);
*/

//const employees = ["Juan","María","Esther","Erahin"];
// POSICIONES     [   0      1        2        3]
/*
employees.push("Antonio");
console.log(employees)

const mergeType = ["Uva",{nombre:'Erahin'},
                    function (){console.log("Hola");},true];
console.log(mergeType); //['Uva', {…}, ƒ, true]
*/

/*
mergeType.forEach(function(elemento){
    console.log(elemento);
});

let valorFuncion=mergeType[2];
//console.log(valorFuncion);

valorFuncion();
*/

/*

const fruitsName = ["piña","melón","Kiwi","uva"];
console.log(fruitsName); //['piña', 'melón', 'Kiwi', 'uva']
// Agragando un elemento en la posición 4
fruitsName[4] = "mango";
fruitsName.push("guayaba");
console.log(fruitsName); // ['piña', 'melón', 'Kiwi', 'uva', 'mango', 'guayaba']

// usando el operador coma
console.log(fruitsName[6] = "pera",fruitsName.push("higo"), fruitsName )


fruitsName.forEach((elemento)=>console.log(elemento));

let miArray = [1, 2, 3, 4, 5];
let subArray = miArray.slice(0, 3);
console.log(subArray); // Muestra [2, 3, 4]
*/

/*
let matrix = [
    [1, 2,  3, 4, 7],
    [5, 8,  4, 6, 3],
    [9, 56, 4, 2, 3]
];

matrix.forEach((subArray)=>
    subArray.forEach((elemento)=>
        console.log(elemento)
        )
    );
    */

    /*
for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
        console.log(matrix[i][j]);
    }
}



    let arrayBidimensional = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      
      arrayBidimensional.forEach((subArray)=>
        subArray.forEach((elemento) =>
          console.log(elemento)
        )
      );
      */

      /*
     const edades=[23,56,78,12,7,4,67,14];
     console.log(edades);

     function arrayInvertido(arregloEdades){
        let posicionFinal=arregloEdades.length-1;
        for(let i=0;i<posicionFinal;i++){
            let valorInicio=arregloEdades[i];
            let valorFinal=arregloEdades[posicionFinal];
            arregloEdades[i]=valorFinal;
            arregloEdades[posicionFinal]=valorInicio;
            posicionFinal--;
            //.log(`i=${i}, Fin=${posicionFinal}`,arregloEdades);
        }

        return arregloEdades;
     }

     console.log(arrayInvertido(edades));
     */

     /*
     const edades=[23,56,78,12,7,4,67,14];
     console.log(edades);
     alert(edades);

     const edadesInvertido = (arregloEdades) => {
       for (let i = 0,posicionFinal=arregloEdades.length - 1; i < posicionFinal; i++,posicionFinal--) {
         let valorInicio = arregloEdades[i];
         let valorFinal = arregloEdades[posicionFinal];
         arregloEdades[i] = valorFinal;
         arregloEdades[posicionFinal] = valorInicio;
       }
       return arregloEdades;
     };

     
     alert(edadesInvertido(edades));
     //console.log(edadesInvertido(edades));

     */

     
function foco(){
    alert("perdí el foco");
}

function moverRaton(){
    alert("Se movió el ratón dentro de la caja");
}

/*
const numbers = [95, 5, 25, 10, 25];
const totSuma=numbers.reduce((first, second) => {
  return first + second;
});

console.log(totSuma);
// F=95  S=5    (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
// F=100 S=25   (2ª iteración: 100 + elemento 3: 25) = 125
// F=125 S=10   (3ª iteración: 125 + elemento 4: 10) = 135
// F=135 S=25   (4ª iteración: 135 + elemento 5: 25) = 160

// Finalmente, devuelve 160

const numbers2 = [95, 5, 25, 10, 25];
restaNumber2=numbers2.reduce((first, second) => first - second);
// 95 - 5 - 25 - 10 - 25. Devuelve 30
console.log(restaNumber2);

const restaDIzda=numbers2.reduceRight((first, second) => first - second);
// 25 - 10 - 25 - 5 - 95. Devuelve -110
console.log(restaDIzda);


const numbers = [95, 5, 25, 10, 25];
const tot=numbers.reduce((accumulator, nextElement) => {
  console.log(`F=${accumulator} S=${nextElement}`);
  return accumulator + nextElement;
}, 0);

console.log(tot);
// F=0   S=95   (iteración inicial): 0 + elemento 1: 95) = 95
// F=95  S=5    (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
// F=100 S=25   (2ª iteración: 100 + elemento 3: 25) = 125
// F=125 S=10   (3ª iteración: 125 + elemento 4: 10) = 135
// F=135 S=25   (4ª iteración: 135 + elemento 5: 25) = 160

// Finalmente, devuelve 160
*/