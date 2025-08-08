document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const nombre = encodeURIComponent(form.nombre.value);
  const asistencia = encodeURIComponent(form.asistencia.value);
  const acompanantes = encodeURIComponent(form.acompanantes.value);
  const alergias = encodeURIComponent(form.alergias.value);

  // Construimos la URL con parámetros
  const redirectURL = `/gracias.html?nombre=${nombre}&asistencia=${asistencia}&acompanantes=${acompanantes}&alergias=${alergias}`;

  // Enviamos a Netlify + redirigimos con los datos
  form.submit(); // Esto envía el formulario a Netlify
  setTimeout(() => {
    window.location.href = redirectURL;
  }, 500); // pequeño delay para asegurar que envía primero
});
