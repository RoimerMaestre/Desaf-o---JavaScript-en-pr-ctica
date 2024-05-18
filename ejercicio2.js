jercicio:

    // Seleccionar el cuadro principal
    var caja = document.getElementById('caja');

    // Función para cambiar el color del cuadro principal
    function cambiarColor(event) {
        var boton = event.target;
        var color = boton.style.backgroundColor;
        caja.style.backgroundColor = color;
    }

    // Seleccionar los botones y agregar event listeners
    var boton1 = document.getElementById('btn-1');
    var boton2 = document.getElementById('btn-2');
    var boton3 = document.getElementById('btn-3');
    var boton4 = document.getElementById('btn-4');
    var boton5 = document.getElementById('btn-5');
    var boton6 = document.getElementById('btn-6');

    boton1.addEventListener('click', cambiarColor);
    boton2.addEventListener('click', cambiarColor);
    boton3.addEventListener('click', cambiarColor);
    boton4.addEventListener('click', cambiarColor);
    boton5.addEventListener('click', cambiarColor);
    boton6.addEventListener('click', cambiarColor);