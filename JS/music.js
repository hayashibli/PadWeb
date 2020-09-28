
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

//------------------ Pop favourite  --------------------------------------------------

var popItem = [];
function Pop(name) {
  this.name = name;
  popItem.push(this);
}
new Pop('Get Me');
new Pop('Holly');
new Pop('Rain On Me');
new Pop('Wild Life');
new Pop('Diamonds');


if (localStorage.getItem('pop')) {
  var popClick = JSON.parse(localStorage.getItem('pop'));
} else {
  var popClick = [];
}



var popheart = document.getElementById('popheart');
var popheart1 = document.getElementById('popheart1');
var popheart2 = document.getElementById('popheart2');
var popheart3 = document.getElementById('popheart3');
var popheart4 = document.getElementById('popheart4');


popheart.addEventListener('click', popFavourite);
popheart1.addEventListener('click', popFavouret1);
popheart2.addEventListener('click', popFavouret2);
popheart3.addEventListener('click', popFavouret3);
popheart4.addEventListener('click', popFavouret4);


function popFavourite(event) {
  
  if (event.target.checked) {
    popClick.push('Get Me');
    localStorage.setItem('pop', JSON.stringify(popClick));
  } else if (!event.target.checked) {
    var index = popClick.indexOf('Get Me');
    popClick.splice(index, 1);
    localStorage.removeItem('pop');
    localStorage.setItem('pop', JSON.stringify(popClick));
    console.log(popClick);
  }
  
}




function popFavouret1(event) {

  if (event.target.checked) {
    popClick.push('Holy');
    localStorage.setItem('pop', JSON.stringify(popClick));
  } else if (!event.target.checked) {
    var index = popClick.indexOf('Holy');
    popClick.splice(index, 1);
    localStorage.removeItem('pop');
    localStorage.setItem('pop', JSON.stringify(popClick));
    console.log(popClick);
  }
}




function popFavouret2(event) {

  if (event.target.checked) {
    popClick.push('Rain On Me');
    localStorage.setItem('pop', JSON.stringify(popClick));
  } else if (!event.target.checked) {
    var index = popClick.indexOf('Rain On Me');
    popClick.splice(index, 1);
    localStorage.removeItem('pop');
    localStorage.setItem('pop', JSON.stringify(popClick));
    console.log(popClick);
  }
}



function popFavouret3(event) {

  if (event.target.checked) {
    popClick.push('Wild Life');
    localStorage.setItem('pop', JSON.stringify(popClick));
  } else if (!event.target.checked) {
    var index = popClick.indexOf('Wild Life');
    popClick.splice(index, 1);
    localStorage.removeItem('pop');
    localStorage.setItem('pop', JSON.stringify(popClick));
    console.log(popClick);
  }
}




function popFavouret4(event) {

  if (event.target.checked) {
    popClick.push('Diamonds');
    localStorage.setItem('pop', JSON.stringify(popClick));
  } else if (!event.target.checked) {
    var index = popClick.indexOf('Diamonds');
    popClick.splice(index, 1);
    localStorage.removeItem('pop');
    localStorage.setItem('pop', JSON.stringify(popClick));
    console.log(popClick);
  }
}


//------------------ Shaabi favourite  --------------------------------------------------

var shaabiItem = [];
function Shaabi(name) {
  this.name = name;
  shaabiItem.push(this);
}
new Shaabi('OudElbanat');
new Shaabi('Bihawaya');
new Shaabi('HobOmri');
new Shaabi('Habbitek');
new Shaabi('Wdaa ya');


if (localStorage.getItem('shaabi')) {
  var shaabiClick = JSON.parse(localStorage.getItem('shaabi'));
} else {
  var shaabiClick = [];
}



var shaabiheart = document.getElementById('shaabiheart');
var shaabiheart1 = document.getElementById('shaabiheart1');
var shaabiheart2 = document.getElementById('shaabiheart2');
var shaabiheart3 = document.getElementById('shaabiheart3');
var shaabiheart4 = document.getElementById('shaabiheart4');


shaabiheart.addEventListener('click', shaabiFavourite);
shaabiheart1.addEventListener('click', shaabiFavouret1);
shaabiheart2.addEventListener('click', shaabiFavouret2);
shaabiheart3.addEventListener('click', shaabiFavouret3);
shaabiheart4.addEventListener('click', shaabiFavouret4);


function shaabiFavourite(event) {
  
  if (event.target.checked) {
    shaabiClick.push('OudElbanat');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
  } else if (!event.target.checked) {
    var index = shaabiClick.indexOf('OudElbanat');
    shaabiClick.splice(index, 1);
    localStorage.removeItem('shaabi');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    console.log(shaabiClick);
  }
  
}




function shaabiFavouret1(event) {

  if (event.target.checked) {
    shaabiClick.push('Bihawaya');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
  } else if (!event.target.checked) {
    var index = shaabiClick.indexOf('Bihawaya');
    shaabiClick.splice(index, 1);
    localStorage.removeItem('shaabi');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    console.log(shaabiClick);
  }
}




function shaabiFavouret2(event) {

  if (event.target.checked) {
    shaabiClick.push('HobOmri');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
  } else if (!event.target.checked) {
    var index = shaabiClick.indexOf('HobOmri');
    shaabiClick.splice(index, 1);
    localStorage.removeItem('shaabi');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    console.log(shaabiClick);
  }
}



function shaabiFavouret3(event) {

  if (event.target.checked) {
    shaabiClick.push('Habbitek');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
  } else if (!event.target.checked) {
    var index = shaabiClick.indexOf('Habbitek');
    shaabiClick.splice(index, 1);
    localStorage.removeItem('shaabi');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    console.log(shaabiClick);
  }
}




function shaabiFavouret4(event) {

  if (event.target.checked) {
    shaabiClick.push('Wdaa ya');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
  } else if (!event.target.checked) {
    var index = shaabiClick.indexOf('Wdaa ya');
    shaabiClick.splice(index, 1);
    localStorage.removeItem('shaabi');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    console.log(shaabiClick);
  }
}
