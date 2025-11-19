// Typing effect
const role = document.querySelector('.role');
const words = ['Frontend Developer', 'Web Enthusiast', 'UI/UX Lover'];
let wordIndex = 0;

function fadeRole() {
    role.style.opacity = 0; // start fade out
    setTimeout(() => {
        role.textContent = words[wordIndex];
        role.style.opacity = 1; // fade in
        wordIndex = (wordIndex + 1) % words.length;
    }, 500); // fade duration
    setTimeout(fadeRole, 2500); // change word every 2.5s
}

fadeRole();

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact form toast notification
const contactForm = document.querySelector('.contact-form form');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default submission
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000); // Hide after 3 seconds

    contactForm.reset(); // Clear form fields
});