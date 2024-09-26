function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var passwordIcon = document.getElementById('password-icon');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.add('show'); 
    } else {
        passwordInput.type = "password";
        passwordIcon.classList.remove('show');
    }
}