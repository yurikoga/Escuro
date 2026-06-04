const list = document.querySelectorAll('.icon-item');

list.forEach((item) => {
    // Aplica a cor definida no HTML ao passar o mouse
    item.addEventListener('mouseenter', function() {
        const color = this.getAttribute('data-color');
        const icon = this.querySelector('a');
        icon.style.color = color;
        // Brilho externo (glow) opcional para combinar com o ícone
        icon.style.filter = `drop-shadow(0 0 10px ${color})`;
    });

    // Remove a cor ao tirar o mouse
    item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('a');
        icon.style.color = '#555';
        icon.style.filter = 'none';
        this.classList.remove('active');
    });

    // Efeito de "pressionar" o botão
    item.addEventListener('mousedown', function() {
        this.classList.add('active');
    });

    item.addEventListener('mouseup', function() {
        this.classList.remove('active');
    });
});
