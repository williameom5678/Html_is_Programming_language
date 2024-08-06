const Ndebug = true;
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
this.document.addEventListener("DOMContentLoaded",function(){
    const header = document.querySelector("header");
    const navLinks = document.getElementById("nav-links");
    const menuToggle = document.getElementById("menu-toggle");
    const skillsSection = document.querySelector("#skills");
    let observer;

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
                // skills 섹션에 도달시 에니메이션 시작
                if (targetID === "skills") {
                    activateSkillBars();
                }
            }else{
                console.error(`Element with ID '${targetId}' not found.`);
            }
        });
    });

    window.addEventListener("resize", function(){
        getHeaderHeight();
     }); // Re:Zero Starting Life in Another World
    // Skills bar 구동
    function activateSkillBars() {
        const skillElements = document.querySelectorAll('skill_per');

        if(observer) {
            observer.disconnect();
        }
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry =>{
                if (entry.isIntersecting) {
                    skillElements.forEach(skill => {
                        skill.classList.add('fillcolor');
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5 
        });
        skillElements.forEach(skill => {
            skill.classList.remove('fillcolor');
        });
        observer.observe(skillsSection);
    }

    // 페이지 로딩시 skills 섹션이 보이면 에니메이션 구동
    let skillPers = document.querySelectorAll(".skill_per");
    window.addEventListener('scroll', function() {
        let value = window.scrollY + window.innerHeight;
        let triggerPoint = document.querySelector('#skills').offsetTop + document.querySelector('#skills').offsetHeight * 0.93;

        if(Ndebug) {
            console.log("ScrollY + window.innerHeight", value);
            console.log("triggerPoint", triggerPoint);
        }

        if (value > triggerPoint) {
            skillPers.forEach(skillPer => {
                skillPer.classList.add('fillcolor');
            });
        }
    });
    $(function () {
        var initialShowCount = $(window).width() <= 768 ? 3 : 4;
        $(".port_box").slice(0, initialShowCount).show(); // first Count

        $(".port_button").click(function(e) {
            e.preventDefault();
            var showCount = $(window).width() <= 768 ? 3 : 4;
            $(".port_box:hidden").slice(0, showCount).show(); // pic that shows up next time.
            if ( $(".port_box:hidden").length == 0 ) {
                $(".port_button").hide();
            }
        });
    });

 }); // Re:제로부터 시작하는 이세계 생활
// Re:ゼロから始める異世界生活
// 　　　　　　　　 ,.-/77_ ........ _
// 　　　　　　　／:.//イ: : : : : : : ｀: : .､rｪz__
// 　　　　　 ／ : ://: : : : : : : : : : : : : :.ヾ/}: :ヽ
// 　　　　 /: :/: :{/!: : : /:.:.／| : : : /: : :.:Ⅵ: :.∧
//  .　　　 /: : : : : {_{: : :/:／ 　 : : ; '_|: : : : :!{: : : :.
//  　　　/: : : : : :.〔[| ::,'　 / 　 j／　 |: / : iﾉ: : : : :.
// .　　/: : : : : : : :ゞ､ﾊ　 　 　 　 /　j/:.:.:/| : :: : : :.
// 　 , ' : : : : : /　　 Vヽ　「　)　　　/／!/. | : : : : : :.
// 　,': : : : : : :!　　　　 r/{≧=‐rr=' ′ '　 : : : : : : :i
// 　!: : : : : : :{　　　 ノ/:::ハ::::{ヾ、　　 　 ﾉ: : : : : : l
// 　ﾚ'; : : : : :',　　.く /::::ヽ.ﾉ::::ヽ,ゝ,　　　′ : : : : :ﾉ
// .　　＼ : : : ',　, -≪ﾐ/ﾆ!三}三へ、　/: : : : : ／

// 喝!