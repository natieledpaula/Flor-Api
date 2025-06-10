// Controle do carrossel
let currentSlide = 0;
let cart = []; // cart: Array que armazena todos os itens do carrinho
const slides = document.querySelectorAll('.flower-card');
const totalSlides = slides.length; // currentSlide: Controla qual slide está sendo exibido atualmente
const slidesToShow = 3; // slidesToShow: Define quantos cards são mostrados por vez (3 cards)

// Controle do Carrossel
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

// Sistema de Carrinho de Compras
// Verifica se o item já existe no carrinho
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
    showNotification();
}

// Remove completamente um item do carrinho
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

// Atualização da Interface do Carrinho
// Se carrinho vazio: mostra mensagem "carrinho vazio"
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');

    if(cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666;">Seu carrinho está vazio</p>';
        totalPrice.textContent = '0,00';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        html += `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong> <br>
                <small>Quantidade: ${item.quantity} | R$ ${item.price.toFixed(2)} cada</small>
            </div>
            <div>
                <strong>R$ ${itemTotal.toFixed(2)}</strong>
                <button onclick="removeFromCart('${item.name}')" style="margin-left: 10px; background: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Remover</button>
            </div>
        </div>
        `;
    });

    cartItems.innerHTML = html;
    totalPrice.textContent = total.toFixed(2).replace('.', ',');
}

// Sistema de Notificações
// Exibe notificação "Item adicionado ao carrinho!"
function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show'); // Adiciona a classe "show" para exibir a notificação = 'block';
    setTimeout(() => {
        notification.classList.remove('show'); // Remove a classe "show" para esconder a notificação = 'none';
    }, 3000);
}