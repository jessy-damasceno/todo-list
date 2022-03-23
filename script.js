const inputText = document.querySelector('#texto-tarefa');
const btnTarefa = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const btnDeleteAll = document.querySelector('#apaga-tudo');
const btnRemoveCompleteds = document.querySelector('#remover-finalizados');
const btnRemoveSelecteds = document.querySelector('#remover-selecionado');
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.querySelector('#mover-baixo');
const btnSaveTasks = document.querySelector('#salvar-tarefas');

function addItemList() {
  if (inputText.value.length === 0) {
    return false;
  }
  const itemList = document.createElement('li');
  itemList.innerText = inputText.value;
  list.appendChild(itemList);
  inputText.value = '';
}

btnTarefa.addEventListener('click', addItemList);

function selectColor(e) {
  const itemListElements = document.getElementsByTagName('li');
  for (let i = 0; i < itemListElements.length; i += 1) {
    itemListElements[i].classList.remove('selected');
  }
  e.target.classList.add('selected');
  list.classList.remove('selected');
}

function completeTask(e) {
  if (e.target.id === 'lista-tarefas') {
    return false;
  }
  e.target.classList.toggle('completed');
}

list.addEventListener('click', selectColor);
list.addEventListener('dblclick', completeTask);

function deleteAll() {
  list.innerHTML = '';
}

function removeCompleteds() {
  const taskCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < taskCompleted.length; i += 1) {
    taskCompleted[i].remove();
  }
}

function removeSelected() {
  const taskSelected = document.querySelector('.selected');
  const nextSelected = document.querySelector('.selected').nextElementSibling;
  if (!taskSelected) return false;
  taskSelected.remove();
  nextSelected.classList.add('selected');
}

function moveUp() {
  const elementSelected = document.querySelector('.selected');
  const listItems = document.getElementsByTagName('li');
  if (!elementSelected || elementSelected === listItems[0]) {
    return false;
  }
  const previousElement = elementSelected.previousElementSibling;
  list.insertBefore(elementSelected, previousElement);
}

function moveDown() {
  const elementSelected = document.querySelector('.selected');
  const listItems = document.getElementsByTagName('li');
  if (!elementSelected || elementSelected === listItems[listItems.length - 1]) {
    return false;
  }
  const nextElement = elementSelected.nextElementSibling.nextElementSibling;
  list.insertBefore(elementSelected, nextElement);
}

function saveTasks() {
  localStorage.setItem('list', list.innerHTML);
}

window.onload = function loadList() {
  list.innerHTML = localStorage.getItem('list');
};

function addListItem(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addItemList();
  }
}

btnDeleteAll.addEventListener('click', deleteAll);
btnRemoveCompleteds.addEventListener('click', removeCompleteds);
btnRemoveSelecteds.addEventListener('click', removeSelected);
btnMoveUp.addEventListener('click', moveUp);
btnMoveDown.addEventListener('click', moveDown);
btnSaveTasks.addEventListener('click', saveTasks);
inputText.addEventListener('keyup', addListItem); // https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
