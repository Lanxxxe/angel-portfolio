document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    
    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }
    
    if (isValid) {
        alert("Message Sent Successfully!");
        document.getElementById("contactForm").reset();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = document.querySelector("#contact");
    currentPage.classList.add('active');
})