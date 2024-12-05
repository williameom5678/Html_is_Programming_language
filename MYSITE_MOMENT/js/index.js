// run text
(function() {
    const spanEl = document.querySelector("main h2 span");
    const txtyArr = ["Human", "Photographer", "Railfan", "CAD learner", "Photoshop CS6 lover", "Girl's Frontline Player", "War Thunder Player", "Forza Horizon series lover", "Catholic-Christian", "...Definitely not you.", "Canon lover", "Canon EOS 5D Mark III user", "Twitterian"];

    let index = 0;
    let curTxt = txtyArr[index].split("");

    function writeTxt() {
        spanEl.textContent += curTxt.shift();
        if(curTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        } else {
            curTxt = spanEl.textContent.split("");
            setTimeout(delelteTxt, 3200);
        }
    }
    function deleteTxt() {
        curTxt.pop();
        spanEl.textContent = curTxt.join("");
        if(curTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        } else {
            index = (index + 1) % txtyArr.length;
            curTxt = txtyArr[index].split("");
            writeTxt();
        }
    }
    
});