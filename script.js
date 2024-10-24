const contactForm = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    confirmationMessage.classList.remove('hidden');
    confirmationMessage.classList.add('show');

    contactForm.reset();
});

<script>
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    </script>
    <script src="script.js"></script>
