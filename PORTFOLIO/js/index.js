// 모바일_toggle
// document.addEventListener("DOMContentLoaded", function() {
//     const header = document.querySelector("header");
//     const navLinks = document.getElementById("nav-links");
//     const menuToggle = document.getElementById("menu-toggle");

//     function getHeaderHeight() {
//         return header.offsetHeight;
//     }

//     menuToggle.addEventListener("click", function() {
//         navLinks.classList.toggle("show");
//     });

//     // Slide
//     document.querySelectorAll("header .inner ul li a").forEach(anchor => {
//         anchor.addEventListener("click", function(e) {
//             e.preventDefault();
//             const targetId = this.getAttibute("href").substring(1);
//             const targetElement = document.getElementById(targetId);

//         if (targetElement) {
//             window.scrollTo({
//                 top: targetElement.offsetTop - getHeaderHeight(), 
//                 behavior: "smooth"
//             });
//             navLinks.classList.remove("show");
//         } else {
//             console.log(`Element with ID '${targetId}' not found`);
//         }
//         });
//     });
//     window.addEventListener("resize", function() {
//         getHeaderHeight();
//     }); // Re:Zero Starting Life in Another World
// }); // Re:제로부터 시작하는 이세계 생활

//모바일_toggle
document.addEventListener("DOMContentLoaded",function(){
    const header = document.querySelector("header");
    const navLinks = document.getElementById("nav-links");
    const menuToggle = document.getElementById("menu-toggle");

    function getHeaderHeight(){
        return header.offsetHeight;
    }

    menuToggle.addEventListener("click", function(){
        navLinks.classList.toggle("show");
    });
    
    //슬라이드
    document.querySelectorAll("header .inner ul li a").forEach(anchor => {
        anchor.addEventListener("click",function(e){
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if(targetElement){
                window.scrollTo({
                    top: targetElement.offsetTop - getHeaderHeight(),
                    behavior: "smooth"
                });
                navLinks.classList.remove("show");
            }else{
                console.error(`Element with ID '${targetId}' not found.`);
            }
        });
    });

    window.addEventListener("resize", function(){
        getHeaderHeight();
    });
});