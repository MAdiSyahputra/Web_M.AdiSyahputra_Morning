const contactForm = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    confirmationMessage.classList.remove('hidden');
    confirmationMessage.classList.add('show');

    contactForm.reset();
});
