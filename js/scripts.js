/**
 * Seleccionar contenido
*/

// querySelector
const heading = document.querySelector('.header__texto h2'); // retorna 0 o 1 elementos
console.log(heading.textContent)


// querySelectorAll
// Se comportan como un arreglo para seleccionar uno en especifico
// hay que indicarle como un array
const enlances = document.querySelectorAll('.navegacion a'); // retorno 0 o todos los elementos que sean parecido al queryselectorall
enlances[0].textContent = 'Cambiando la opción Nosotros'


// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A');

// Agregar href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar el texto
nuevoEnlace.textContent = 'Nuevo Enlace';
// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');

navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);



// Eventos

// console.log(1);

// window.addEventListener('load', function() { // load espera a que JS y los archivos que dependen del HTML estén listos incluye imagenes y hojas de estilos
//     console.log(2);
// })

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){ // Solo espera por el HTML, no espera CSS o imagenes
//     console.log(4);
// })

// console.log(5);


// Seleccionar elementos y asociarles un evento


// const botonEnviar = document.querySelector('.boton--primario');
// botonEnviar.addEventListener('click', function(evento) {

//     // hace que al apretar un botón la página no recargue automaticamente
//     evento.preventDefault();
    
//     console.log('Enviando formulario');
// });
// Evento de los inputs y textarea

const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de submit
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar el formulario
    
    const {nombre, email, mensaje} = datos;
    
    if (nombre === '' || email === '' || mensaje === '') {

        mostrarAlerta('Todos los campos son obligatorios', 'error');

        return; // corta la ejecución del código
    }

    // Enviar el formulario

    mostrarAlerta('Formulario enviado correctamente')
    
});

// Toma los datos de un formulario para agregarlos al objeto que 
// se desea, generalmente se ocupa para formularios.
function leerTexto(e) {
    // console.log(e.target.value)
    datos[e.target.id] = e.target.value;

    //console.log(datos);
}

// Refactorizando las funciones

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error){
        alerta.classList.add('error')
    }else{
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta);

    // Mensaje desaparece después de 5 seg

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

// Muestra error en pantalla

// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild(error);

//     // Desaparecer después de 5 segundos

//     setTimeout(() => {
//         error.remove();
//     }, 5000);
// }


// // Muestra formulario enviado

// function enviarFormulario(mensaje) {
//     const valido = document.createElement(alert(mensaje));
//     valido.textContent = mensaje;
//     valido.classList.add('correcto');
//     /** */
//     formulario.appendChild(valido);


    // Desaparecer mensaje de correcto después de 5 segundos

//     setTimeout(() => {
//         valido.remove();
//     }, 5000);
// }


