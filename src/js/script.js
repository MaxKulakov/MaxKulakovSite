// first screen height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


// date length for current work
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let day_1 = new Date(2021, 4, 25),
    day_2 = new Date(year, month, day);

function diffDates(day_one, day_two) {
    return (day_one - day_two) / (60 * 60 * 24 * 1000);
};

function getFormatedStringFromDays(numberOfDays) {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);

    var yearsDisplay = years > 0 ? years + (years == 1 ? " year " : " years ") : "";
    var monthsDisplay = months > 0 ? months + (months == 1 ? " month " : " months ") : "";
    return yearsDisplay + monthsDisplay; 
}

document.getElementById("current-time-work").innerHTML = getFormatedStringFromDays(diffDates(day_2, day_1));