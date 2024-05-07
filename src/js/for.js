// for tradicional
const msg = "hola mundo";
for (let i = 0; i <= 10; i++) {
    console.log(msg);
}


// rompiendo un ciclo for
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(msg, i);
}

// continuando con for imprimiendo valores pares
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);

}

// ============================for in como objeto
const objAnimal = {
    nombre: 'fido',
    raza: 'beagle'
};

for (let atributo in objAnimal) {
    console.log(objAnimal[atributo]);
}


// for in con json
const flowerInformation = {
    "name": "rosa",
    "tallo": "12.4",
    "pistilo": "0.005"
};

for (let clave in flowerInformation) {
    console.log(`${clave}: ${flowerInformation[clave]}`);
}

// for in con array[]
const arrayPets = ['fido', 'pulgas', 'michelo'];

for (let index in arrayPets) {
    console.log(arrayPets[index]);
}

//for in con mapa NO SE PUEDE, para eso se usa for of o foreach
// for in con set NO SE PUEDE, para eso se usa for of o foreach




//================= for of con array[]

const arrayPetsName = ['fido', 'pulgas', 'michelo'];
for (let index of arrayPetsName) {
    console.log(index);

}

// for of con mapa

let countries = new Map();
countries.set("MX", "México");
countries.set("GD", "Guadalajara");

for (let [clave, valor] of countries) {
    console.log(clave, valor);
}

// for of con json NO SE PUEDE para eso se usa for in o convertir
// en array: let jsonArray = Object.entries(jsonObject);


// for of para SET exclusivamente
const partidos = new Set();
partidos.add("PRI");
partidos.add("PRD");
partidos.add("Morena");

for (let valor of partidos) {
    console.log(valor);
}

