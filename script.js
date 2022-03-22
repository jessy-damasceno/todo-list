const inputText = document.querySelector('#texto-tarefa');
const btnTarefa = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

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

list.addEventListener('click', selectColor);
