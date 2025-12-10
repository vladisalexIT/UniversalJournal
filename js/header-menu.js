const burgerButton = document.querySelector('.nav-burger-button');
const elementsToToggle = document.querySelectorAll('.nav-burger-button, .overlay, .header__nav');
const overlay = document.querySelector('.overlay');
if (burgerButton && elementsToToggle.length && overlay) {
    const toggleAll = () => elementsToToggle.forEach(el => el.classList.toggle('active'))
    burgerButton.addEventListener('click', toggleAll);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) toggleAll();
    })
}