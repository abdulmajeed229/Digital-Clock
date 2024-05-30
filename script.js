
let dot = document.getElementById('dot');

let day = document.getElementById('day');

let hours = document.getElementById('hour');

let ampm = document.getElementById('ampm');

let daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]



setInterval(() => {



    let today = new Date();

    let hour = today.getHours();

    if (hour > 12) {

        ampm.innerText = "AM"
    } else {
        ampm.innerText = "PM"
    }


    if (hour < 10) {
        hour = "0" + hour

    }

    let minuts = today.getMinutes();

    if (minuts < 10) {
        minuts = "0" + minuts
    }

    let seco = today.getSeconds();

    if (seco < 10) {

        seco = "0" + seco
    }

    let todayDay = daysName[today.getDay()];


    hours.innerText = `${hour} : ${minuts} : ${seco}`;

    day.innerText = `${todayDay}`

}, 1000);

