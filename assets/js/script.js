const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const secounds = document.getElementById('secounds')

const clock = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    hours.textContent = hr;
    minutes.textContent = min;
    secounds.textContent = sec;
})