

// SELECCION DE ELEMENTOS DEL HTML

// Se extraen los elementos HTML para manejarlos en JS

const titulo = document.getElementById("titulo");

const btnTexto = document.getElementById("btn-texto");

const btnEstilo = document.getElementById("btn-estilo");

const btnAgregar = document.getElementById("btn-agregar");

const btnEliminar = document.getElementById("btn-eliminar");

const btnApi = document.getElementById("btn-api");

const btnQuitar = document.getElementById("btn-quitar-estilo")

const contenedorGafas =
    document.getElementById("contenedor-gafas");

const infoVentana =
    document.getElementById("info-ventana");

const resultadoApi =
    document.getElementById("resultado-api");



// SELECCION MEDIANTE querySelector

// Busca el primer elemento que coincida con el selector

const descripcion =
    document.querySelector(".descripcion");



// SELECCION MEDIANTE querySelectorAll


// Busca TODOS los elementos que coincidan con el selector

const categorias =
    document.querySelectorAll(".categorias li");



// MOSTRAR ELEMENTOS EN CONSOLA

console.log("Titulo:", titulo);

console.log("Descripcion:", descripcion);

console.log("Categorias:", categorias);

console.log("Contenedor de gafas:", contenedorGafas);



// CAMBIO DE TEXTO


btnTexto.addEventListener("click", function () {

    // Aviso para saber que se esta ejecutando el evento

    console.log(
        "btnTexto - Se hizo clic en cambiar texto"
    );


    // Se cambia el texto del titulo

    titulo.textContent =
        "Encuentra las gafas perfectas";


    // Se modifica el texto de la descripcion
    // utilizando HTML

    descripcion.innerHTML =
        "<strong>Calidad, estilo y comodidad</strong> en un solo lugar.";

});


// MODIFICACION DE ESTILOS

/*
    Buena practica:

    classList suele ser mejor para aplicar estilos porque mantiene
    separada la presentacion (CSS) de la logica (JavaScript).

    style es util para cambios puntuales y dinamicos.
*/

btnQuitar.addEventListener("click", function() {

   // titulo.classList.remove("destacado");

    console.log("se quito el destacado ");


    titulo.classList.toggle("destacado");
    


});

btnEstilo.addEventListener("click", function () {

    // Cambio puntual usando style

    // Se cambia el tamano del titulo

    titulo.style.fontSize = "40px";


    // Alternar la clase CSS

    titulo.classList.toggle("destacado");

    console.log(
        "Se alterno la clase destacado"
    );

});



// CREACION DINAMICA DE GAFAS

// Se crea un contador para las gafas

let contadorGafas = 0;


btnAgregar.addEventListener("click", function () {

    // Aumentamos el contador

    contadorGafas++;


    // Se crea un nuevo elemento div

    const nuevaGafa =
        document.createElement("div");


    // Se agrega la clase CSS producto

    nuevaGafa.classList.add("producto");


    // Se agrega el texto

    nuevaGafa.textContent =
        "Gafa nueva #" + contadorGafas;


    // Se agrega la nueva gafa al contenedor

    contenedorGafas.appendChild(nuevaGafa);


    console.log(
        "btnAgregar - Se creo:",
        nuevaGafa
    );


    // Mostramos la estructura jerarquica

    mostrarJerarquiaDOM();

});



// ELIMINAR ULTIMA GAFA


btnEliminar.addEventListener("click", function () {

    // Se obtiene el ultimo elemento del contenedor

    const ultimaGafa =
        contenedorGafas.lastElementChild;


    // Comprobamos si existe una gafa

    if (ultimaGafa) {

        // Se elimina la ultima gafa

        ultimaGafa.remove();

        console.log(
            "Se elimino la ultima gafa"
        );

    } else {

        console.log(
            "No hay gafas para eliminar"
        );

    }

});


btnApi.addEventListener("click", function () {
    consultarApi();

});

// NAVEGACION JERARQUICA DEL DOM


function mostrarJerarquiaDOM() {

    // Se muestra el nodo padre

    console.log(
        "Padre:",
        contenedorGafas.parentNode
    );


    // Se muestran todos los elementos hijos

    console.log(
        "Hijos:",
        contenedorGafas.children
    );


    // Se muestra el primer elemento hijo

    console.log(
        "Primer hijo:",
        contenedorGafas.firstElementChild
    );


    // Se muestra el ultimo elemento hijo

    console.log(
        "Ultimo hijo:",
        contenedorGafas.lastElementChild
    );

}



// OBJETO WINDOW


function actualizarInformacionVentana() {

    // Obtenemos el ancho actual de la ventana

    const ancho = window.innerWidth;


    // Mostramos el ancho en el HTML

    infoVentana.textContent =
        "Ancho de la ventana: " + ancho + " px";

}



// Ejecutamos la funcion al cargar la pagina

actualizarInformacionVentana();


// Actualizamos la informacion cuando cambia
// el tamano de la ventana

window.addEventListener(
    "resize",
    actualizarInformacionVentana
);


// Mostramos la posicion vertical de la pagina

console.log(
    "Posicion vertical:",
    window.scrollY
);


// Mostramos la URL actual

console.log(
    "URL actual:",
    window.location.href
);



//API


///se solicita la apia con su url 
// Nos entraga solamente el Response 


function consultarApi() {

    fetch("https://dummyjson.com/products/category/sunglasses")

        // Se recibe una respuesta
        .then(function (respuesta) {

            // Se convierte la respuesta en JSON
            return respuesta.json();
        })

        // Se reciben los datos de la respuesta en JSON
        .then(function (datos) {

            console.log("Datos recibidos de la API:", datos);

            datos.products.forEach(function (producto) {

                // Se crea la tarjeta
                const tarjeta = document.createElement("div");

                // Se agrega una clase CSS
                tarjeta.classList.add("producto-api");

                // Se agrega la informacion del producto
                tarjeta.innerHTML =
                    "<h3>" + producto.title + "</h3>" +
                    "<p>Precio: $" + producto.price + "</p>" +
                    "<p>" + producto.description + "</p>";

                // Se crea la imagen
                const imagen = document.createElement("img");

                // Se obtiene la imagen desde la API
                imagen.src = producto.thumbnail;

                // Se agrega texto alternativo
                imagen.alt = producto.title;

                // Se agrega la imagen a la tarjeta
                tarjeta.appendChild(imagen);

                // Se agrega la tarjeta al contenedor
                resultadoApi.appendChild(tarjeta);
            });
        })

        // Se manejan posibles errores
        .catch(function (error) {

            console.error(
                "Error al consultar la API:",
                error
            );

            resultadoApi.textContent =
                "No se pudieron cargar las gafas.";
        });
}


