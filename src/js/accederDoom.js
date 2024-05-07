/*function moverRaton() {
    alert("se movió el ratón");
}*/



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

//Seleccionar al elemento del DOM por su id
function forID() {
    const txtNombreUser = document.getElementById("nombreUser").value;
    const divRespuestaTextContent = document.getElementById("respuestaTextContent");

    // 1- insertando elementos
    divRespuestaTextContent.textContent = txtNombreUser;

    //otra forma
    const divRespuestaInnerHTML = document.getElementById("respuestaInnerHTML");
    divRespuestaInnerHTML.innerHTML = `<strong>${txtNombreUser}</strong>`; // esto es interpretado

    //tercera forma, primero eleigen en qué nodo padre deseas agregar
    /*
    Las posiciones que puedes utilizar con insertAdjacentHTML() son las siguientes:

"beforebegin": Antes del elemento.
"afterbegin": Dentro del elemento, antes de su primer hijo.
"beforeend": Dentro del elemento, después de su último hijo.
"afterend": Después del elemento.
    */
    const divRespInsertAdjacent = document.getElementById("respuestaDivInnerHTML");
    divRespInsertAdjacent.insertAdjacentHTML("beforeend", `<div class="divTextContend"><strong>${txtNombreUser}</strong></div>`);
}

// Seleccionar al elemento del DOM por su atributo class
function forClass() {
    const items = document.getElementsByClassName("campoTexto");

    /*
    [...items].forEach(element => {
        alert(element.textContent);
    });*/

    [...items].forEach(element => {
        alert(element.value);
    });

}

// Seleccionar al elemento del DOM por su atributo name
function forName() {
    const items = document.getElementsByName("campoTexto");
    console.log(items);
    [...items].forEach(element => {
        alert(element.value);
    });

}

// Seleccionar al elemento del DOM por su tipo tagName
function forTagName() {
    const items = document.getElementsByTagName("input");
    console.log(items);
    [...items].forEach(element => {
        alert(element.value);
    });

}

// Seleccionar al elemento del DOM con querySelector ya sea por .class o por id
function forQuerySelector() {
    const itemClass = document.querySelector(".campo1");
    alert(itemClass.value);
    const itemID = document.querySelector("#uno");
    alert(itemID.value);

}

// Seleccionar al elemento del DOM con querySelectorAll ya sea por .class o por id
function forQuerySelectorALL() {
    const items = document.querySelectorAll(".campo1");
    console.log(items);
    [...items].forEach(element => {
        alert(element.value);
    });

}


document.querySelector("#btnBotonX").addEventListener("click", function () {
    const container = document.querySelector("#container2");
    const secondItem = container.querySelector(".item:nth-child(2)"); // la clase se llama item

    //inserta despúes del segundo elemento
    //const newNode = document.createElement("div");
    //newNode.textContent = "Nuevo elemento";
    //container.insertBefore(newNode, secondItem);

    //remueve el segundo elemeento
    container.removeChild(secondItem);
});