let date = document.querySelector('.date');
let day = document.querySelector('.day');
let month = document.querySelector('.month');
let year = document.querySelector('.year');

let weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

let months = ["January ", "February", "March", "April", "May", "June", "july", "August", "September", "October", "November", "December"];

const today = new Date();

date.innerHTML = today.getDate();
day.innerHTML = weekDays[today.getDay()].slice(0, 1).toUpperCase() + weekDays[today.getDay()].slice(1);
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();