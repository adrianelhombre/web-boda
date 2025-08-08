const params = new URLSearchParams(window.location.search);
const nombre = params.get("nombre");
const asistencia = params.get("asistencia");
const acompanantes = params.get("acompanantes");
const alergias = params.get("alergias");

document.getElementById("resumen").innerHTML = `
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Asistencia:</strong> ${asistencia}</p>
    ${
      asistencia === "si"
        ? `
      <p><strong>Acompañantes:</strong> ${acompanantes}</p>
      <p><strong>Alergias:</strong> ${alergias}</p>
    `
        : ""
    }
    
  `;
