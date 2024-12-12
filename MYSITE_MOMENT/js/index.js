// run text
// (function() {
//     const spanEl = document.querySelector("main h2 span");
//     const txtyArr = ["Human", "Photographer", "Railfan", "CAD learner", "Photoshop CS6 lover", "Girl's Frontline Player", "War Thunder Player", "Forza Horizon series lover", "Catholic-Christian", "...Definitely not you.", "Canon lover", "Canon EOS 5D Mark III user", "Twitterian"];

//     let index = 0;
//     let curTxt = txtyArr[index].split("");

//     function writeTxt() {
//         spanEl.textContent += curTxt.shift();
//         if(curTxt.length !== 0) {
//             setTimeout(writeTxt, Math.floor(Math.random() * 100));
//         } else {
//             curTxt = spanEl.textContent.split("");
//             setTimeout(delelteTxt, 3000);
//         }
//     }
//     function deleteTxt() {
//         curTxt.pop();
//         spanEl.textContent = curTxt.join("");
//         if(curTxt.length !== 0) {
//             setTimeout(deleteTxt, Math.floor(Math.random() * 100));
//         } else {
//             index = (index + 1) % txtyArr.length;
//             curTxt = txtyArr[index].split("");
//             writeTxt();
//         }
//     }
//     writeTxt();
// })();


(function(){
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ["Human", "Photographer", "Railfan", "CAD learner", "Photoshop CS6 lover", "Girl's Frontline Player", "War Thunder Player", "Forza Horizon series lover", "Catholic-Christian", "...Definitely not you.", "Canon lover", "Canon EOS 5D Mark III user", "Twitterian"];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    function writeTxt(){
      spanEl.textContent  += currentTxt.shift(); 
      if(currentTxt.length !== 0){ 
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
      }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
      }
    }
    function deleteTxt(){
      currentTxt.pop();
      spanEl.textContent = currentTxt.join("");
      if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100))
      }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
      }
    }
    writeTxt();
  })();
  
  /*  header 태그에 active 클래스 추가 및 삭제 */
  const headerEl = document.querySelector("header");
  window.addEventListener('scroll', function(){
    requestAnimationFrame(scrollCheck);
  });
  function scrollCheck(){
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0){
      headerEl.classList.add("active");
    }else{
      headerEl.classList.remove("active");
    }
  }
  
  /* 애니메이션 스크롤 이동 */
  const animationMove = function(selector){
  const targetEl = document.querySelector(selector);
  const browserScrollY = window.pageYOffset;
  const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
   window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
  };
  // 스크롤 이벤트 연결하기
  const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']"); 
  for(let c = 0; c < scollMoveEl.length; c++){
    scollMoveEl[c].addEventListener('click', function(e){
      const target = this.dataset.target;
      animationMove(target);
    });
  }
  