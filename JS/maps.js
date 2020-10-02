/* eslint-disable no-unused-vars */
'use strict';

var btn = document.getElementById('btn');
var section = document.getElementById('pointer');

var rmvBtn = document.getElementById('rmvBtn');

var p;
var btnX, div2;

function quick(){

  setTimeout(() =>{
    var div = document.createElement('div');
    div.setAttribute('id', 'hoverIN');

    section.appendChild(div);

    div2 = document.createElement('div');
    div2.setAttribute('id', 'text');
    section.appendChild(div2);
  }, 700);

  setTimeout(() =>{
    btnX = document.createElement('button');
    btnX.textContent = 'X';
    btnX.setAttribute('onclick', 'removing()');
    btnX.setAttribute('id', 'xBtn');
    rmvBtn.appendChild(btnX);


    p = document.createElement('p');
    p.textContent = 'An Earthquake has been registered in Jordan!!';
    div2.appendChild(p);
  }, 1000);



}


function removing(){

  p.remove();
  btnX.remove();

}

var map = document.getElementById('mapFrame');

btn.addEventListener('click', moveMap);

function moveMap(){
  map.style.transition = '500ms';
  map.style.marginLeft = '47%';

}






var arr = [];


for(var i=0; i<5;i++){
  var data = getRndInteger(1, 10);
  arr.push(data);
}


var ctx = document.getElementById('myAds').getContext('2d');


// eslint-disable-next-line no-undef
function chart(){
  // eslint-disable-next-line no-undef
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['First Quake', 'Second Quake', 'Third Quake', 'Fourth Quake', 'Fifth Quake'],
      datasets: [{
        label: 'Earthquake Meter',
        data: arr,
        backgroundColor: 'rgba(255, 99, 322, 0.4)',
        borderColor: 'rgba(255, 129, 184, 21)',
        borderWidth: 6
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}




function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
