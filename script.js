// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (colors)
let todoItems = [
     "pizza",
    "burger",
    "salad",
    "sushi",
    "pasta",
    "sandwich",
    "tacos",
    "rice",
    "soup",
    "steak"
];

// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
const input = document.getElementById('text');
const list = document.getElementById('list');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');

// 3. Write a function to display all items in the #list element
function updateList() {
    list.innerHTML = ""; // clear existing list

    if (todoItems.length === 0) {
        // show placeholder if empty
        const li = document.createElement("li");
        li.textContent = "No items yet…";
        li.classList.add("empty");
        list.appendChild(li);
        return;
    }

    todoItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;

        // remove item when clicked
        li.addEventListener("click", () => {
            todoItems.splice(index, 1);
            updateList();
        });

        list.appendChild(li);
    });
}

updateList();

// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function (event) {
    event.preventDefault(); // prevent page reload
    const newItem = input.value.trim();
    if (newItem !== "") {
        todoItems.push(newItem);
        input.value = ""; // clear input field
        updateList();
    }
});

// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    todoItems.sort();
    updateList();
});

// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    todoItems = [];
    updateList();
});
