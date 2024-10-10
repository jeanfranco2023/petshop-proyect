document.addEventListener("DOMContentLoaded", function () {
    const userButton = document.querySelector(".user");
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