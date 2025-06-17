
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
