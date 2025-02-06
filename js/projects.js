
function openModal(projectId) {
    document.getElementById(projectId).style.display = 'flex';
}
function closeModal(projectId) {
    document.getElementById(projectId).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = document.querySelector("#projects");
    currentPage.classList.add('active');

})