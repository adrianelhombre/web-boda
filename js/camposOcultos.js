    const radios = document.querySelectorAll('input[name="asistencia"]');
    const campoAcompanantes = document.getElementById('campo-acompanantes');
    const campoAlergias = document.getElementById('campo-alergias');
    const campoCancelacion = document.getElementById('campo-cancelacion');

    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        if (radio.value === 'sí') {
          campoAcompanantes.classList.remove('oculto');
          campoAlergias.classList.remove('oculto');
          campoCancelacion.classList.add('oculto')
        } else {
          campoAcompanantes.classList.add('oculto');
          campoAlergias.classList.add('oculto');
          campoCancelacion.classList.remove('oculto')

          // Limpiar valores al ocultar
          inputAcompanantes.value = 0;
          inputAlergias.value = '';
        }
      });
    });