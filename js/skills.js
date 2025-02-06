document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".progress-ring-progress");
    circles.forEach(circle => {
        let progress = circle.getAttribute("data-progress");
        let circumference = 2 * Math.PI * 50;
        let offset = circumference - (progress / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    });

    const bars = document.querySelectorAll(".progress-fill");
        bars.forEach(bar => {
            let progress = bar.getAttribute("data-progress");
            bar.style.width = progress + "%";
        });

    const currentPage = document.querySelector("#skills");
    currentPage.classList.add('active');
});