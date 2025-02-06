document.addEventListener('DOMContentLoaded', () => {
    const currentPage = document.querySelector("#projects");
    currentPage.classList.add('active');

    function openModal(projectId) {
        document.getElementById(projectId).style.display = 'flex';
    }
    function closeModal(projectId) {
        document.getElementById(projectId).style.display = 'none';
    }

})