/*
//Declaramos una variable con el identificador nombre 
//y posteriormente le asociamos el valor de Juan
let nombre;
nombre = "Juan";

//Declaramos una variable con el identificador edad
// y posteriormente le asociamos el valor de 18
let edad;
edad = 18



//También podemos declarar múltiples variables en una línea:
let user = 'John', age = 25, message = 'Hello';




console.log(nombre+edad)



fnLet();

let y=9;

function fnLet(){
    let y=2
    if(true){
        let y=5
        console.log(y)
    }
    console.log(y)
}
console.log(y)

console.log("========= const===============\n variable")
const v=9
fnConst()

function fnConst(){
    const v=2
    if(true){
        const v=5
        console.log(v)
    }
    console.log(v)
}
console.log(v)

*/

//ámbito de bloque

/*
const DAYMONTH=24;
const MONTH=12;
const CHRISMAST_DAY=24;
const DECEMBER=12;

function ambitoDeBloque(){
    if(DAYMONTH===CHRISMAST_DAY && MONTH===DECEMBER){
        var sondFile='Jingle_bells.mp3';
    }
    // es visible aquí ya que tiene ámbito de función
    console.log(sondFile); 
}

ambitoDeBloque();
*/

/*
const DAYMONTH=24;
const MONTH=12;
const CHRISMAST_DAY=24;
const DECEMBER=12;

function ambitoFuncion(){
    if(DAYMONTH===CHRISMAST_DAY && MONTH===DECEMBER){
        var sondFile='Jingle_bells.mp3';
    }
    // es visible aquí ya que tiene ámbito de función
    console.log(sondFile); 
}

ambitoFuncion();


function ejemploConVar() {
    if (true) {
      var x = 10; // variable x tiene ámbito de función
      let y = 20; // variable y tiene ámbito de bloque
    }
  
    console.log(x); // x es visible aquí, ya que tiene ámbito de función
    // console.log(y); // Esto dará un error, ya que y no está definida aquí (ámbito de bloque)
  }
  
  ejemploConVar();
  
*/

/*

const controlID='0924567';
//con plantilla de cadena usando acento grave o comilla francesa(`)
console.log(`Mi numero de control es: ${controlID}`);
// sin plantilla usando concatenación con operador +
console.log("Mi numero de control es: "+ controlID);
//usando concatenación automática. NOTA: exclusivo de la consola
console.log("Mi numero de control es:",controlID);

*/

/*
//Ejemplo 1
const MAX_ITERATIONS = 10;
for (let i = 0; i < MAX_ITERATIONS; i++) {
console.log("Iteración número ", i);
}
console.log("Bucle finalizado.");

//Ejemplo 2
const PI = 3.1416;
const RADIUS_OF_CIRCLE= 5;
let area= PI * RADIUS_OF_CIRCLE**2;
console.log(`El área del círculo con radio
${RADIUS_OF_CIRCLE} es de: ${area} ` );

// Declaración e inicialización
let carrera = "Ingeniería en TIC";
//reasignación
carrera = "Ingeniería Informática";


*/

/*
let x=34;

ambitoBloque();


function ambitoBloque(){
    let x=10;
    if(true){
        let x=2;
        console.log("El valor de x es:",x);
    }
    console.log("El valor de x es:",x);
}
console.log("El valor de x es:",x);


*/

/*
let carrera = "Ingeniería en TIC";
let numControl = 22921435;
let gender = 'M';
let height = 1.69;
let weight=78.9;
let aprobado = null;

console.log(`carrera: ${typeof carrera}`);
console.log(`numControl: ${typeof numControl}`);
console.log(`gender: ${typeof gender}`);
console.log(`height: ${typeof height}`);
console.log(`weight: ${typeof weight}`);
console.log(`aprobado: ${typeof aprobado}`); 

*/
/*
console.log(`carrera: ${carrera.constructor.name}`);
console.log(`numControl: ${numControl.constructor.name}`);
console.log(`gender: ${gender.constructor.name}`);
console.log(`height: ${height.constructor.name}`);
console.log(`weight: ${weight.constructor.name}`);
console.log(`aprobado: ${aprobado.constructor.name}`); 

console.log(`carrera: ${typeof carrera}`);
console.log(`numControl: ${typeof numControl}`);
console.log(`gender: ${typeof gender}`);
console.log(`height: ${typeof height}`);
console.log(`weight: ${typeof weight}`);
console.log(`aprobado: ${typeof aprobado}`); 




let waterAmount=6.7;
waterAmount="siete;"

console.log(waterAmount);*/

//esto es un comentario

const x = 34;
function ambito() {
    const x = 56;
    if (true) {
        const x = 4;
        console.log(x);
    }
    console.log(x);
}
console.log(x);
ambito();

/*
let x = 78;
function ambitoLet() {
    let x = 56;
    if (true) {
        let x = 34;
        console.log(x);
    }
    console.log(x);
}
console.log(x);
ambitoLet();
*/

const isaGirl = true;
const isaCar = true;
const isProgramer = false;

console.log(!(isaGirl || isProgramer));
