  const datosStr = localStorage.getItem("confirmacionBoda");
  if (datosStr) {
    const datos = JSON.parse(datosStr);

    document.getElementById("resumen").innerHTML = `
      <p><strong>Nombre:</strong> ${datos.nombre}</p>
      <p><strong>Asistencia:</strong> ${datos.asistencia}</p>
      ${
        datos.asistencia === "si"
          ? `
            <p><strong>Acompañantes:</strong> ${datos.acompanantes}</p>
            <p><strong>Alergias:</strong> ${datos.alergias}</p>
          `
          : ""
      }
    `;
  } else {
    document.getElementById("resumen").textContent = "No se encontraron datos de confirmación.";
  }