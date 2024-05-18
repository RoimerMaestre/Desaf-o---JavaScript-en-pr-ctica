//3. Dar la funcionalidad de sumar y restar a la calculadora, mostrando el resultado en el elemento con clase resultado. Si el resultado de la resta entrega un número negativo debes mostrar un 0.
// Seleccionamos los dos inputs que se sumarán o restarán mediante un getElementById.
const firstNumber = document.getElementById("valor1");
const secondNumber = document.getElementById("valor2");
const firstButton = document.getElementById("btn-sumar"); 
const secondButton = document.getElementById("btn-restar");

// Constante del span donde se mostrará el resultado
const resultado = document.getElementById("resultado");

// Proceso de validación
// Se crea una variable con el valor que usaremos, en este caso solo aceptará números decimales positivos
const validatorRegex = /^\d+(\.\d+)?$/;

function validar(a, b) {
    let validacion1 = validatorRegex.test(a);
    let validacion2 = validatorRegex.test(b);
    if (!validacion1 || !validacion2) {
        alert("Ingrese números válidos");
        return false; // Devolver false si los valores no son válidos
    }
    return true; // Devolver true si los valores son válidos
}

// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Event listener para el botón de suma
firstButton.addEventListener("click", function(event) {
    event.preventDefault();

    let primerNumber = parseFloat(firstNumber.value);
    let segundoNumber = parseFloat(secondNumber.value);
    
    // Validar los números
    if (!validar(primerNumber, segundoNumber)) {
        return; // Salir de la función si los números no son válidos
    }

    let resultadoSuma = sumar(primerNumber, segundoNumber);

    // Condicional que dice si el resultado es menor que 0, se asigna 0 al resultado
    if (resultadoSuma < 0) {
        resultadoSuma = 0;
    }

    // Mostrar el resultado en el span
    resultado.innerHTML = resultadoSuma;
    console.log(resultadoSuma);
});

// Event listener para el botón de resta
secondButton.addEventListener("click", function(event) {
    event.preventDefault();

    let primerNumber = parseFloat(firstNumber.value);
    let segundoNumber = parseFloat(secondNumber.value);

    // Validar los números
    if (!validar(primerNumber, segundoNumber)) {
        return; // Salir de la función si los números no son válidos
    }

    let resultadoResta = restar(primerNumber, segundoNumber);

    // Condicional que dice si el resultado es menor que 0, se asigna 0 al resultado
    if (resultadoResta < 0) {
        resultadoResta = 0;
    }

    // Mostrar el resultado en el span
    resultado.innerHTML = resultadoResta;
    console.log(resultadoResta);
});











