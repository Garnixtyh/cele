document.getElementById('formRegistro').addEventListener('submit', async (e) =>
{ e.preventDefault();
const nombre = document.getElementById('nombre').value.trim();
const email = document.getElementById('email').value.trim();
const rol = document.getElementById('rol').value;
const password = document.getElementById('password').value;
// Validación previa
if (!nombre || !email || !rol || !password) {
alert('Por favor, completá todos los campos.');
return;
}
const datos = { nombre, email, rol, password };
try {
const respuesta = await fetch('/registrar', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(datos)
});
if (respuesta.ok) {
alert('¡Registro exitoso!');
} else {
alert('Error al registrar');
}
} catch (error) {
alert('Error de conexión con el servidor');
console.error(error);
}
})