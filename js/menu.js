document.addEventListener("DOMContentLoaded", function () {
    const userButton = document.querySelector(".user-img");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    userButton.addEventListener("click", function (event) {
        dropdownMenu.classList.toggle("show");
        event.stopPropagation();
    });

    window.addEventListener("click", function () {
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        }
    });

    dropdownMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

// PRODUCTOS Menu
const userProductos = document.getElementById('user-productos');
const menuProductos = document.getElementById('menu-productos');

userProductos.addEventListener('mouseover', function() {
    menuProductos.style.display = 'block';
});

userProductos.addEventListener('mouseleave', function() {
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
