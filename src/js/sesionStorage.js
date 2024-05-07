

// =================Paso 4 ocultamos en div en el script
document.querySelector("#valoresTabla").style.display = "none";

// =================Paso 5: modificamos los eventos del formulario
document.getElementById("frmDatosPersonales").addEventListener("submit", function (event) {

    event.preventDefault();

    // recuperando datos de los campos
    const idPersona = document.getElementById("idPersona").value;
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const edad = document.getElementById("edad").value;

    // Creamos un objeto JSON con los datos
    const Persona = {
        "IdPersona": idPersona,
        "Nombre": nombre,
        "Apellidos": apellidos,
        "Edad": edad
    }

    // obtenemos los valores previos si existen y si no devuelve un valor nulo {}
    let personas = JSON.parse(sessionStorage.getItem("personas")) || {};

    // Agregar los datos de la nueva persona al objeto JSON de personas
    const index = Object.keys(personas).length + 1;

    // clave -> valor
    personas["Persona" + index] = Persona; // aquí se va creaando el JSON

    // Convertir el objeto de personas a JSON y almacenarlo en sessionStorage
    sessionStorage.setItem("personas", JSON.stringify(personas));

    console.log(Object.keys(sessionStorage));

    // Accedemos al elemento del DOM  responseInformation para mostrar el registro exitoso
    const divResponse = document.getElementById("responseInformation");
    const divAdd = document.createElement("div");
    divAdd.classList.add("alert", "alert-success");
    divAdd.textContent = "Los datos han sido guardados exitosamente!!";

    divResponse.classList.add("fade-out");
    divResponse.appendChild(divAdd);

    setTimeout(function () {
        divResponse.removeChild(divAdd);
        divResponse.classList.remove("fade-out");
    }, 3000);


    // limpar los campos del formulario
    document.querySelector("#frmDatosPersonales").reset();
});


// =================== Paso 7 mostramos los registros en una tabla

document.querySelector("#btnMostrar").addEventListener("click", function () {

    // verificamos si existen datos en la session
    const objIndices = Object.keys(sessionStorage).filter(key => !key.includes("IsThisFirstTime_Log_From_LiveServer"));
    console.log("indices: " + objIndices);

    if (objIndices.length !== 0) {
        // Mostramos el contenedor ocultado al inicio
        const divTabla = document.getElementById("valoresTabla");
        divTabla.style.display = "block";

        // limpiamos el cuerpo de la tabla por cualquier rastro de inforamción previa
        document.getElementById("cuerpoTabla").textContent = "";

        //recuperamos los dato de la sessión y convertimos en formato JSON
        let datosPersonas = JSON.parse(sessionStorage.getItem("personas")) || {};

        for (const key in datosPersonas) {
            if (datosPersonas.hasOwnProperty.call(datosPersonas, key)) {

                console.log(`Clave: ${key} valor: ${datosPersonas[key].IdPersona}`);

                // creamos una fila
                const fila = document.createElement("tr");

                // crear celdas
                const celdaNumero = document.createElement("td");
                const celdaNombre = document.createElement("td");
                const celdaApellidos = document.createElement("td");
                const celdaEdad = document.createElement("td");
                const celdaAcciones = document.createElement("td");

                // crear los botones y div sin cambios
                divBotones = crearBotones();

                // añadir datos del JSON de la sessión a las celdas
                celdaNumero.textContent = datosPersonas[key].IdPersona;
                celdaNombre.textContent = datosPersonas[key].Nombre;
                celdaApellidos.textContent = datosPersonas[key].Apellidos;
                celdaEdad.textContent = datosPersonas[key].Edad;

                // Añadimos los botones a las celdas
                celdaAcciones.appendChild(divBotones);

                // agregar las celdas a la fila
                fila.appendChild(celdaNumero);
                fila.appendChild(celdaNombre);
                fila.appendChild(celdaApellidos);
                fila.appendChild(celdaEdad);
                fila.appendChild(celdaAcciones); // aqui se ocupa la varible que retorna el método

                // agregar la fila a la tabla
                document.getElementById("cuerpoTabla").appendChild(fila);
            }
        }
    }
    else {
        const divResponse = document.getElementById("responseInformation");
        const divMostrar = document.createElement("div");
        divMostrar.textContent = "No hay datos que mostrar";
        divMostrar.classList.add("alert", "alert-danger");

        divResponse.classList.add("fade-out");
        divResponse.appendChild(divMostrar);

        setTimeout(function () {
            divResponse.removeChild(divMostrar);
            divResponse.classList.remove("fade-out");
        }, 3000);
    }

});


