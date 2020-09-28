'use strict';


//= [];

var rockItem= [];
function Rock(name) {
  this.name = name;
  rockItem.push(this);
}

if(localStorage.getItem('rock')){
  rockItem = JSON.parse(localStorage.getItem('rock'));
}else { 
new Rock('Remember Everything');
new Rock('Wrong Side of Heaven');
new Rock('Everybody Loves An Outlaw');
new Rock('Black');
new Rock('Jeremy');
}

if(localStorage.getItem('rock')){
  var rockClick = JSON.parse(localStorage.getItem('rock'));
}else { 
  var rockClick=[];
}




var heart = document.getElementById('heart');
var heart1 = document.getElementById('heart1');
var heart2 = document.getElementById('heart2');
var heart3 = document.getElementById('heart3');
var heart4 = document.getElementById('heart4');


heart.addEventListener('click', addfavourite);
heart1.addEventListener('click', addfavourite);
heart2.addEventListener('click', addfavourite);
heart3.addEventListener('click', addfavourite);
heart4.addEventListener('click', addfavourite);

/*heart.addEventListener('change', removefavourite);
heart1.addEventListener('change', removefavourite);
heart2.addEventListener('change', removefavourite);
heart3.addEventListener('change', removefavourite);
heart4.addEventListener('change', removefavourite);*/

function addfavourite(event) {

  /*if (localStorage.getItem('rock')) {
     rockItem = JSON.parse(localStorage.getItem('rock'));
  
  }
  else {*/
  if (event.target.id === 'heart') {
 
    rockClick.push('Remember Everything');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    

    /*clickItem.push(rockItem[0]);
    localStorage.setItem('rock', JSON.stringify(clickItem[0]));*/
         
  } else if (event.target.id === 'heart1') {
    rockClick.push('Wrong Side of Heaven');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    //clickItem.push(rockItem[1]);

  } else if (event.target.id === 'heart2') {
    rockClick.push('Everybody Loves An Outlaw');
    localStorage.setItem('rock', JSON.stringify(rockClick));
   // clickItem.push(rockItem[2]);

  } else if (event.target.id === 'heart3') {
    rockClick.push('Black');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    //clickItem.push(rockItem[3]);

  } else if (event.target.id === 'heart4') {
    rockClick.push('Jeremy');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    //clickItem.push(rockItem[4]);
  }


}
