
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
    var index3 = rockClick.indexOf('Remember Everything');
    mainArr.push(rockClick[index3]);
  } else if (!event.target.checked) {
    var index = rockClick.indexOf('Remember Everything');
    rockClick.splice(index, 1);
    localStorage.removeItem('rock');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    console.log(rockClick);
    mainArr.splice(mainArr[0],1);
  }

}




function favouret1(event) {

  if (event.target.checked) {
    rockClick.push('Wrong Side of Heaven');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    var index3 = rockClick.indexOf('Wrong Side of Heaven');
    mainArr.push(rockClick[index3]);
  } else if (!event.target.checked) {
    var index = rockClick.indexOf('Wrong Side of Heaven');
    rockClick.splice(index, 1);
    localStorage.removeItem('rock');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    mainArr.splice(mainArr[1],1);
  }
}




function favouret2(event) {

  if (event.target.checked) {
    rockClick.push('Everybody Loves An Outlaw');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    var index3 = rockClick.indexOf('Everybody Loves An Outlaw');
    mainArr.push(rockClick[index3]);
  } else if (!event.target.checked) {
    var index = rockClick.indexOf('Everybody Loves An Outlaw');
    rockClick.splice(index, 1);
    localStorage.removeItem('rock');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    mainArr.splice(mainArr[2],1);
  }
}



function favouret3(event) {

  if (event.target.checked) {
    rockClick.push('Black');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    var index3 = rockClick.indexOf('Black');
    mainArr.push(rockClick[index3]);
  } else if (!event.target.checked) {
    var index = rockClick.indexOf('Black');
    rockClick.splice(index, 1);
    localStorage.removeItem('rock');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    mainArr.splice(mainArr[3],1);
  }
}




function favouret4(event) {

  if (event.target.checked) {
    rockClick.push('Jeremy');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    var index3 = rockClick.indexOf('Jeremy');
    mainArr.push(rockClick[index3]);
  } else if (!event.target.checked) {

    var index = rockClick.indexOf('Jeremy');
    rockClick.splice(index, 1);
    localStorage.removeItem('rock');
    localStorage.setItem('rock', JSON.stringify(rockClick));
    mainArr.splice(mainArr[4],1);
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
  popClick = [];
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
    var index3 = popClick.indexOf('Get Me');
    mainArr.push(popClick[index3]);
  } else if (!event.target.checked) {
    var index = popClick.indexOf('Get Me');
    var index2 = mainArr.indexOf('Get Me');
    popClick.splice(index, 1);
    localStorage.removeItem('pop');
    localStorage.setItem('pop', JSON.stringify(popClick));
    mainArr.splice(index2,1);
    console.log(popClick);
  }

}




function popFavouret1(event) {

  if (event.target.checked) {
    popClick.push('Holy');
    localStorage.setItem('pop', JSON.stringify(popClick));
    var index3 = popClick.indexOf('Holy');
    mainArr.push(popClick[index3]);
  } else if (!event.target.checked) {
    var index = popClick.indexOf('Holy');
    var index2 = popClick.indexOf('Holy');
    popClick.splice(index, 1);
    localStorage.removeItem('pop');
    localStorage.setItem('pop', JSON.stringify(popClick));
    mainArr.splice(index2,1);
    console.log(popClick);
  }
}




function popFavouret2(event) {

  if (event.target.checked) {
    popClick.push('Rain On Me');
    localStorage.setItem('pop', JSON.stringify(popClick));
    var index3 = popClick.indexOf('Rain On Me');
    mainArr.push(popClick[index3]);
  } else if (!event.target.checked) {
    var index = popClick.indexOf('Rain On Me');
    var index2 = popClick.indexOf('Rain On Me');
    popClick.splice(index, 1);
    localStorage.removeItem('pop');
    localStorage.setItem('pop', JSON.stringify(popClick));
    mainArr.splice(index2,1);
    console.log(popClick);
  }
}



function popFavouret3(event) {

  if (event.target.checked) {
    popClick.push('Wild Life');
    localStorage.setItem('pop', JSON.stringify(popClick));
    var index3 = popClick.indexOf('Wild Life');
    mainArr.push(popClick[index3]);
  } else if (!event.target.checked) {
    var index = popClick.indexOf('Wild Life');
    var index2 = popClick.indexOf('Wild Life');
    popClick.splice(index, 1);
    localStorage.removeItem('pop');
    localStorage.setItem('pop', JSON.stringify(popClick));
    mainArr.splice(index2,1);
    console.log(popClick);
  }
}




function popFavouret4(event) {

  if (event.target.checked) {
    popClick.push('Diamonds');
    localStorage.setItem('pop', JSON.stringify(popClick));
    var index3 = popClick.indexOf('Diamonds');
    mainArr.push(popClick[index3]);
  } else if (!event.target.checked) {
    var index = popClick.indexOf('Diamonds');
    var index2 = popClick.indexOf('Diamonds');
    popClick.splice(index, 1);
    localStorage.removeItem('pop');
    localStorage.setItem('pop', JSON.stringify(popClick));
    mainArr.splice(index2,1);
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
   shaabiClick = [];
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
    var index3 = shaabiClick.indexOf('OudElbanat');
    mainArr.push(shaabiClick[index3]);
  } else if (!event.target.checked) {
    var index = shaabiClick.indexOf('OudElbanat');
    var index2 = shaabiClick.indexOf('OudElbanat');
    shaabiClick.splice(index, 1);
    localStorage.removeItem('shaabi');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    mainArr.splice(index2,1);
    console.log(shaabiClick);
  }

}




