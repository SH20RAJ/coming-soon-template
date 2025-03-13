document.addEventListener('DOMContentLoaded', () => {
    const targetDate = '2024-12-31';

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function updateClock() {
        const t = getTimeRemaining(targetDate);

        document.getElementById('days').innerHTML = t.days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = t.hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = t.minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = t.seconds.toString().padStart(2, '0');

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);

    // Email subscription form handling
    const form = document.querySelector('.subscribe-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        // Add your email service integration here
        alert('Thank you for subscribing! We will notify you when we launch.');
        form.reset();
    });
});