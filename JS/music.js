'use strict';
var rockItem = [];
function Rock(name) {
  this.name = name;
  rockItem.push(this);
}
new Rock('Remember Everything');
new Rock('Wrong Side of Heaven');
new Rock('Everybody Loves An Outlaw');
new Rock('Black');
new Rock('Jeremy');


if (localStorage.getItem('rock')) {
  rockClick = JSON.parse(localStorage.getItem('rock'));
} else {
  var rockClick = [];
}




var heart = document.getElementById('heart');
var heart1 = document.getElementById('heart1');
var heart2 = document.getElementById('heart2');
var heart3 = document.getElementById('heart3');
var heart4 = document.getElementById('heart4');


heart.addEventListener('click', addfavourite);
heart1.addEventListener('click', favouret1);
heart2.addEventListener('click', favouret2);
heart3.addEventListener('click', favouret3);
heart4.addEventListener('click', favouret4);



function addfavourite(event) {
  
  if (event.target.checked) {
    rockClick.push('Remember Everything');
    localStorage.setItem('rock', JSON.stringify(rockClick));
  } else if (!event.target.checked) {
    var index = rockClick.indexOf('Remember Everything');
    rockClick.splice(index, 1);
    localStorage.removeItem('rock');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    console.log(rockClick);
  }
  
}




function favouret1(event) {

  if (event.target.checked) {
    rockClick.push('Wrong Side of Heaven');
    localStorage.setItem('rock', JSON.stringify(rockClick));
  } else if (!event.target.checked) {
    var index = rockClick.indexOf('Wrong Side of Heaven');
    rockClick.splice(index, 1);
    localStorage.removeItem('rock');
    localStorage.setItem('rock', JSON.stringify(rockClick));
  }
}




function favouret2(event) {

  if (event.target.checked) {
    rockClick.push('Everybody Loves An Outlaw');
    localStorage.setItem('rock', JSON.stringify(rockClick));
  } else if (!event.target.checked) {
    var index = rockClick.indexOf('Everybody Loves An Outlaw');
    rockClick.splice(index, 1);
    localStorage.removeItem('rock');
    localStorage.setItem('rock', JSON.stringify(rockClick));
  }
}



function favouret3(event) {

  if (event.target.checked) {
    rockClick.push('Black');
    localStorage.setItem('rock', JSON.stringify(rockClick));
  } else if (!event.target.checked) {
    var index = rockClick.indexOf('Black');
    rockClick.splice(index, 1);
    localStorage.removeItem('rock');
    localStorage.setItem('rock', JSON.stringify(rockClick));
  }
}




function favouret4(event) {

  if (event.target.checked) {
    rockClick.push('Jeremy');
    localStorage.setItem('rock', JSON.stringify(rockClick));
  } else if (!event.target.checked) {

    var index = rockClick.indexOf('Jeremy');
    rockClick.splice(index, 1);
    localStorage.removeItem('rock');
    localStorage.setItem('rock', JSON.stringify(rockClick));
  }
}

//--------------------------------------------------------------------