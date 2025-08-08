const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(form);

  // Guardamos los datos en localStorage para después leerlos en gracias.html
  const datosParaGuardar = {
    nombre: data.get("nombre"),
    asistencia: data.get("asistencia"),
    acompanantes: data.get("acompanantes"),
    alergias: data.get("alergias"),
  };
  localStorage.setItem("confirmacionBoda", JSON.stringify(datosParaGuardar));

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString(),
  })
    .then(() => {
      window.location.href = "views/gracias.html";
    })
    .catch((error) => alert(error));
});
