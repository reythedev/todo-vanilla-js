'use strict';


/**
 * DOM variables
 * Functions
 * Event listeners
 */


/**
 * DOM variables
 */
const newTodoForm = document.querySelector('form.add');
const searchBoxForm = document.querySelector('form input');
let todoList = document.querySelector('ul.todos');


/**
 * Functions
 */
const newTodoComponent = todo => {
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
          </li>`
};

const appendTodo = component => todoList.innerHTML += component;

const filterTodos = term => {
  [...todoList.children]
    .filter(todo => !todo.textContent.toLowerCase().includes( term.toLowerCase() ))
    .forEach(result => result.classList.add('myhide'));

  [...todoList.children]
    .filter(todo => todo.textContent.toLowerCase().includes( term.toLowerCase() ))
    .forEach(result => result.classList.remove('myhide'));
};


/**
 * Event listeners
 */
newTodoForm.addEventListener('submit', e => {
  e.preventDefault();
  if (newTodoForm.add.value.trim()) {
    appendTodo(newTodoComponent(newTodoForm.add.value));
    newTodoForm.reset();
  }
});

searchBoxForm.addEventListener('keyup', () => {
  const term = searchBoxForm.value.trim();
  filterTodos(term);
});

todoList.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});
