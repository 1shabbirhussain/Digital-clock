let hourElem = document.getElementById('hour');
let minElem = document.getElementById('min');
let secElem = document.getElementById('sec');
let ampmElem = document.getElementById('ampm');



setInterval(function () {
    const date = new Date;

    let ampm = 'AM';
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    (function () {
        if (secs < 10) { secs = '0' + secs; }
        if (mins < 10) { mins = '0' + mins; }
        if (hours < 10) { hours = '0' + hours; }
    }
        ())
    if (hours > 11) {
        ampm = 'PM';
        if (hours > 12)
            hours = hours - 12;
    };
    ampmElem.innerText = ampm;
    hourElem.innerText = hours;
    minElem.innerText = mins;
    secElem.innerText = secs;
}, 1000)




