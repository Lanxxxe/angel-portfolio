document.addEventListener("DOMContentLoaded", function () {
    const heroContent = document.querySelector(".hero-content");

    const welcomeMessage = document.getElementById('welcome-message');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) greeting = 'Good Morning!';
    else if (hour < 18) greeting = 'Good Afternoon!';
    else greeting = 'Good Evening!';

    welcomeMessage.textContent = `Hello, ${greeting}`;

    const currentPage = document.querySelector("#home");
    currentPage.classList.add('active');
});

