// 모바일_toggle
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const navLinks = document.getElementById("nav-links");
    const menuToggle = document.getElementById("menu-toggle");

    function getHeaderHeight() {
        return header.offsetHeight;
    }

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});