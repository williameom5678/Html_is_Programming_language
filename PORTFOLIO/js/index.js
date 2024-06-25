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

    // Slide
    document.querySelectorAll("header .inner ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttibute("href").substring(1);
        });
    });
});