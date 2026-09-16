
// SELECCION DE ELEMENTOS DEL HTML

// Se extraen los elementos HTML para manejarlos en JS

const titulo = document.getElementById("titulo");

const btnTexto = document.getElementById("btn-texto");

const btnEstilo = document.getElementById("btn-estilo");

const btnAgregar = document.getElementById("btn-agregar");

const btnEliminar = document.getElementById("btn-eliminar");

const btnApi = document.getElementById("btn-api");

const contenedorGafas = document.getElementById("contenedor-gafas");

const infoVentana = document.getElementById("info-ventana");

const resultadoApi = document.getElementById("resultado-api");


// SELECCION MEDIANTE querySelector


// Busca el primer elemento que coincida con el selector

const descripcion = document.querySelector(".descripcion");



// SELECCION MEDIANTE querySelectorAll


// Busca TODOS los elementos que coincidan con el selector

const categorias = document.querySelectorAll(".categorias li");


 
// MOSTRAR ELEMENTOS EN CONSOLA


console.log("Titulo:", titulo);

console.log("Descripcion:", descripcion);

console.log("Categorias:", categorias);

console.log("Contenedor de gafas:", contenedorGafas);



// CAMBIO DE TEXTO

btnTexto.addEventListener("click", function () {

    // Aviso para saber que se esta ejecutando el evento

    console.log("btnTexto - Se hizo clic en cambiar texto");


    // Se cambia el texto del titulo

    titulo.textContent = "Encuentra las gafas perfectas";


    // Se modifica el texto de la descripcion utilizando HTML

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


btnEstilo.addEventListener("click", function () {

    // Cambio puntual usando style

    // Se cambia el tamano del titulo

    titulo.style.fontSize = "40px";


    // Alternar la clase CSS

    titulo.classList.toggle("destacado");

    console.log("Se alterno la clase destacado");


    //titulo.classList.remove("destacado");

    //titulo.classList.toggle("destacado");

});



// CREACION DINAMICA DE GAFAS

// Se crea un contador para las gafas

let contadorGafas = 0;


btnAgregar.addEventListener("click", function () {

    // Aumentamos el contador

    contadorGafas++;


    // Se crea un nuevo elemento div

    const nuevaGafa = document.createElement("div");


    // Se agrega la clase CSS producto

    nuevaGafa.classList.add("producto");


    // Se agrega el texto

    nuevaGafa.textContent =
        "Gafa nueva #" + contadorGafas;


    // Se agrega la nueva gafa al contenedor

    contenedorGafas.appendChild(nuevaGafa);


    console.log( "btnAgregar - Se creo:", nuevaGafa);

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

        console.log("Se elimino la ultima gafa");

    } else {

        console.log("No hay gafas para eliminar");

    }

});

