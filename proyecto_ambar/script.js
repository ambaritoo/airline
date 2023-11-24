document.getElementById('contactForm').addEventListener('submit', function(event) {
   
    document.getElementById('nombreError').innerText = '';
    document.getElementById('emailError').innerText = '';

    var nombre = document.getElementById('nombre').value;
    if (nombre.length < 3) {
        document.getElementById('nombreError').innerText = 'El nombre debe tener al menos 3 caracteres.';
        event.preventDefault(); 
    }

    var email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        document.getElementById('emailError').innerText = 'Ingrese un correo electrónico válido.';
        event.preventDefault(); 
    }
});


function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

