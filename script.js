// script.js

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200); // Delay para animação em cascata
    });
});

// Abre o lightbox com a imagem selecionada
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
  
    lightboxImage.src = imageSrc; // Define a imagem do lightbox
    lightbox.style.display = "flex"; // Exibe o lightbox
  }
  
  // Fecha o lightbox
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Esconde o lightbox
  }
  
