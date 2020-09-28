var toDos = [];
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
  // localStorage.setItem('To-Dos', toDos);
  console.log(p.textContent);
  p.addEventListener('click', linethrough);
  function linethrough() {
    p.style.textDecoration = 'line-through';
  }
  p.addEventListener('dblclick', deleteText);
  function deleteText() {
    p.textContent = '';
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
}
