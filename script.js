const inputText = document.querySelector('#texto-tarefa');
const btnTarefa = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const btnDeleteAll = document.querySelector('#apaga-tudo');
const btnRemoveCompleteds = document.querySelector('#remover-finalizados');

function addItemList() {
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
  e.target.classList.toggle('completed');
}

list.addEventListener('click', selectColor);
list.addEventListener('dblclick', completeTask);

function deleteAll() {
  list.innerHTML = '';
}

function removeCompleteds() {
  const taskselected = document.querySelectorAll('.completed');
  for (let i = 0; i < taskselected.length; i += 1) {
    taskselected[i].remove();
  }
}

btnDeleteAll.addEventListener('click', deleteAll);
btnRemoveCompleteds.addEventListener('click', removeCompleteds);
