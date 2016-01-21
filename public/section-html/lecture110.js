// lecture110.js

var todoList = [];
var choice = prompt('What would you like to do?');

while (choice !== '4') {
  if (choice === '1') {
    todoList[todoList.length] = prompt('What would you like to add?');
    console.log(todoList);
  } else if (choice === '2') {
    var status = [];
    if (!todoList[0]) {
      status = [].concat('empty');
    } else {
      status = [].concat(todoList);
    }
    alert(`Your Todo list is: ${status}`);
  } else if (choice === '3') {
    todoList = [];
  }
  choice = prompt('What would you like to do now?');
}
// alert('goodby');
