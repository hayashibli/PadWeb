'use strict';

// touch sound
var touch = new Audio();
touch.src = '../images/touch.mp3';


// pad Clock
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
        h + ':' + m + ':' + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) { i = '0' + i; }
  return i;
}



// pad Battery
function chargebattery() {
  var a;
  a = document.getElementById('charging');
  a.innerHTML = '&#xf244;';
  setTimeout(function () {
    a.innerHTML = '&#xf243;';
  }, 1000);
  setTimeout(function () {
    a.innerHTML = '&#xf242;';
  }, 2000);
  setTimeout(function () {
    a.innerHTML = '&#xf241;';
  }, 3000);
  setTimeout(function () {
    a.innerHTML = '&#xf240;';
  }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);











