document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Paramos el envío normal para controlar
  const form = e.target;
  const datos = {
    nombre: form.nombre.value,
    asistencia: form.asistencia.value,
    acompanantes: form.acompanantes ? form.acompanantes.value : "0",
    alergias: form.alergias ? form.alergias.value : "Ninguna"
  };
  
  localStorage.setItem("confirmacionBoda", JSON.stringify(datos));

  // Enviar el formulario manualmente a Netlify:
  form.submit();
});
