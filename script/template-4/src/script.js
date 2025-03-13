document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        },
        retina_detect: true
    });
    
    // Progress Bar Animation
    const progressFill = document.querySelector('.progress-fill');
    const progressPercent = document.getElementById('progress-percent');
    let progress = 0;
    
    function updateProgress() {
        if (progress < 75) { // Set to your actual progress
            progress += 1;
            progressFill.style.width = `${progress}%`;
            progressPercent.textContent = progress;
            
            if (progress < 75) {
                setTimeout(updateProgress, 50);
            }
        }
    }
    
    setTimeout(updateProgress, 1000);
    
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
    
    // Subscribe Form
    const subscribeForm = document.getElementById('subscribe-form');
    
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        
        // Here you would typically send the email to your server
        console.log('Subscription email:', email);
        
        // Show success message
        alert('Thank you for subscribing! We\'ll keep you updated.');
        subscribeForm.reset();
    });
});