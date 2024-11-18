document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const closeModal = document.getElementById("close-modal");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const nombreCliente = document.getElementById("nombre_cliente").value.trim();
        const tipoServicio = document.getElementById("tipo_servicio").value;
        const nombreMascota = document.getElementById("nombre_mascota")?.value.trim();
        const tipoMascota = document.getElementById("tipo_mascota")?.value;
        const fechaCita = document.getElementById("fecha_cita")?.value;
        const horaCita = document.getElementById("hora_cita")?.value;
        const notas = document.getElementById("notas")?.value.trim();

        if (!nombreCliente || !tipoServicio) {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        modalContent.innerHTML = `
            <h2>Datos del Cliente</h2>
            <p><strong>Nombre del Cliente:</strong> ${nombreCliente}</p>
            <p><strong>Tipo de Servicio:</strong> ${tipoServicio}</p>
            ${nombreMascota ? `<p><strong>Nombre de la Mascota:</strong> ${nombreMascota}</p>` : ""}
            ${tipoMascota ? `<p><strong>Tipo de Mascota:</strong> ${tipoMascota}</p>` : ""}
            ${fechaCita ? `<p><strong>Fecha de Cita:</strong> ${fechaCita}</p>` : ""}
            ${horaCita ? `<p><strong>Hora de Cita:</strong> ${horaCita}</p>` : ""}
            ${notas ? `<p><strong>Notas:</strong> ${notas}</p>` : ""}
        `;
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