function shaabiFavouret1(event) {

  if (event.target.checked) {
    shaabiClick.push('Bihawaya');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    var index3 = shaabiClick.indexOf('Bihawaya');
    mainArr.push(shaabiClick[index3]);
  } else if (!event.target.checked) {
    var index = shaabiClick.indexOf('Bihawaya');
    var index2 = shaabiClick.indexOf('Bihawaya');
    shaabiClick.splice(index, 1);
    localStorage.removeItem('shaabi');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    mainArr.splice(index2,1);
    console.log(shaabiClick);
  }
}




function shaabiFavouret2(event) {

  if (event.target.checked) {
    shaabiClick.push('HobOmri');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    var index3 = shaabiClick.indexOf('HobOmri');
    mainArr.push(shaabiClick[index3]);
  } else if (!event.target.checked) {
    var index = shaabiClick.indexOf('HobOmri');
    var index2 = shaabiClick.indexOf('HobOmri');
    shaabiClick.splice(index, 1);
    localStorage.removeItem('shaabi');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    mainArr.splice(index2,1);
    console.log(shaabiClick);
  }
}



function shaabiFavouret3(event) {

  if (event.target.checked) {
    shaabiClick.push('Habbitek');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    var index3 = shaabiClick.indexOf('Habbitek');
    mainArr.push(shaabiClick[index3]);
  } else if (!event.target.checked) {
    var index = shaabiClick.indexOf('Habbitek');
    var index2 = shaabiClick.indexOf('Habbitek');
    shaabiClick.splice(index, 1);
    localStorage.removeItem('shaabi');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    mainArr.splice(index2,1);
    console.log(shaabiClick);
  }
}




function shaabiFavouret4(event) {

  if (event.target.checked) {
    shaabiClick.push('Wdaa ya');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    var index3 = shaabiClick.indexOf('Wdaa ya');
    mainArr.push(shaabiClick[index3]);
  } else if (!event.target.checked) {
    var index = shaabiClick.indexOf('Wdaa ya');
    var index2 = shaabiClick.indexOf('Wdaa ya');
    shaabiClick.splice(index, 1);
    localStorage.removeItem('shaabi');
    localStorage.setItem('shaabi', JSON.stringify(shaabiClick));
    mainArr.splice(index2,1);
    console.log(shaabiClick);
  }
}
var mainArr =  [];

var main = document.getElementById('main');
var div = document.createElement('div');
div.style.display = 'none';
main.appendChild(div);




function myFavorite() {
  
  if (div.style.display === 'none') {
    render();
    div.style.display = 'block';
    
  } else {
    div.style.display = 'none';
  }
 
}




function render(){

  div.style.display= 'none';
  div.style.backgroundColor= '#D8BFD8';
  div.style.zIndex= 'auto';
  div.style.width= '20%';
  div.style.padding = '30px';
  div.style.textAlign= 'left';
  div.style.marginTop= '50px';
  div.style.position= 'absolute';
  div.style.marginLeft= '30px';
  div.style.borderRadius= '20px';
  div.style.opacity = '0.9';

  

  var ul = document.createElement('ul');
  
  for(var y =0; y<mainArr.length; y++ ){
    var li = document.createElement('li');
    li.style.fontSize= '18px';
    li.textContent = mainArr[y];
    ul.appendChild(li);
    div.textContent = '';
  }
  
  console.log(mainArr);
  div.appendChild(ul);
}

//---------------------------------------------------------------------------------
(function() {

  function Slideshow( element ) {
    this.el = document.querySelector( element );
    this.init();
  }

  Slideshow.prototype = {
    init: function() {
      this.wrapper = this.el.querySelector( '.slider-wrapper' );
      this.slides = this.el.querySelectorAll( '.slide' );
      this.previous = this.el.querySelector( '.slider-previous' );
      this.next = this.el.querySelector( '.slider-next' );
      this.index = 0;
      this.total = this.slides.length;
      this.timer = null;

      this.action();
      this.stopStart();
    },
    _slideTo: function( slide ) {
      var currentSlide = this.slides[slide];
      currentSlide.style.opacity = 1;

      for( var i = 0; i < this.slides.length; i++ ) {
        var slide = this.slides[i];
        if( slide !== currentSlide ) {
          slide.style.opacity = 0;
        }
      }
    },
    action: function() {
      var self = this;
      self.timer = setInterval(function() {
        self.index++;
        if( self.index == self.slides.length ) {
          self.index = 0;
        }
        self._slideTo( self.index );

      }, 3000);
    },
    stopStart: function() {
      var self = this;
      self.el.addEventListener( 'mouseover', function() {
        clearInterval( self.timer );
        self.timer = null;

      }, false);
      self.el.addEventListener( 'mouseout', function() {
        self.action();

      }, false);
    }


  };

  document.addEventListener( 'DOMContentLoaded', function() {

    var slider = new Slideshow( '#main-slider' );

  });


})();




