document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".about, .timeline-section, .hobbies");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
    const currentPage = document.querySelector("#about");
    currentPage.classList.add('active');
});
