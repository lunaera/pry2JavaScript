// tipos de datos en js
/*
console.log("This is a String")


const v=9
let valorX=4
fnConst()

function fnConst(){
    const v=2
    if(true){
        const v=5
        valorX=valorX+v
        console.log(v)
        console.log(valorX)
    }
    console.log(v)
}
console.log(v)


//let
fnLet()
let y=9
function fnLet(){
    let y=2
    if(true){
        let y=5
        y=45
        console.log(y)
    }
    console.log(y)
}
console.log(y)


*/


//en arrays la estructura que usa es: valor, índice
/*
const list = ["A", "B", "C"];

function action(valor, index) {
console.log("i=", index, "list=", valor);
}

list.forEach(function(valor,indice){
    console.log("i=", indice, "list=", valor);
})


const arr = ["a", "b"];
arr.push(function() {
console.log( this );
});
arr[2](); // ?
*/


/*
//let nombre=prompt("Introduce tu nombre")

"use strict";

const objPersona1={};

const objPersona2={
    nombre:"Erahin",
    edad:44,
    sexo:'M'
};

console.log(objPersona2)

let xx=34;
console.log(xx);



const fecha=new Date()
console.log(fecha)*/

/*
let base=prompt("Dame la base");
let altura=prompt("Dame la altura");
console.log(base + altura);

*/
let base1 = parseInt(prompt("Dame la base"));
let altura1 = parseFloat(prompt("Dame la altura"));
let sexo = prompt("¿Cuál es tu sexo: ?").charCodeAt;
console.log(base1 + altura1);
console.log("sexo", sexo);

