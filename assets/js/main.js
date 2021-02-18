const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.style.display = 'block';
})

close.addEventListener('click', () => {
    menu.style.display = 'none';
})