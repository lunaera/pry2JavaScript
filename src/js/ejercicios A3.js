
const nombre = "Erahin Pacheco Luna";
const numControl = 36475;
const promedio = 8.9;
const semestre = 5;
const carrera = "Administración";
let estatus = "";

switch (carrera) {
    case "Economía": semestre >= 6 && promedio >= 8.8 ? estatus = "es Aceptado" : estatus = "No es aceptado"; break;
    case "Computación": semestre > 6 && promedio > 8.5 ? estatus = "es Aceptado" : estatus = "No es aceptado"; break;
    case "Administración":
    case "Contabilidad": semestre > 5 && promedio > 8.5 ? estatus = "es Aceptado" : estatus = "No es aceptado"; break;
    default: estatus = `No pertenece a ninguna carrera`;
}

console.log(`El Alumno ${nombre} con control ${numControl} de la carrera ${carrera} ${estatus}`);