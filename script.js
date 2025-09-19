// 1. Start with an array of strings (different items)
let todoItems = [
    "pencil",
    "notebook",
    "eraser"
];


// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
const itemInput = document.getElementById('item-input');
const list = document.getElementById('list');
const sortBtn = document.getElementById('sort-button');
const clearBtn = document.getElementById('clear-button');


// 3. Write a function to display all items in the #list element
function updateList() {
    // Clear existing list
    list.innerHTML = "";

    // Loop through items and add them as <li>
    todoItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;

        // Remove item when clicked
        li.addEventListener("click", () => {
            todoItems.splice(index, 1); // remove item at index
            updateList(); // refresh list
        });

        list.appendChild(li);
    });
}

updateList();


// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function (e) {
    e.preventDefault(); // prevent page reload if button is inside form
    const newItem = itemInput.value.trim();

    if (newItem) {
        todoItems.push(newItem); // add to array
        itemInput.value = ""; // clear input
        updateList(); // refresh list
    }
});


// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    todoItems.sort();
    updateList();
});


// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    todoItems = []; // reset array
    updateList();
});
