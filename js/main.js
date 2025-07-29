
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



    

  let player;
  let fallbackTimeout;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('live-frame', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    // Esperamos 10 segundos. Si no comienza a reproducir, mostramos el fallback
    fallbackTimeout = setTimeout(() => {
      const liveFrame = document.getElementById("live-frame");
      const fallbackframe = document.getElementById("fallback-video");

      
      liveFrame.style.display = "none";
      fallbackframe.style.display = "block";
      fallbackframe.play();
    }, 10000);

    
  }

  function onPlayerStateChange(event) {
    // Estado 1 = reproduciendo (está en vivo o tiene contenido)
    if (event.data === YT.PlayerState.PLAYING) {
      clearTimeout(fallbackTimeout);
    }
  }




