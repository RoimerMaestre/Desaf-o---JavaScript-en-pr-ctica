//VARIABLES PARA EL FORMULARIO
const formulario = document.getElementById("formulario");
const names = document.getElementById("nombre");
const asunt = document.getElementById("asunto");
const mesage = document.getElementById("mensaje");
const mensajeEnviado = document.getElementById("resultado");
//VARIABLE PARA VALIDAR "REGEX"
const validarDatosUsuario = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/;

//ERRORES DE PARRAFO
const errorNombre = document.getElementById("errorNombre");
const errorAsunto = document.getElementById("errorAsunto");
const errorMensaje = document.getElementById("errorMensaje");

formulario.addEventListener("submit" , function(evento){

    evento.preventDefault();

    const nombre = names.value;
    const asunto = asunt.value;
    const mensaje = mesage.value;

    validatorUser(nombre, asunto , mensaje);
});

function validatorUser(nombre, asunto, mensaje) {

  const nameValido = validarDatosUsuario.test(nombre);
  const asuntoValido = validarDatosUsuario.test(asunto);
  const mensajeValido = validarDatosUsuario.test(mensaje);
  
  clearErrors();

  if (!nameValido) {
    //colocar una funcion
   errorNombre.innerHTML = "NO ESCRIBIO NADA O ESTA MAL ESCRITO";
  }

  if (!asuntoValido) {
    //colocar una funcion
    errorAsunto.innerHTML = "NO ESCRIBIO NADA O ESTA MAL ESCRITO";
  }
  if (!mensajeValido) {
    //colocar una funcion
    errorMensaje.innerHTML = "NO ESCRIBIO NADA O ESTA MAL ESCRITO";
  }

  if (nameValido && asuntoValido && mensajeValido) {
    clearErrors()
    mensajeEnviado.innerHTML = "mensaje enviado correctamente";
}}

function clearErrors() {
    /* Limpiamos los errores de los span*/
    errorNombre.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";
  }


