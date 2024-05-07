
// sin constructor
class Persona {
    // definiendo atributos 
    nombre = "Ramiro";
    edad;
    sexo;
    rfc;

    saludar() {
        console.log(`Hola ${this.nombre}`);
    }
}

const objPersona1 = new Persona();
objPersona1.saludar();


// con constructor

class Docente {
    constructor(nom, edad, sexo) {
        this.nombre = nom;
        this.edad = edad;
        this.sexo = sexo;
    }
}

const objDocente1 = new Docente("erahin", 23, "H");
console.log(objDocente1);
objDocente1.nombre = "María";
console.log(objDocente1.nombre); // las propiedades por default son publicas

// propiedas privadas


class Medico {
    #nombre;
    #especialidad;
    #area;
    #carrera;

    constructor(especialidad) {
        this.#nombre = "alberto";
        this.#especialidad = especialidad;
        this.#area;
        //carrera = "Medicina"; // generará un error si se desea invocar en un método, se debe poner this.carrera
        this.carrera = "Medicina";
    }

    getDatos() {
        return this.#nombre;
    }

    // tema: ambito de método return carrera generará error porque la propiedad carrera esta definido en el método
    metodo() {
        //return carrera; // esto generará un error por que su scope es solo en el método y nó estpa definido
        return this.#carrera; // tiene ámbito de clase
    }
}

const objMedico1 = new Medico("otorrinolaringologo");
console.log(objMedico1); // no se puede acceder a un atributo directamente, se requieren métodos
console.log(objMedico1.getDatos()); // accediendo mediante un método público
console.log(objMedico1.metodo());

