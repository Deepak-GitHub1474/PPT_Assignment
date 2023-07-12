let clockContainer = document.getElementById("clock-container")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

function getCurrentTime() {
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if (min < 10) {
        min = `0${hr}`
    }

    hours.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
}

setInterval(getCurrentTime, 1000);