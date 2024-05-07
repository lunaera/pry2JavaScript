
/**
 * Los objetos son entidades que combinan datos (propiedades) y funcionalidad
(métodos). En JavaScript, los objetos son una de las estructuras fundamentales y se
definen con llaves { }.
 */


const objCelular = {
    marca: "Huawei",
    modelo: "hT56",
    ram: 12,
    IMEI: "12345"
};

console.log(objCelular);
console.log(objCelular.marca);


const objAnimal = {
    raza: "bulterry",
    vacunas: 5,
    honomatopeya: function () {
        console.log("guau guau");
    }
};

console.log(objAnimal.raza);
objAnimal.honomatopeya();

const objEstudiante = {
    nombre: "pedro",
    calificaciones: { "unidad 1": 10, "unidad 2": 5, "unidad 3": 6, "unidad 4": 8 },
    obtenerCalificaciones: (notas) => {
        for (let clave in notas) {
            console.log(`${clave}=> ${notas[clave]}`)
        }
    },
    semestre: [1, 2, 3, 4, 5, 6, 7, 8],
    getSemetre: function (sem) {
        sem.forEach(element => {
            console.log(element);
        });
    }
};

objEstudiante.obtenerCalificaciones(objEstudiante.calificaciones);
objEstudiante.getSemetre(objEstudiante.semestre);

