let todoItems = [
  // add more items here
  'grapes', 'bread', 'tea', "cherries"
];

const addItemButton = document.getElementById('add-item-button');

const list = document.getElementById('list');
const textInput = document.getElementById('text');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');


function updateList() {
  list.innerHTML = '';

  for (let i = 0; i < todoItems.length; i++) {
    addItem(todoItems[i]);
  }


}

updateList();

function addItem(newItem) {
  const listItem = document.createElement('li');
  listItem.innerText = newItem;
  list.appendChild(listItem);
}

addItemButton.addEventListener('click', function () {
  const newItem = textInput.value;
  //addItem(newItem);
  todoItems.push(newItem);
  updateList();

  textInput.value = '';
});

sortBtn.addEventListener("click", () => {
  todoItems.sort();
  updateList();
});

clearBtn.addEventListener("click", () => {
  todoItems = [];
  updateList();
});