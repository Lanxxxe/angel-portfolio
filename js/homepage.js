document.addEventListener("DOMContentLoaded", function () {
    const heroContent = document.querySelector(".hero-content");
    // heroContent.style.opacity = "0";
    // heroContent.style.transform = "translateY(-50px)";
    
    // setTimeout(() => {
    //     heroContent.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    //     heroContent.style.opacity = "1";
    //     heroContent.style.transform = "translateY(0)";
    // }, 300); 

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

