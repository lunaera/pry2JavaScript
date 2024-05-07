
const Days = {
    domingo: 0,
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6
};

const fechaActual = new Date();
const dayOfWeek = fechaActual.getDay();


if (dayOfWeek === Days.sabado) {
    console.log("Hay que hacer la prueba piloto");
}