//============================ Paso 8 Eventos de los botónes de imágenes

function crearBotones() {

    const divBotones = document.createElement("div");
    divBotones.className = "btn-group";
    const btnEditar = document.createElement("button");
    const btnEliminar = document.createElement("button");
    const btnAceptar = document.createElement("button");

    //Agregar class 
    btnEditar.className = "btn btn-primary";
    btnEliminar.className = "btn btn-danger";
    btnAceptar.className = "btn btn-success";


    // Añadir ruta al botón
    btnEditar.innerHTML = "<img src='src/assets/edit.png' alt='Editar'>";
    btnEliminar.innerHTML = "<img src='src/assets/delete.png' alt='Editar'>";
    //btnAceptar.innerHTML = `<img src='src/assets/cheked.png' alt='Editar'>`;

    //Otra forma de hacerlo sin usar inner es:
    const imgAceptar = document.createElement("img");
    // Establecer atributos de la imagen
    imgAceptar.src = "src/assets/cheked.png";
    imgAceptar.alt = "Aceptar";
    // Agregar la imagen al botón de editar
    btnAceptar.appendChild(imgAceptar);

    // Desabilitamos el botón de aceptar
    btnAceptar.disabled = true;


    // Añadir los botones al div
    divBotones.appendChild(btnEditar);
    divBotones.appendChild(btnEliminar);
    divBotones.appendChild(btnAceptar);


    let filaEditada = null;

    // =============== Paso 8 botón de etidtar sin cambios

    btnEditar.addEventListener("click", function () {
        // Desabilitamos y habilitamos botones
        btnAceptar.disabled = false;
        btnEliminar.disabled = true;
        btnEditar.disabled = true;

        // identifica la fila a editar su elemento padre
        const fila = this.closest("tr");
        if (fila) {
            filaEditada = fila;
            console.log(filaEditada);
            // Habilitar la edición solo en las celdas necesarias
            habilitarEdicion(filaEditada);
        }
        else {
            console.error("No se pudo encontrar la fila actual.");
        }

    });


    // ==================== Paso 9 Modificar botón Aceptar ==============

    btnAceptar.addEventListener("click", function () {
        if (filaEditada) {
            // Recorrer las celdas de la fila editada

            filaEditada.querySelectorAll('td').forEach(function (celda, index) {
                if (index !== 0 && index !== filaEditada.cells.length - 1) { // filaEditada.cells acceder a las celdas
                    // Obtener el nuevo valor de la celda si se ha editado
                    const nuevoValor = celda.textContent;

                    // Actualizar el contenido de la celda con el nuevo valor
                    celda.textContent = nuevoValor;

                    // Deshabilitar la edición de la celda
                    celda.contentEditable = false;
                }
            });

            // recuperamos los valores de las celdas editadas
            const idPersona = filaEditada.cells[0].textContent;
            const Nombre = filaEditada.cells[1].textContent;
            const Apellidos = filaEditada.cells[2].textContent;
            const Edad = filaEditada.cells[3].textContent;

            console.log(`id ${idPersona} Nombre ${Nombre} Apellidos ${Apellidos} Edad: ${Edad}`);

            // obtenemos los valores previos de la sessión si existen y si no devuelve un valor nulo {}
            let objPersonas = JSON.parse(sessionStorage.getItem("personas")) || {};
            console.log(objPersonas);

            for (const key in objPersonas) {
                if (objPersonas.hasOwnProperty.call(objPersonas, key)) {
                    if (idPersona === objPersonas[key].IdPersona) {
                        objPersonas[key].Clave = idPersona;
                        objPersonas[key].Nombre = Nombre;
                        objPersonas[key].Apellidos = Apellidos;
                        objPersonas[key].Edad = Edad;

                        console.log(`Clave: ${key} valor: ${objPersonas[key].Clave}`);
                    }
                }
            }
            // Convertir el objeto de objPersonas a JSON y almacenarlo en sessionStorage
            sessionStorage.setItem("personas", JSON.stringify(objPersonas));



            // Reiniciar la variable de la fila editada
            filaEditada = null;

            btnAceptar.disabled = true;
            btnEliminar.disabled = false;
            btnEditar.disabled = false;
        }

    });

    btnEliminar.addEventListener("click", function () {
        // Código para manejar el evento de clic en el botón de editar
        //const filaEliminar = event.target.closest("tr");
        const filaEliminar = this.closest("tr");

        if (filaEliminar) {
            // Eliminar la fila
            filaEliminar.remove();
        } else {
            console.error("No se pudo encontrar la fila actual.");
        }
    });

    return divBotones;
}



