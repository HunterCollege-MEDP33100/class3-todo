// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = ["bananas", "rice","bread"
    // add more items here
];


// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const text = document.getElementById('text');
const list = document.getElementById('list');
const upperBtn = document.getElementById('uppercase');
const lowerBtn = document.getElementById('lowercase');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');



// 3. Write a function to display all items in the #list element
function updateList() {

    list.innerHTML = '';
    for(let x = 0; x < todoItems.length; x++){
        const item = document.createElement("Li");
        item.textContent = todoItems[x];
        list.appendChild(item);
    }
}

// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    const newItem = text.value.trim()
    if (newItem == '') return
    todoItems.push(newItem);
    updateList();
});


// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    todoItems.sort();
    updateList();
});


// 6. Transform items to uppercase when upperBtn is clicked
upperBtn.addEventListener("click", () => {
    for(let i = 0; i < todoItems.length; i++){
        todoItems[i] = todoItems[i].toUpperCase();
    }
    updateList();
});


//transform items to lowercase when lowerBtn is clicked
lowerBtn.addEventListener("click", () => {
    for(let i = 0; i < todoItems.length; i++){
        todoItems[i] = todoItems[i].toLowerCase();
    }
    updateList();
});


// 7. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    todoItems.splice(0,todoItems.length);
    updateList();
});