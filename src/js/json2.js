

let personas = {
    persona1: {
        "Id": "01",
        "Nombre": "erahin",
        "Apellidos": "Pacheco Luna",
        "Edad": "34"
    },
    persona2: {
        "Id": "02",
        "Nombre": "Karen",
        "Apellidos": "Catalán Flores",
        "Edad": "12"
    }
}


// recorrer el primer nivel
for (const key in personas) {
    if (personas.hasOwnProperty.call(personas, key)) {
        console.log("Clave: " + key + " valor: " + personas[key]);
        console.log("Clave: " + key + " valor: " + personas[key].Nombre);
    }
}

// recorrer el segundo nivel
for (const personaKey in personas) {
    if (personas.hasOwnProperty.call(personas, personaKey)) {
        const persona = personas[personaKey];
        console.log(" Los datos de la persona " + personaKey + " son: ");
        console.log(" valor de ID: " + personas[personaKey].Id);
        for (const clave in persona) {
            if (persona.hasOwnProperty.call(persona, clave)) {
                console.log("Clave: " + clave + " valor: " + persona[clave]);

            }
        }

    }
}
console.log(personas);


// agregando elementos usando índices numéricos
personas["persona" + 3] = {
    persona3: {
        "Id": 3,
        "Nombre": "erahin",
        "Apellidos": "Juárez"
    }
};
console.log(personas);

// Agregar más datos al objeto JSON
personas.persona4 = {
    "Id": "02",
    "Nombre": "María",
    "Apellido": "González",
    "edad": "45"
};
console.log("persona 4");
console.log(personas.persona4);

let personasX = {};

// Agregar persona2 al objeto personas
personasX.persona2 = {
    "Id": "02",
    "Nombre": "María",
    "Apellido": "González"
};

// Mostrar el objeto personas actualizado en la consola
console.log(personasX.persona2);


// borrar a persona 4
delete personas["persona3"];
delete personas.persona4;
console.log(personas);
console.log(personas.persona4);
