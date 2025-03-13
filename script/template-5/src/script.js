document.addEventListener('DOMContentLoaded', () => {
    // Set the launch date (1 month from now)
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

    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Handle form submission
    const form = document.getElementById('subscribe-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        // Here you would typically send the email to your server
        alert(`Thank you for subscribing with: ${email}`);
        form.reset();
    });

    // Add manual rotation control
    let isDragging = false;
    let startX, startY;
    let rotationX = 0, rotationY = 0;
    const cube = document.querySelector('.cube');

    document.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        cube.style.animation = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        rotationY += deltaX * 0.5;
        rotationX -= deltaY * 0.5;

        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        // Resume animation after 2 seconds of no interaction
        setTimeout(() => {
            cube.style.animation = 'rotate 20s infinite linear';
        }, 2000);
    });

    // Add touch support
    document.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        cube.style.animation = 'none';
    });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;

        const deltaX = e.touches[0].clientX - startX;
        const deltaY = e.touches[0].clientY - startY;

        rotationY += deltaX * 0.5;
        rotationX -= deltaY * 0.5;

        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
        setTimeout(() => {
            cube.style.animation = 'rotate 20s infinite linear';
        }, 2000);
    });
});