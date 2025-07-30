function startCountdown(targetDate) {
  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdownElement.innerHTML = "¡La cuenta atrás ha terminado!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    function pluralize(value, singular, plural) {
      return value === 1 ? singular : plural;
    }

    countdownElement.innerHTML = `
    <div class="cuadrado">
        <h2 class="num-countdown">${days}</h2>
        <p>${pluralize(days, "día", "días")}</p>
    </div>

    <div class="cuadrado">
        <h2 class="num-countdown">${hours}</h2>
        <p>${pluralize(hours, "hora", "horas")}</p>
    </div>
    
    <div class="cuadrado">
        <h2 class="num-countdown">${minutes}</h2>
        <p>${pluralize(minutes, "minuto", "minutos")}</p>
    </div>

    <div class="cuadrado">
        <h2 class="num-countdown">${seconds}</h2>
        <p>${pluralize(seconds, "segundo", "segundos")}</p>
    </div>
`;
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

const targetDate = new Date("2025-09-26T18:00:00");
startCountdown(targetDate);
