const hamburgerButton = document.querySelector('.hamburger-btn');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navLinks = document.querySelector(".nav-links");

hamburgerButton.addEventListener('click', () => {

// target hamburger button to display navlinks when clicked and turn the button into x-mark
hamburgerBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
        navLinks.style.display = 'block';
        hamburgerButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        hamburgerBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        navLinks.style.display = 'none';
        hamburgerButton.innerHTML = '☰';
        hamburgerBtn.innerHTML = '☰';
    }
})
