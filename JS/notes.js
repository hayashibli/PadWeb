var toDos = [];
var audio;
var p;
// Get elements from HTML
var input = document.getElementById('inputField');
var button = document.getElementById('button');
var toDoItems = document.getElementById('toDoItems');
// Create an event listner on the button
button.addEventListener('click', addToDo);
function addToDo() {
  var p = document.createElement('p');
  toDoItems.appendChild(p);
  p.textContent = input.value;
  toDos.push(p.textContent);
  input.value = '';
  console.log(p.textContent);
  p.addEventListener('click', linethrough);
  function linethrough() {
    p.style.textDecoration = 'line-through';
    audio = new Audio;
    audio.src = '../images/linethrough.mp3';
    audio.play();
    p.removeEventListener('click', linethrough);
  }
  p.addEventListener('dblclick', deleteText);
  function deleteText() {
    p.textContent = '';
    var deleteA = new Audio;

    deleteA.src = '../images/recycle.mp3';
    deleteA.play();
  }
  p.style.lineHeight = '.2';
  localStorage.setItem('To-Dos', toDos);
}

var getData = localStorage.getItem('To-Dos');
for (var i = 0; i < getData.length; i++) {
  var p2 = document.createElement('p');
  p2.textContent = getData.split(',')[i];
  toDoItems.appendChild(p2);
  p2.style.lineHeight = '.2';
  document.getElementById('p');
  p.textContent = '';
}
