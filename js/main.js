
    // Captura la selección del dropdown
    document.querySelectorAll('.dropdown .submenu a').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        const val = e.target.dataset.value;
        const txt = e.target.textContent;
        console.log(`Seleccionaste ${txt} (value=${val})`);
        // Por ejemplo, redirigir:
        // window.location.href = `/categoria/${val}`;
      });
    });




  
    function startCarousel(selector, interval = 4000) {
      const carousel = document.querySelector(selector);
      const slides = carousel.querySelectorAll('.slide');
      let index = 0;

      setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
      }, interval);
    }

    // Iniciar carruseles
    document.addEventListener('DOMContentLoaded', () => {
      startCarousel('.large-carousel', 6000); // más lento
      startCarousel('.small-carousel:nth-of-type(1)', 4000);
      startCarousel('.small-carousel:nth-of-type(2)', 5000);
    });



    
  document.addEventListener("DOMContentLoaded", function () {
    const liveFrame = document.getElementById("live-frame");
    const fallbackVideo = document.getElementById("fallback-video");

    // Timeout: si en 10 segundos no carga, mostramos el video de respaldo
    const fallbackTimeout = setTimeout(() => {
      liveFrame.style.display = "none";
      fallbackVideo.style.display = "block";
      fallbackVideo.play();
    }, 10000);

    // Si el iframe carga correctamente antes de 10s, no hacemos nada
    liveFrame.onload = () => {
      clearTimeout(fallbackTimeout);
    };
  });


