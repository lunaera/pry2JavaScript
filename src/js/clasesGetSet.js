// tema:; propiedades computadas get y set

class Medico {
    #nombre;
    #especialidad;
    #area;
    #carrera;
    #calidad;

    constructor(especialidad, calidad) {
        this.#nombre = "alberto";
        this.#especialidad = especialidad;
        this.#area;
        this.#carrera;
        this.#calidad = calidad;
    }


    get nombre() {
        return this.#nombre;
    }

    get especialidad() {
        return this.#especialidad;
    }

    get area() {
        return this.#area;
    }

    get calidad() {
        return '🦷'.repeat(this.#calidad);
    }

    get carrera() {
        return this.#carrera;
    }

    set area(area) {
        this.#area = area;
    }

    set carrera(carrera) {
        this.#carrera = carrera;
    }

}

const objMedico = new Medico("ginecología", 5);
console.log(objMedico.nombre);
console.log(`La calidad del servicio es: ${objMedico.calidad}`);
objMedico.area = "Medicina general";
objMedico.carrera = "Medicina interna";
console.log(objMedico);

