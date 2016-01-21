// lecture110.js

var todoList = [];
var choice = prompt('What would you like to do?');


// add Todo in option 1
function addTodos() {
  todoList[todoList.length] = prompt('What would you like to add?');
  console.log(todoList);
}

// this is called by forEach in option 2
function printList(x, i) {
  console.log(i + ': ' + x);
}

// lists Todos in option 2
function listTodos() {
  var status = [];
  if (!todoList[0]) {
    console.log(`Your Todo list is empty`);
  } else {
    console.log(`***********************`);
    todoList.forEach(printList);
    console.log(`***********************`);
  }
}

while (choice !== '5') {
  if (choice === '1') {
    addTodos();
  } else if (choice === '2') {
    listTodos();
  } else if (choice === '3') {
    var cutItem = prompt('Index of item to delete');
    todoList.splice(cutItem, 1);
    console.log('Deleted Todo' + cutItem);
  } else if (choice === '4') {
    todoList = [];
    console.log('Todo list empty');
  }
  choice = prompt('What would you like to do now?');
}

