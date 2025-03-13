document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const countdownDate = new Date('2024-12-31').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-container').innerHTML = '<h2>We\'re Live!</h2>';
        }
    }
    
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Parallax Effect
    const parallaxContainer = document.querySelector('.parallax-container');
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) / 50;
        mouseY = (e.clientY - window.innerHeight / 2) / 50;
        
        parallaxContainer.style.transform = `rotateY(${mouseX}deg) rotateX(${-mouseY}deg)`;
    });
    
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the form data to your server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! We\'ll get back to you soon.');
        contactForm.reset();
    });
});