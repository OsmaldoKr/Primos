// Función para validar el formulario de registro
function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (!email.includes("@gmail.com")) {
    alert("El correo debe ser de tipo @gmail.com");
    return false; // Detener el envío del formulario
  }

  if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres");
    return false; // Detener el envío del formulario
  }

  // Mostrar el mensaje de bienvenida para el registro
  showWelcomeMessage("registro");

  // Redireccionar a "html/inicio.html" después de 9 segundos (9000 milisegundos)
  setTimeout(function() {
    window.location.href = "html/inicio.html";
  }, 9000);

  return true; // Permitir el envío del formulario después de completar la validación
}

// Función para validar el formulario de inicio de sesión y mostrar el mensaje de bienvenida
function login() {
  var loginEmail = document.getElementById("loginEmail").value;
  var loginPassword = document.getElementById("loginPassword").value;

  // Aquí deberías realizar la validación del inicio de sesión con el servidor
  // Por simplicidad, aquí asumiremos que el inicio de sesión es exitoso siempre
  if (loginEmail === "usuario@gmail.com" && loginPassword === "contrasena") {
    // Mostrar el mensaje de bienvenida para el inicio de sesión
    showWelcomeMessage("inicio");

    // Redireccionar a "html/inicio.html" después de 9 segundos (9000 milisegundos)
    setTimeout(function() {
      window.location.href = "html/inicio.html";
    }, 9000);
  } else {
    alert("Credenciales de inicio de sesión inválidas");
  }
}
