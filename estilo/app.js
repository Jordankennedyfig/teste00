// Seleciona o botão de menu e a lista de links
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Adiciona o evento de clique para alternar o menu
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});