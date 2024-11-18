document.addEventListener('DOMContentLoaded', () => {
    // Capturamos el formulario
    const formularioRecomendaciones = document.querySelector('form');

    // Manejador del evento submit
    formularioRecomendaciones.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir la recarga de la página

        // Captura de los datos del formulario
        const nombre = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('phone').value.trim();
        const dni = document.getElementById('dni').value.trim();
        const tipoRecomendacion = document.querySelector('input[name="recommendation-type"]:checked');
        const recomendacion = document.getElementById('TXArecomendacion').value.trim();

        // Validación: Verificamos que todos los campos estén llenos
        if (!nombre || !email || !telefono || !dni || !recomendacion || !tipoRecomendacion) {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        // Validación adicional (email y teléfono)
        if (!validateEmail(email)) {
            alert("Por favor, ingrese un email válido.");
            return;
        }

        if (!validatePhone(telefono)) {
            alert("Por favor, ingrese un número de teléfono válido.");
            return;
        }

        // Crear el mensaje con los datos de la recomendación
        const mensaje = `
            ----------------------------
            Datos del Usuario
            ----------------------------
            Nombre: ${nombre}
            Email: ${email}
            Teléfono: ${telefono}
            DNI: ${dni}

            ----------------------------
            Recomendación
            ----------------------------
            Tipo: ${tipoRecomendacion.value}
            Descripción: ${recomendacion}
        `;

        // Mostrar el mensaje en una ventana emergente
        mostrarVentana(mensaje);

        // Limpiar el formulario después de procesar
        formularioRecomendaciones.reset();
    });

    // Función para validar el formato del email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Función para validar el formato del teléfono
    function validatePhone(phone) {
        const regex = /^[0-9]{9,}$/; // Acepta solo números con al menos 9 dígitos
        return regex.test(phone);
    }

    // Función para mostrar un modal con los datos
    function mostrarVentana(mensaje) {
        // Crear elementos del modal
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.padding = '20px';
        modal.style.backgroundColor = '#fff';
        modal.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        modal.style.zIndex = '1000';
        modal.style.borderRadius = '10px';
        modal.style.maxWidth = '90%';
        modal.style.textAlign = 'left';

        const contenido = document.createElement('pre');
        contenido.textContent = mensaje;
        modal.appendChild(contenido);

        const cerrarBoton = document.createElement('button');
        cerrarBoton.textContent = 'Cerrar';
        cerrarBoton.style.marginTop = '10px';
        cerrarBoton.style.padding = '10px';
        cerrarBoton.style.border = 'none';
        cerrarBoton.style.backgroundColor = '#f44336';
        cerrarBoton.style.color = '#fff';
        cerrarBoton.style.cursor = 'pointer';
        cerrarBoton.style.borderRadius = '5px';
        cerrarBoton.addEventListener('click', () => {
            modal.remove();
            overlay.remove();
        });
        modal.appendChild(cerrarBoton);

        // Agregar overlay de fondo
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '999';
        overlay.addEventListener('click', () => {
            modal.remove();
            overlay.remove();
        });

        // Agregar modal y overlay al DOM
        document.body.appendChild(overlay);
        document.body.appendChild(modal);
    }
});