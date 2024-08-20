document.getElementById('form-inicio-sesion').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('inicio-sesion-email').value;
    const password = document.getElementById('inicio-sesion-password').value;

    // Validar si el usuario está registrado
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.email === email && usuario.password === password);

    if (usuarioEncontrado) {
        alert('Inicio de sesión exitoso');
        // Aquí podrías redirigir al usuario a la tienda
        window.location.href = 'index.html';
    } else {
        alert('Correo o contraseña incorrectos');
    }
});
