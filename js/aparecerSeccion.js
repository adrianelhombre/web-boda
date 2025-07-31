document.addEventListener("DOMContentLoaded", () => {
  const elementosAnimados = document.querySelectorAll(".aparecer");

  const observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
        } else {
          entrada.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elementosAnimados.forEach((el) => observer.observe(el));
});
