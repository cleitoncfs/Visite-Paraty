// Exibe o botão quando o usuário rola 20px para baixo
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

// Volta para o topo da página quando o botão é clicado
function backToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

// Galeria Lightbox

document.addEventListener('DOMContentLoaded', function () {
    const lightboxLinks = document.querySelectorAll('.lightbox');
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeBtn = document.querySelector('.lightbox-overlay .close');
  
    lightboxLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const imgSrc = this.href;
        lightboxImage.src = imgSrc;
        lightboxOverlay.style.display = 'flex';
      });
    });
  
    closeBtn.addEventListener('click', function () {
      lightboxOverlay.style.display = 'none';
    });
  
    lightboxOverlay.addEventListener('click', function (e) {
      if (e.target !== lightboxImage) {
        lightboxOverlay.style.display = 'none';
      }
    });
  });
  
  
  // Menu Hamburger

  document.addEventListener('DOMContentLoaded', function () {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const nav = document.querySelector('header nav');
  
    menuHamburger.addEventListener('click', function () {
      menuHamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
  });
  