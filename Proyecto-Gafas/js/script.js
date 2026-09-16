

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



