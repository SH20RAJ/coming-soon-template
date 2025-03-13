document.addEventListener('DOMContentLoaded', () => {
    // Set launch date (1 month from now)
    const launchDate = new Date();
    launchDate.setMonth(launchDate.getMonth() + 1);

    // Update countdown
    function updateCountdown() {
        const currentDate = new Date();
        const difference = launchDate - currentDate;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.querySelector('.days').textContent = days.toString().padStart(2, '0');
        document.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Handle form submission
    const form = document.getElementById('subscribe-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with: ${email}`);
        form.reset();
    });

    // SVG Morphing Animation
    const morph = document.querySelector('.morph');
    let currentPath = 0;
    const paths = [
        'M0,50 Q25,45 50,50 T100,50 V100 H0 Z',
        'M0,50 Q25,55 50,50 T100,50 V100 H0 Z',
        'M0,50 Q25,35 50,50 T100,50 V100 H0 Z'
    ];

    function morphPath() {
        currentPath = (currentPath + 1) % paths.length;
        morph.setAttribute('d', paths[currentPath]);
    }

    // Manual morphing control (optional)
    setInterval(morphPath, 5000);
});