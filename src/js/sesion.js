
let clave = null;
document.getElementById("frmSesion").addEventListener("submit", function (event) {
    event.preventDefault();


    clave = document.querySelector("#clave").value;
    if (!buscarClave(clave)) {
        const valor = document.querySelector("#valor").value;

        //if (clave.trim() !== "") { // Verificar si el campo no está vacío
        //pero para sessionStorage es: sesionStorage.lenght

        // formas de almacenar en sessionStorage
        //sessionStorage.setItem(clave, valor);
        //sessionStorage.clave = valor;


        if (!buscarValor(valor)) {

            sessionStorage[clave] = valor;
            // document.querySelector("#frmSesion").reset();
        }
        else {
            alert(`el valor ya existe!`);
            //document.querySelector("#frmSesion").reset();
        }
    }
    else {
        alert("La clave ya existe!");
        //document.querySelector("#frmSesion").reset();
    }

    document.querySelector("#frmSesion").reset();

});

// paso 3: Mostrar con getItem el último valor insertado

document.querySelector("#btnMostrar").addEventListener("click", function () {

    const divResponse = document.getElementById("response");
    divResponse.textContent = "";

    const div = document.createElement("div");
    const valor = sessionStorage.getItem(clave);

    if (valor) { // verifica si hay algo almacenado en la clave indicada
        div.textContent = clave + " -> " + valor;
    }
    else {
        div.textContent = "No hay ningún valor almacenado!";
    }
    divResponse.appendChild(div);
});


// Paso 4: recuperar datos utilizando el método key: devuelve el nombre de la clave en el índice indicado

document.querySelector("#btnMostrarKey").addEventListener("click", function () {

    const divResponse = document.getElementById("response");
    divResponse.textContent = "";


    //si no se filtra devuelve todas las claves incluyendo IsThisFirstTime_Log_From_LiveServer
    const claves = Object.keys(sessionStorage);
    console.log(claves);

    const objetoClaves = Object.keys(sessionStorage).filter(key => !key.includes("IsThisFirstTime_Log_From_LiveServer"));
    console.log("CLaves filtradas: " + objetoClaves);

    // Formas de recuperar las claves y el valor    
    console.log("Forma 1 clave: " + sessionStorage.key(1)); // se obtiene la clave
    console.log("Forma 1 valor: " + sessionStorage.getItem(sessionStorage.key(1))); // se obtiene la clave
    console.log("Forma 2 valor:" + sessionStorage.getItem(objetoClaves[0])); //se obtiene el valor en la posición 0 porque está filtrado

    if (objetoClaves.length !== 0) {
        for (let i = 0; i < sessionStorage.length; i++) {
            const div = document.createElement("div");

            // .key obtiene el nombre de la clave en el índice epecificado
            let clave = sessionStorage.key(i);

            /* si se deja así, muestra el liveServer*/
            let valor = sessionStorage.getItem(clave);
            div.textContent = clave + " -> " + valor;
            divResponse.appendChild(div);

            // OJOOOOO hay que usar esta alternativa

            /*
            if (!clave.includes("IsThisFirstTime_Log_From_LiveServer")) {
                let valor = sessionStorage.getItem(clave);
                div.textContent = clave + " -> " + valor;
                divResponse.appendChild(div);
            }*/
        }
    }
    else {
        const div = document.createElement("div");
        div.textContent = "Nada que mostrar";
        divResponse.appendChild(div);
    }
});


// paso 4: recuperando las claves y valores con Foreach

document.querySelector("#btnMostrarAll").addEventListener("click", function () {
    const divResponse = document.getElementById("response");
    divResponse.textContent = "";

    // recuperardo las claves del sessionStorage
    const objetoClaves = Object.keys(sessionStorage).filter(key => !key.includes("IsThisFirstTime_Log_From_LiveServer"));

    if (objetoClaves.length !== 0) {
        objetoClaves.forEach(function (clave) {
            const divElement = document.createElement("div");
            const valor = sessionStorage.getItem(clave);
            divElement.textContent = clave + " - " + valor;
            divResponse.appendChild(divElement);
        });
    }
    else {
        const divElement = document.createElement("div");
        divElement.textContent = "No hay información para mostrar";
        divResponse.appendChild(divElement);
    }
});


function buscarClave(clave) {
    const objetoClaves = Object.keys(sessionStorage).filter(key => !key.includes("IsThisFirstTime_Log_From_LiveServer"));
    return objetoClaves.some(key => key === clave);

}


function buscarValor(valor) {
    const objetoClaves = Object.keys(sessionStorage).filter(key => !key.includes("IsThisFirstTime_Log_From_LiveServer"));
    return objetoClaves.some(key => sessionStorage.getItem(key) === valor);
}


// Buscar elemento

document.querySelector("#frmBuscar").addEventListener("submit", function (event) {
    event.preventDefault();

    const botonPresionado = event.submitter;
    if (botonPresionado.id === "btnBuscar") {

        const clave = document.getElementById("txtBuscar").value;
        const responseBuscar = document.getElementById("responseBuscar");
        responseBuscar.textContent = "";
        const ObjClaves = Object.keys(sessionStorage).filter(key => !key.includes("IsThisFirstTime_Log_From_LiveServer"));
        // let valor = "";

        if (ObjClaves.some(key => key === clave)) {
            const divBuscar = document.createElement("div");
            const valor = sessionStorage.getItem(clave);
            // console.log(valor);
            divBuscar.textContent = `Clave: ${clave} valor: ${valor}`;
            responseBuscar.appendChild(divBuscar);
        }
        else {
            const divBuscar = document.createElement("div");
            divBuscar.textContent = "Datos no encontrados";
            responseBuscar.appendChild(divBuscar);
        }
    }
    else if (botonPresionado.id === "btnEliminar") {
        const clave = document.getElementById("txtBuscar").value;
        const responseEliminar = document.getElementById("responseBuscar");
        responseBuscar.textContent = "";
        const ObjClaves = Object.keys(sessionStorage).filter(key => !key.includes("IsThisFirstTime_Log_From_LiveServer"));
        //let valor = "";

        if (ObjClaves.some(key => key === clave)) {
            const divEliminar = document.createElement("div");
            const valor = sessionStorage.getItem(clave);
            if (confirm("Estas seguro?")) {
                sessionStorage.removeItem(clave);
                divEliminar.textContent = `la Clave: ${clave} con valor: ${valor} ha sido eliminado`;
                responseEliminar.appendChild(divEliminar);
            }
        }
        else {
            const divEliminar = document.createElement("div");
            divEliminar.textContent = "Datos no encontrados para eliminar";
            responseEliminar.appendChild(divEliminar);
        }
    }
});

document.getElementById("btnDeleteAll").addEventListener("click", function () {

    const ObjClaves = Object.keys(sessionStorage).filter(key => !key.includes("IsThisFirstTime_Log_From_LiveServer"));


    const responseEliminarAll = document.getElementById("responseBuscar");
    responseEliminarAll.textContent = "";

    if (ObjClaves.length !== 0) {
        if (confirm("Esta seguro de eliminar todos los datos?")) {
            sessionStorage.clear();
            divEliminarAll = document.createElement("div");
            divEliminarAll.classList.add("alert", "alert-danger");
            divEliminarAll.textContent = "Los datos han sido eliminados exitosamente!!";
            responseEliminarAll.appendChild(divEliminarAll);
        }
    }
    else {
        divEliminarAll = document.createElement("div");
        divEliminarAll.classList.add("alert", "alert-success");
        divEliminarAll.textContent = "No hay datos a eliminar!!";
        responseEliminarAll.appendChild(divEliminarAll);
    }


});