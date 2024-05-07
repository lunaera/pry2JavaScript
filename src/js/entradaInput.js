/*
const inputN=prompt("Ingresa un número: ")


if(inputN.trim()===""){
    document.write("Debes ingresar un valor")
}
else {
    const number=parseInt(inputN)
     //isNaN(rffg) ¿rffg no es un número? devuelve true por que rffg no es un número, debe ser false
     //isNaN(9) ¿9 no es un número? devuelve falso por que 9 si es un número, debe ser verdadero
    if (!isNaN(number)){ 
        if(number%2===0){
            console.log("es par")
            alert("es par")
            document.write("es par");
        
        }
        else{
            console.log("es impar")
            document.write("es impar")
        }
    }else{
        console.log("Debes ingresar un valor numérico")
        document.write("Debes ingresar un valor numérico")
    }
}
*/

//Promesas
//const miPromesa=new Promise(function(resolve, reject){
/*
const miPromesa=new Promise((resolve, reject)=>{
    const inputN=prompt("Ingresa un número: ") 
    if(inputN.trim()===""){
        reject("Debes ingresar un valor!")
    }
    else {
        const number=parseInt(inputN)
        if (!isNaN(number)){ 
            if(number%2===0){
                resolve("Es par")
            }
            else{
                resolve("es impar")
            }
        }
        else reject("Debes ingresar un número!!")
    }
});
miPromesa.then(mensaje=>{
    console.log(mensaje)
    alert(mensaje)
}).catch(function(error){
    console.log(error)
});*/

//función async/await
/*
async function miPromesa(){
    return new Promise((resolve, reject)=>{
    const inputN=prompt("Ingresa un número: ") 
    if(inputN.trim()===""){
        reject("Debes ingresar un valor!")
    }
    else {
        const number=parseInt(inputN)
        if (!isNaN(number)){ 
            if(number%2===0){
                resolve("Es par")
            }
            else{
                resolve("es impar")
            }
        }
        else reject("Debes ingresar un número!!")
    }
});
}


async function Await(){
    try {
        const miRespuesta=await miPromesa();
        console.log(miRespuesta)
        alert(miRespuesta)    
    } catch (error) {
        console.log(error)
    }
}

Await();*/

//usando temporizadores para ejecutar una acción
/*
async function miPromesa(){
    return new Promise((resolve, reject)=>{
        document.write("Ejecutando evento, espere...")
        setTimeout(()=>{
            const inputN = prompt("Ingresa un número: ");
            if (inputN.trim() === "") {
              reject("Debes ingresar un valor!");
            } 
            else {
              const number = parseInt(inputN);
              if (!isNaN(number)) {
                if (number % 2 === 0) {
                  resolve("Es par");
                } else {
                  resolve("es impar");
                }
              } else reject("Debes ingresar un número!!");
            }

        },5000);
    });
}




async function Await(){
    try {
        const miRespuesta=await miPromesa();
        console.log(miRespuesta)
        alert(miRespuesta)    
        //document.write("Evento ejecutado con éxito")
    } catch (error) {
        console.log(error)
    }
}

Await();
*/

let a = 6;
console.log(a--);
console.log(--a);
