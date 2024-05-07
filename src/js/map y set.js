
const mapa = new Map();

mapa.set("clave1", "mango");
mapa.set("clave2", "melon");


for (let [clave, valor] of mapa) {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}

// con values

for (let valor of mapa.values()) {
    console.log(valor);
}

// con for each

mapa.forEach((element, clave) => {
    console.log("clave: " + clave + " valor: " + element);
});

// =========================================SET========================

const miSet = new Set();
miSet.add(2);
miSet.add("Hola");
miSet.add('A');

// con for each
miSet.forEach(element => {
    console.log(element);
});

// con for of

for (const valor of miSet) {
    console.log(valor);
}

const prefijos = ["super", "spider", "ant", "iron"];
const sufijo = "man";
const superheroes = prefijos.map(prefijo => prefijo + sufijo);
console.log(superheroes);

// map con phyton = diccionarios



// for of con SET
const partidosPoliticos = new Set();
partidosPoliticos.add("PRI");
partidosPoliticos.add("MORENA");
partidosPoliticos.add("PAN");
for (let valor of partidosPoliticos) {
    console.log(valor);
}



const arrayNumber = [2, 4, 6, 12, 5];
const multiplicador = 2;
const resoult = arrayNumber.map(function (values) {
    return values * multiplicador;
})

console.log(resoult);