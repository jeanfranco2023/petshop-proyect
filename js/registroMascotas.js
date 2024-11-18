document.addEventListener('DOMContentLoaded', function () {
    // Capturamos el formulario
    const form = document.querySelector('.mascota-form');

    // Manejador del evento submit
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario para evitar recarga de la página

        // Captura de los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const raza = document.getElementById('raza').value;
        const edad = document.getElementById('edad').value;
        const lactancia = document.getElementById('lactancia').value;
        const pelaje = document.getElementById('pelaje').value;
        const telefono = document.getElementById('telefono').value;

        // Validación: Si algún campo está vacío, mostramos un mensaje de alerta y detenemos el envío
        if (!nombre || !raza || !edad || !lactancia || !pelaje || !telefono) {
            alert("Por favor, complete todos los campos.");
            return; // No enviar el formulario si hay campos vacíos
        }

        // Crear el mensaje de alerta con los datos capturados
        const mensaje = `
            Nombre de la mascota: ${nombre}
            Raza: ${raza}
            Edad: ${edad}
            Lactancia: ${lactancia}
            Pelaje: ${pelaje}
            Teléfono de contacto: ${telefono}
        `;

        // Mostrar los datos en una alerta
        alert(mensaje);

        // Limpiar el formulario después de mostrar los datos
        form.reset();
    });
});
