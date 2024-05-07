

// con get
document.querySelector("#ApiFetchGET").addEventListener("click", function () {

    const request = async (url, requestOptions) => {
        const response = await fetch(url, requestOptions);
        if (!response.ok)
            throw new Error("WARN", response.status);
        return await response.json();
    }


    const requestOptions = {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" }
    };


    const url = "https://jsonplaceholder.typicode.com/posts";
    const container = document.getElementById("response");

    (async () => {
        const result = await request(url, requestOptions);
        result.forEach(element => {
            const newDiv = document.createElement("div");
            newDiv.textContent = element.title;
            container.appendChild(newDiv);
            console.log(element.title);
        });


    })();
});






// con POST
document.querySelector("#ApiFetchPOST").addEventListener("click", function () {

    const request = async (url, requestOptions) => {
        const response = await fetch(url, requestOptions);
        if (!response.ok)
            throw new Error("WARN", response.status);
        return await response.json();
    }

    //enviar un dato
    const dataToSend = {
        title: "Curso JavaScript",
        body: "Este es un curso avanzado de JavaScript",
        Id: 666
    }

    //enviar varios datos
    const dataToSend2 = [
        {
            title: "Curso JavaScript",
            body: "Este es un curso avanzado de JavaScript",
            Id: 666
        },
        {
            title: "Curso HTML5",
            body: "Este es un curso avanzado de HTML5",
            Id: 667
        }
    ];

    const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dataToSend2)
    };


    const url = "https://jsonplaceholder.typicode.com/posts";
    const container = document.getElementById("response");

    (async () => {
        const result = await request(url, requestOptions);


        // funciona para uno elemento enviado
        /*
        for (key in result) {
            if (result.hasOwnProperty(key)) {
                console.log(key + ": " + result[key]);
                newDiv.textContent += key + ": " + result[key] + "\n";

            }
        }

        container.appendChild(newDiv);
    */

        // cuando se envian varios elementos devuelve un array
        console.log(result);

        for (let key in result) {
            if (result.hasOwnProperty.call(result, key)) {
                // Verificar si el valor es un objeto y no la clave 'id'
                if (typeof result[key] === 'object' && key !== 'id') {
                    // Imprimir cada propiedad en una línea
                    const newDiv = document.createElement("div");
                    newDiv.className = "border border-danger";
                    newDiv.innerHTML += result[key].Id + "<br>" + result[key].body + "<br>" + result[key].title + "<br>";
                    container.appendChild(newDiv);
                }
            }
        }



    })();



});






//poquemon API

const selectPokemon = document.querySelector("#pokemon");
selectPokemon.addEventListener("change", function () {

    const request = async (url, requestOptions) => {
        const response = await fetch(url, requestOptions);
        if (!response.ok)
            throw new Error("WARN", response.status);
        return await response.json();
    }


    const requestOptions = {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" }
    };


    const url = "https://pokeapi.co/api/v2/pokemon/" + selectPokemon.value;

    const container = document.getElementById("response");
    const selectProperties = document.createElement("select");

    (async () => {
        const result = await request(url, requestOptions);

        console.log(result);

        const divImagen = document.createElement("div");
        divImagen.className = "border border-danger";

        const imagen = document.createElement("img");
        imagen.src = result.sprites.back_shiny;
        const divInformation = document.createElement("div");



        divInformation.textContent = result.name;



        for (let key in result) {
            if (Object.hasOwnProperty.call(result, key)) {
                const option = document.createElement("option");
                option.id = "opcionesPokemon";
                option.value = key;
                option.text = key;
                selectProperties.appendChild(option);
            }
        }


        divImagen.appendChild(imagen);
        divImagen.appendChild(divInformation);
        divImagen.appendChild(selectProperties);




        selectProperties.addEventListener("change", function () {
            const valorPropiedad = selectProperties.value;

            const divPropiedades = document.createElement("div");
            let propiedades = result[valorPropiedad]; //recupero al objeto de cada propiedad

            if (Array.isArray(propiedades)) {
                console.log("Es un array");
                // Aquí puedes hacer algo con el array, como imprimir sus elementos
                propiedades.forEach(element => {
                    console.log(element);
                    divPropiedades.textContent += element;
                });
            } else {
                console.log("No es un array");
                // Aquí puedes hacer algo con el valor de la propiedad
                for (const key in propiedades) {
                    if (propiedades.hasOwnProperty.call(propiedades, key)) {
                        const element = propiedades[key];
                        console.log(element);
                        divPropiedades.innerHTML += element + "<br>";
                    }
                }
            }
            divImagen.appendChild(divPropiedades);

        });


        container.appendChild(divImagen);

    })();
});
