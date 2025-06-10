// Controle do carrossel
let currentSlide = 0;
let cart = []; // cart: Array que armazena todos os itens do carrinho
const slides = document.querySelectorAll('.flower-card');
const totalSlides = slides.length; // currentSlide: Controla qual slide está sendo exibido atualmente
const slidesToShow = 3; // slidesToShow: Define quantos cards são mostrados por vez (3 cards)

// Habilita/desabilita os botões de navegação quando chegam no início ou fim
function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const slideWidth = 340; // Largura de cada slide
    const offset = -currentSlide * slideWidth;
    carousel.style.transform = `translateX(${offset}px)`;

    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide >=totalSlides - slidesToShow;
}

// Verifica limites para não passar dos slides disponíveis
function moveCarousel(direction) {
    if(direction === 1 && currentSlide < totalSlides - slidesToShow) {
        currentSlide++;
    } else if(direction === -1 && currentSlide > 0) {
        currentSlide--;
    }
    updateCarousel();
}

//