const decrementarBtn = document.getElementById('decrementar');
const incrementarBtn = document.getElementById('incrementar');
const cantidadInput = document.getElementById('cantidad');

// Convertir el valor inicial a número
let cantidad = parseInt(cantidadInput.value, 10);

// Función para incrementar la cantidad
incrementarBtn.addEventListener('click', () => {
    cantidad++;
    cantidadInput.value = cantidad;
});

// Función para decrementar la cantidad
decrementarBtn.addEventListener('click', () => {
    if (cantidad > 1) { // Evitar números negativos o cero
        cantidad--;
        cantidadInput.value = cantidad;
    }
});