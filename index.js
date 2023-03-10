function passwordReset() {
    alert("An email has been sent to your administrative provider.");
}

function login(form) {
        location.href = "welcome.html";
}

const dateEl = document.querySelector("#banner h1");

const todayMonth = new Date().getMonth();
const todayDay = new Date().getDate();
const year = new Date().getFullYear();
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const newMonth = months[todayMonth];
dateEl.innerText = newMonth + " " + todayDay + ", " + year;


//Clock//

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();
    // setTimeout(updateClock, 1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

    const secondDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

// updateClock();
setInterval(updateClock, 1000);




