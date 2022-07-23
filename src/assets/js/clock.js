'use strict';
let loader = document.getElementById('preLoader_Wrapper');
console.log("🚀 ~ file: clock.js ~ line 3 ~ loader", loader)
window.addEventListener('load',()=>{
  loader.hidden = true;
});
// digital clock inputs
const digitalHour = document.getElementById('digital_hour');
const digitalMinute = document.getElementById('digital_minute');
const digitalSecond = document.getElementById('digital_second');
const timeStatus = document.getElementById('status');
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
  if(hour > 12) {
    hour -= 12;
    timeStatus.innerHTML  = 'pm';
  }else{
    timeStatus.innerHTML  = 'am';
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (second < 10) {
    second = `0${second}`;
  }
  digitalHour.textContent = hour;
  digitalMinute.innerHTML = minute;
  digitalSecond.innerHTML = second;
}


function runAnalogClock(){
  let date = new Date();
  let second = date.getSeconds();
  let hour = date.getHours();
  let minute = date.getMinutes();
  const analogHour = document.getElementById('hourHand');
  const analogMinute = document.getElementById('minuteHand');
  const analogSecond = document.getElementById('secondHand');
  analogSecond.style.transform = `rotate(${second * 6}deg)`;
  analogMinute.style.transform = `rotate(${minute * 6}deg)`;
  analogHour.style.transform = `rotate(${hour * 30}deg)`;
}

setInterval(() => {
  runDigitalClock();
  runAnalogClock();
}, 1000);

getToday();

// particle effect
particlesJS('particles-js', {
  particles: {
    number: { value: 25, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
      image: { src: '', width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

