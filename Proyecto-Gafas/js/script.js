

// se abtrae los HTML para manerjarlos en js
const titulo = document.getElementByid("titulo");
const btnTexto = document.getElementByid("btn-texto");
const btnEstilo = document.getElementByid("btn-estilo");
const btnAgrgar = document.getElementByid("btn-agregar");
const btnEliminar = document.getElementByid("btn-eliminar");
const btnApi = document.getElementByid("btn-api");

const contenedorGafas = document.getElementById("contenedor-gafas");
const infoVentana = document.getElementById("info-ventana");
const resultadoApi = document.getElementById("resultado-api");

// Seleccion mediante querySelector y eso es Busca el primer elemento que coincida con el texto
const descripcion = document.querySelector(".descripcion");



// Seleccion mediante querySelectorAll y eso es Buscar TODOS los elementos que coincidan
const categorias = document.querySelectorAll(".categorias li");


// se muetar lo elemento de consola paar 
console.log("Titulo:", titulo); 
console.log("Descripcion:", descripcion);
console.log("Categorias:", categorias);
console.log("Contenedor de gafas:", contenedorGafas);


btnTexto.addEventLIstener("click", function () {
    
    //se hixo un aviso en termnart paar saber que se esta haciendo
    console.log("btnTexto - Se hizo clic en cambiar texto");


    // se cambia el texto del titulo 
    titulo.textContent = " Encuentra las gafas perfectas";

    //se modifica a negrita el texto de deccribcion 
    descripcion.innerHTML = "<strong>Calidad, estilo y comodidad</strong> en un solo lugar.";

});



//modificacion de estilos 

//se utliza el boton estilo (btnEtilo)

//NOTA 
// Buena practica:
// classList suele ser mejor para aplicar estilos porque mantiene
// separada la presentacion (CSS) de la logica (JavaScript).
// style es util para cambios puntuales y dinamicos.


btnEstilo.addEventLIstener("click", function(){


    // Cambio puntual usando style
    //se cambia el tamnio 
    titulo.style.frontSize = "40px";

    

    // Manejo de una clase CSS
    // se agrago destacado la lista de titulo 
    titulo.classList.add("destacado");

    console.log("se agrgo la clase destacando");

});


btnEstilo.addEventLIstener("click", function(){


    // Eliminar la clase
    // se elemina destacado la lista del titulo 
    titulo.classList.remove("destacado");

    console.log("se saco la clase destacado");

});


btnEstilo.addEventLIstener("click", function(){

    // Alternar la clase
    titulo.classList.toggle("destacado");

    console.log("se alterna  la clase destacado");

});

//CRUD DE GAFAS


//Crear gafas dinamicamente

//se crea una lista para almacenar echas gafas 
let contanedorGafas;

// se crea una conatador para las gafas 
let contadorGafas = 0; 


btnAgrgar.addEventLIstener("click", function() {

    contadorGafas ++;

    const nuevaGafa = cocument.createElemnt("div");

    nuevaGafa.classList.add("producto");

    nuevaGafa.textContent = 
        " gafa nueva #" + contadorGafas;

    contanedorGafas.appendChild(nuevaGafa);

    console.log("btn-Agrgar - Se creo:", nuevaGafa);

});

// se elimin a ell ultimo de la lista 
btnEliminar.addEventLIstener("click", function(){

    const ultimoGafa = contenedorGafas.lasElementChild;


    if(ultimoGafa){

        ultimoGafa.remove();

        console.log("se elmini ka ultima gafa");

    } else {

        console.log("no hay gafas para eleminar")
    }

} );
