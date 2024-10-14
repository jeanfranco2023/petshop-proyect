// Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el botón de usuario (imagen) y el menú desplegable
    const userButton = document.querySelector(".user-img");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Añade un evento de clic al botón de usuario
    userButton.addEventListener("click", function (event) {
        // Alterna la clase 'show' en el menú desplegable para mostrarlo u ocultarlo
        dropdownMenu.classList.toggle("show");
        // Evita que el evento de clic se propague a otros elementos
        event.stopPropagation();
    });

    // Añade un evento de clic a la ventana (documento)
    window.addEventListener("click", function () {
        // Si el menú desplegable está visible, lo oculta removiendo la clase 'show'
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Añade un evento de clic al menú desplegable
    dropdownMenu.addEventListener("click", function (event) {
        // Evita que el evento de clic se propague a otros elementos
        event.stopPropagation();
    });
});




// PRODUCTOS Menu
// Obtiene el elemento con el ID 'user-productos' y lo asigna a la variable userProductos
const userProductos = document.getElementById('user-productos');

// Obtiene el elemento con el ID 'menu-productos' y lo asigna a la variable menuProductos
const menuProductos = document.getElementById('menu-productos');

// Añade un evento de 'mouseover' al elemento userProductos
userProductos.addEventListener('mouseover', function() {
    // Cuando el ratón pasa sobre userProductos, muestra el menú estableciendo su estilo display a 'block'
    menuProductos.style.display = 'block';
});

// Añade un evento de 'mouseleave' al elemento userProductos
userProductos.addEventListener('mouseleave', function() {
    // Cuando el ratón sale de userProductos, oculta el menú estableciendo su estilo display a 'none'
    menuProductos.style.display = 'none';
});





// SERVICIOS Menu
const userServicios = document.getElementById('user-servicios');
const menuServicios = document.getElementById('menu-servicios');

userServicios.addEventListener('mouseover', function() {
    menuServicios.style.display = 'block';
});

userServicios.addEventListener('mouseleave', function() {
    menuServicios.style.display = 'none';
});
