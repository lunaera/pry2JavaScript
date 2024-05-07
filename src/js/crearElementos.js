
//Crear elementos HTML
let contador = 0;

const frmDatosPersonales = document.getElementById("frmDatosPersonales");

frmDatosPersonales.addEventListener("submit", function (event) {
    event.preventDefault();
    contador++;
    // recuperando datos de los campos
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const edad = document.getElementById("edad").value;

    // crear una nueva fila
    const fila = document.createElement("tr");

    // crear celdas
    const celdaNumero = document.createElement("td");
    const celdaNombre = document.createElement("td");
    const celdaApellidos = document.createElement("td");
    const celdaEdad = document.createElement("td");
    const celdaAcciones = document.createElement("td");

    // crear los botones y div
    divBotones = crearBotones();

    // añadir datos a las celdas
    celdaNumero.textContent = contador;
    celdaNombre.textContent = nombre;
    celdaApellidos.textContent = apellidos;
    celdaEdad.textContent = edad;

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

    // limpar los campos del formulario
    document.querySelector("#frmDatosPersonales").reset();


});


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

    /*Otra forma de hacerlo sin usar inner es:
const imgEditar = document.createElement("img");

// Establecer atributos de la imagen
imgEditar.src = "src/assets/edit.png"; // Ruta de la imagen
imgEditar.alt = "Editar"; // Texto alternativo para accesibilidad

// Agregar la imagen al botón de editar
btnEditar.appendChild(imgEditar);
*/

    const imgAceptar = document.createElement("img");
    imgAceptar.src = "src/assets/cheked.png";
    imgAceptar.alt = "Aceptar";
    btnAceptar.appendChild(imgAceptar);
    btnAceptar.disabled = true;


    // Añadir los botones al div
    divBotones.appendChild(btnEditar);
    divBotones.appendChild(btnEliminar);
    divBotones.appendChild(btnAceptar);


    let filaEditada = null;

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



    btnAceptar.addEventListener("click", function () {
        if (filaEditada) {
            // Recorrer las celdas de la fila editada
            filaEditada.querySelectorAll('td').forEach(function (celda, index) {
                if (index !== 0 && index !== filaEditada.cells.length - 1) {
                    // Obtener el nuevo valor de la celda si se ha editado
                    const nuevoValor = celda.textContent;
                    // Actualizar el contenido de la celda con el nuevo valor
                    celda.textContent = nuevoValor;
                    // Deshabilitar la edición de la celda
                    celda.contentEditable = false;
                }
            });
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

