'use strict';

// numbers sounds
var s1 = new Audio();
s1.src = '../images/phone/num1.mp3';

var s2 = new Audio();
s2.src = '../images/phone/num2.mp3';

var s3 = new Audio();
s3.src = '../images/phone/num3.mp3';

var s4 = new Audio();
s4.src = '../images/phone/num4.mp3';

var s5 = new Audio();
s5.src = '../images/phone/num5.mp3';

var s6 = new Audio();
s6.src = '../images/phone/num6.mp3';

var s7 = new Audio();
s7.src = '../images/phone/num7.mp3';

var s8 = new Audio();
s8.src = '../images/phone/num8.mp3';

var s9 = new Audio();
s9.src = '../images/phone/num9.mp3';

var s0 = new Audio();
s0.src = '../images/phone/num0.mp3';

var star = new Audio();
star.src = '../images/phone/star.mp3';

var hash = new Audio();
hash.src = '../images/phone/hash.mp3';

var dial = document.getElementById('dial');
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
var num1 = document.getElementById('n1');
var num2 = document.getElementById('n2');
var num3 = document.getElementById('n3');
var num4 = document.getElementById('n4');
var num5 = document.getElementById('n5');
var num6 = document.getElementById('n6');
var num7 = document.getElementById('n7');
var num8 = document.getElementById('n8');
var num9 = document.getElementById('n9');
var star1 = document.getElementById('star');
var num0 = document.getElementById('n0');
var hash1 = document.getElementById('hash');

// Add event listeners
num1.addEventListener('click', n1Fun);
function n1Fun() {
  var p1 = document.createElement('p');
  p1.textContent = numbers[0];
  dial.appendChild(p1);
}

num2.addEventListener('click', n2Fun);
function n2Fun() {
  var p2 = document.createElement('p');
  p2.textContent = numbers[1];
  dial.appendChild(p2);
}

num3.addEventListener('click', n3Fun);
function n3Fun() {
  var p3 = document.createElement('p');
  p3.textContent = numbers[2];
  dial.appendChild(p3);
}

num4.addEventListener('click', n4Fun);
function n4Fun() {
  var p4 = document.createElement('p');
  p4.textContent = numbers[3];
  dial.appendChild(p4);
}

num5.addEventListener('click', n5Fun);
function n5Fun() {
  var p5 = document.createElement('p');
  p5.textContent = numbers[4];
  dial.appendChild(p5);
}

num6.addEventListener('click', n6Fun);
function n6Fun() {
  var p6 = document.createElement('p');
  p6.textContent = numbers[5];
  dial.appendChild(p6);
}

num7.addEventListener('click', n7Fun);
function n7Fun() {
  var p7 = document.createElement('p');
  p7.textContent = numbers[6];
  dial.appendChild(p7);
}

num8.addEventListener('click', n8Fun);
function n8Fun() {
  var p8 = document.createElement('p');
  p8.textContent = numbers[7];
  dial.appendChild(p8);
}

num9.addEventListener('click', n9Fun);
function n9Fun() {
  var p9 = document.createElement('p');
  p9.textContent = numbers[8];
  dial.appendChild(p9);
}

star1.addEventListener('click', starFun);
function starFun() {
  var star1 = document.createElement('p');
  star1.textContent = numbers[9];
  dial.appendChild(star1);
}

num0.addEventListener('click', n0Fun);
function n0Fun() {
  var p0 = document.createElement('p');
  p0.textContent = numbers[10];
  dial.appendChild(p0);
}

hash1.addEventListener('click', hashFun);
function hashFun() {
  var hash1 = document.createElement('p');
  hash1.textContent = numbers[11];
  dial.appendChild(hash1);
}

var clear = document.getElementById('clear');
clear.addEventListener('click', remove);
function remove(){
//  var x = document.getElementById('dial');
//  x.remove();
  dial.textContent = '';
}

// -------------------------------------------------------------
var callDiv = document.getElementById('call');
var dialer = document.getElementById('dialer');

dialer.addEventListener('click', changeToRed);


var busyCall;

function changeToRed(){
  callDiv.style.backgroundColor = 'red';
  dialer.style.transition = '800ms';
  dialer.style.transform = 'rotate(119deg)';


  busyCall = new Audio();
  busyCall.src = '../images/phone/busy.mp3';
  busyCall.play();

  setTimeout(() =>{
    callDiv.style.backgroundColor = '#0add26';
    dialer.style.transition = '800ms';
    dialer.style.transform = 'rotate(0deg)';
  }, 19500);

  dialer.removeEventListener('click', changeToRed);
}

dialer.addEventListener('dblclick', backToGreen);

function backToGreen(){
  callDiv.style.backgroundColor = '#0add26';
  dialer.style.transition = '800ms';
  dialer.style.transform = 'rotate(0deg)';

  busyCall.pause();
}
