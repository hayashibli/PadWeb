'use strict';


 //= [];

if(localStorage.getItem('rock')){
  var rockItem = JSON.parse(localStorage.getItem('rock'));
}else{
  var rockItem=[];
}



function Rock(name) {
    this.name = name;
    rockItem.push(this);
  }

  new Rock('Remember Everything');
  new Rock('Wrong Side of Heaven');
  new Rock('Everybody Loves An Outlaw ');
  new Rock('Black');
  new Rock('Jeremy');


var heart = document.getElementById('heart');
var heart1 = document.getElementById('heart1');
var heart2 = document.getElementById('heart2');
var heart3 = document.getElementById('heart3');
var heart4 = document.getElementById('heart4');


heart.addEventListener('lclick', addfavourite);
heart1.addEventListener('click', addfavourite);
heart2.addEventListener('click', addfavourite);
heart3.addEventListener('click', addfavourite);
heart4.addEventListener('click', addfavourite);

function addfavourite(event) {

  if (event.target.id === 'heart' ) {

    localStorage.setItem('rock', JSON.stringify(rockItem[0]));

  }else if (event.target.id === 'heart1' ){
    localStorage.setItem('rock', JSON.stringify(rockItem[1]));
  }else if (event.target.id === 'heart2' ){
    localStorage.setItem('rock', JSON.stringify(rockItem[2]));
  }else if (event.target.id === 'heart3' ){
    localStorage.setItem('rock', JSON.stringify(rockItem[3]));
  }else if (event.target.id === 'heart4' ){
    localStorage.setItem('rock', JSON.stringify(rockItem[4]));
  }

  
}



