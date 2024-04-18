const updateClock = () => {
    const dateReadable = ["주일", "월", "화", "수", "목", "금", "토"];
    var now = new Date();

    var yr = now.getFullYear();
    var mo = now.getMonth() + 1;
    var dy = now.getDate();
    var dTe= dateReadable[now.getDay()];
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mlSec = now.getMilliseconds();

    //var hr_ = (hr < 10) ? '0' + hr : hr;
    var min_ = (min < 10) ? '0' + min : min;
    var sec_ = (sec < 10) ? '0' + sec : sec;

    if (hr >= 12) {
        apm = "오후";
        hr_ = hr - 12;
    }

    var clock = document.getElementById('clock');
    clock.textContent = yr + "년 " + mo + "월 " + dy + "일 (" + dTe + ")\n\n"+ apm + " "+ hr_ + ':' + min_ + ':' + sec_ + '.' + mlSec;
};

setInterval(updateClock, 1);
