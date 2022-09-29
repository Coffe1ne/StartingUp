let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let addSeconds = document.getElementById('seconds');
let addTens = document.getElementById('tens');

let seconds = 00;
let tens = 00;
// 1.
function startTimer() {
    tens++;
    if(tens < 9) {
        addTens.innerHTML = "0" + tens;
    }
    if(tens > 9) {
        addTens.innerHTML = tens;
    }
    if(tens > 99) {
        seconds++;
        addSeconds.innerHTML = "0" + seconds;
        tens = 0;
        addTens.innerHTML = "0" + 0;
    }
    if(seconds > 9) {
        addSeconds.innerHTML = seconds;
    }
}

start.onclick = function() {
    // interval = setInterval(startTimer, 1000); vaka kje se racuna kako sekundi i minuti
    interval = setInterval(startTimer);
}

stop.onclick = function() {
    clearInterval(interval);
}

reset.onclick = function() {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    addSeconds.innerHTML = seconds;
    addTens.innerHTML = tens;
}
// 3.
function url() {
    let str = "https://www.youtube.com/watch?v=_7rT-ixivWU&ab_channel=KeepOnCoding";
    let url = new URL (str);
    console.log(url.href);
    console.log(url.protocol);
    console.log(url.hostname);
    console.log(url.pathname);
    console.log(url.hash);
    console.log(url.search);
    console.log(url.origin);
    console.log(url.searchParams);
    // console.log(window.location.href);
    // console.log(window.location.protocol);
    // console.log(window.location.hostname);
    // console.log(window.location.pathname);
    // console.log(window.location.search);
    // console.log(window.location.hash);
}