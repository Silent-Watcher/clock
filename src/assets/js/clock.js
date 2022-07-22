'use strict';
// digital clock inputs
const digitalHour = document.getElementById('digital_hour');
const digitalMinute = document.getElementById('digital_minute');
const digitalSecond = document.getElementById('digital_second');
const status = document.getElementById('status');
//
function getToday() {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let date = new Date();
  //
  let dayValue = weekday[date.getDay()];
  let yearValue = date.getFullYear();
  let monthValue = date.getMonth();
  //
  let dayInput = document.getElementById('day');
  let monthInput = document.getElementById('month');
  let yearInput = document.getElementById('year');
  //
  dayInput.innerHTML = dayValue;
  monthInput.innerHTML = monthValue;
  yearInput.innerHTML = yearValue;
  //
}

function runDigitalClock() {
  let date = new Date();
  let second = date.getSeconds();
  let hour = date.getHours();
  let minute = date.getMinutes();
  digitalHour.textContent = hour;
  digitalMinute.innerHTML = minute;
  digitalSecond.innerHTML = second;
}

setInterval(() => {
  runDigitalClock();
}, 1000);

getToday();