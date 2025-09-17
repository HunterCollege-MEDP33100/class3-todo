console.log('JS loaded');

let todoItems = [];

const addItemButton = document.getElementById('add-item-button');
const textInput = document.getElementById('text');
const timeInput = document.getElementById('time');
const list = document.getElementById('list');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');

function formatTime(time24) {
  if (!time24 || time24 === '') return 'N/A';
  const [hourStr, minute] = time24.split(':');
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
}

function updateList() {
  list.innerHTML = '';

  todoItems.forEach((item, index) => {
    const li = document.createElement('li');

    // Create text node
    const textNode = document.createTextNode(
      `${formatTime(item.time)} — ${item.text} `
    );
    li.appendChild(textNode);

    // Create delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'remove';
    delBtn.style.marginLeft = '10px';
    delBtn.style.cursor = 'pointer';
    delBtn.style.padding = '2px 6px';
    delBtn.style.fontSize = '0.8rem';
    delBtn.style.lineHeight = '1';
    delBtn.style.borderRadius = '3px';
    delBtn.style.border = '1px solid #ccc';
    delBtn.style.background = '#f1ddddff';

    // Delete event listener
    delBtn.addEventListener('click', () => {
      todoItems.splice(index, 1); // remove item at index
      updateList();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

addItemButton.addEventListener('click', function () {
  const text = textInput.value.trim();
  const time = timeInput.value;

  if (text !== '' && time !== '') {
    todoItems.push({ text, time });
    textInput.value = '';
    timeInput.value = '';
    updateList();
  }
});

sortBtn.addEventListener('click', () => {
  todoItems.sort((a, b) => a.time.localeCompare(b.time));
  updateList();
});

clearBtn.addEventListener('click', () => {
  todoItems = [];
  updateList();
});

updateList();