//============================== Sin cambios 

function habilitarEdicion(filaActual) {
    const celdas = filaActual.querySelectorAll("td");
    if (celdas.length > 0) {
        // Recorrer las celdas de la fila y habilitar la edición solo en las necesarias
        celdas.forEach(function (celda, index) {
            if (index !== 0 && index !== celdas.length - 1) {
                celda.contentEditable = true;
                celdas[1].focus();
            }
        });
    }
    else {
        console.error("No se encontraron celdas en la fila actual.");
    }

}

document.querySelector("#frmBuscar").addEventListener("submit", function (event) {

    event.preventDefault();
    const divresponseInformation = document.getElementById("responseInformation");
    divresponseInformation.textContent = "";

    // recuperar el valor de la caja de texto
    const txtIdPersona = document.getElementById("txtIdPersona").value;


    // primera validación cuando no hay nada de datos en la sessión ----tarea
    const tamSession = Object.keys(sessionStorage).filter(key => !key.includes("IsThisFirstTime_Log_From_LiveServer")).length;

    if (tamSession !== 0) {
        // recuperamos los datos de la session y convertimos en formato JSON
        const objJsonPersona = JSON.parse(sessionStorage.getItem("personas"));
        console.log(objJsonPersona);

        const datosPersona = buscarID(txtIdPersona, objJsonPersona);

        if (datosPersona !== undefined) {
            console.log(datosPersona.Nombre);

            // Mostramos el contenedor ocultado al inicio
            const divTabla = document.getElementById("valoresTabla");
            divTabla.style.display = "block";

            // limpiamos el cuerpo de la tabla por cualquier rastro de inforamción previa
            document.getElementById("cuerpoTabla").textContent = "";

            // creamos una fila
            const fila = document.createElement("tr");

            // crear celdas
            const celdaNumero = document.createElement("td");
            const celdaNombre = document.createElement("td");
            const celdaApellidos = document.createElement("td");
            const celdaEdad = document.createElement("td");
            const celdaAcciones = document.createElement("td");

            // crear los botones y div sin cambios
            divBotones = crearBotones();

            // añadir datos del JSON de la sessión a las celdas
            celdaNumero.textContent = datosPersona.IdPersona;
            celdaNombre.textContent = datosPersona.Nombre;
            celdaApellidos.textContent = datosPersona.Apellidos;
            celdaEdad.textContent = datosPersona.Edad;

            // Añadimos los botones a las celdas
            celdaAcciones.appendChild(divBotones);

            // agregar las celdas a la fila
            fila.appendChild(celdaNumero);
            fila.appendChild(celdaNombre);
            fila.appendChild(celdaApellidos);
            fila.appendChild(celdaEdad);
            fila.appendChild(celdaAcciones); // aqui se ocupa la varible que retorna el método

            // agregar la fila a la tabla
            document.getElementById("cuerpoTabla").appendChild(fila);
        }
        else {

            // limpiamos el cuerpo de la tabla por cualquier rastro de inforamción previa
            document.getElementById("cuerpoTabla").textContent = "";
            // ocultamos el contenedor de la tabla
            document.querySelector("#valoresTabla").style.display = "none";

            const divResponseBuscar = document.createElement("div");
            divResponseBuscar.textContent = "No se encontró la persona con el ID";
            divResponseBuscar.className = "alert alert-danger";
            divresponseInformation.appendChild(divResponseBuscar);
            divresponseInformation.classList.add("fade-out");

            setTimeout(function () {
                divresponseInformation.removeChild(divResponseBuscar);
                divresponseInformation.classList.remove("fade-out");
            }, 3000);



        }

    }
    else {

        // esto se puede colocar en un método y solo recibir el mensaje que tentrá el div
        const divResponseBuscar = document.createElement("div");
        divResponseBuscar.textContent = "No hay registros en la sesión";
        divResponseBuscar.className = "alert alert-danger";
        divresponseInformation.appendChild(divResponseBuscar);
        divresponseInformation.classList.add("fade-out");

        setTimeout(function () {
            divresponseInformation.removeChild(divResponseBuscar);
            divresponseInformation.classList.remove("fade-out");
        }, 3000);
    }


});

function buscarID(idPersona, objJsonPersona) {
    // find devuelve el valor del primer elemento encontrad
    // some devuelve true or false solamente cuando encuantra una coinsidencia

    return Object.values(objJsonPersona).find(personas => personas.IdPersona === idPersona);
}