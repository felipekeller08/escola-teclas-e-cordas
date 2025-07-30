// Music notes animation
    function createMusicNotes() {
      const notes = ['♪', '♩', '♫', '♬', '♭', '♮'];
      const container = document.getElementById('musicNotes');
      
      for (let i = 0; i < 20; i++) {
        const note = document.createElement('div');
        note.className = 'music-note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = `${Math.random() * 100}vw`;
        note.style.fontSize = `${Math.random() * 80 + 10}px`;
        note.style.animationDuration = `${Math.random() * 10 + 10}s`;
        note.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(note);
      }
    }

    // Scroll reveal animation
    function scrollReveal() {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    }

    // Back to top button
    function backToTop() {
      const backToTopButton = document.getElementById('backToTop');
      
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove('opacity-0', 'invisible');
          backToTopButton.classList.add('opacity-100', 'visible');
        } else {
          backToTopButton.classList.remove('opacity-100', 'visible');
          backToTopButton.classList.add('opacity-0', 'invisible');
        }
      });
    }

    // Mobile menu toggle
function mobileMenu() {
  const menuButton = document.getElementById('mobileMenuButton');
  const closeButton = document.getElementById('closeMobileMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuButton && closeButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });

    closeButton.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });

    // Fecha o menu ao clicar em qualquer link
    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

    // Initialize functions when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
      createMusicNotes();
      backToTop();
      mobileMenu();
      
      window.addEventListener('scroll', scrollReveal);
      
      // Initial check for elements already in view
      scrollReveal();
    });
      function abrirMural() {
    document.getElementById("muralFotos").classList.remove("hidden");
  }

  function fecharMural() {
    document.getElementById("muralFotos").classList.add("hidden");
  }
  const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');

        tabContents.forEach(content => {
          content.classList.add('hidden');
        });

        document.getElementById(target).classList.remove('hidden');

        tabButtons.forEach(btn => btn.classList.remove('bg-white', 'text-primary'));
        button.classList.add('bg-white', 'text-primary');
      });
    });

    // Ativa aba padrão (Piano)
    document.querySelector('[data-tab="piano"]').click();
    function filtrar(categoria, botaoAtivo) {
  // Filtragem das imagens
  const todas = document.querySelectorAll(".foto");
  todas.forEach(foto => {
    if (categoria === "todos" || foto.classList.contains(categoria)) {
      foto.classList.remove("hidden");
    } else {
      foto.classList.add("hidden");
    }
  });

  // Estilização dos botões
  document.querySelectorAll(".btn-aba").forEach(btn => {
    btn.classList.remove("bg-white", "text-black");
    btn.classList.add("bg-red-500", "text-white");
  });

  botaoAtivo.classList.add("bg-white", "text-black");
  botaoAtivo.classList.remove("bg-red-500", "text-white");
}