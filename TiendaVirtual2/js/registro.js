document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('registro-email').value;
    const password = document.getElementById('registro-password').value;
    
    // Validar si el correo ya está registrado
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = usuariosRegistrados.find(usuario => usuario.email === email);

    if (usuarioExistente) {
        alert('El correo electrónico ya está registrado');
    } else {
        // Guardar el nuevo usuario en localStorage
        usuariosRegistrados.push({ email: email, password: password });
        localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
        alert('Registro exitoso');
        window.location.href = 'inicio-sesion.html'; // Redirigir al inicio de sesión
    }
});
