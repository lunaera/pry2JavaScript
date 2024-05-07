const date = new Date();

console.log(`Fecha completa: ${date}`);
console.log(`Solo Fecha: ${date.toDateString()}`);
console.log(`Fecha en formato regional: ${date.toLocaleDateString()}`);
console.log(`Año: ${date.getFullYear()}`);
console.log(`Mes: ${date.getMonth() + 1}`);
console.log(`Número de día de la semana: ${date.getDay()}`);  //0 domingo
console.log(`Día: ${date.getDate()}`);
console.log(`Solo la hora: ${date.toLocaleTimeString()}`);
console.log(`Hora: ${date.getHours()}`);
console.log(`Minuto: ${date.getMinutes()}`);
console.log(`Segundo: ${date.getSeconds()}`);

const currentDate = new Date('2024/02/09'); // si se usa 2024-02/09 no sale bien, hay errores
console.log(`Fecha completa: ${currentDate}`);
console.log(`Fecha en formato regional: ${currentDate.toLocaleDateString()}`);
console.log(`Año: ${currentDate.getFullYear()}`);
console.log(`Mes: ${currentDate.getMonth() + 1}`);
console.log(`Día: ${currentDate.getDate()}`);
console.log(`Número de Día de la semana: ${currentDate.getDay()}`);
