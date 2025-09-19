// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    "bread" , "eggs" , "milk" , "juice" , "butter"
];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const list = document.getElementById('list');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');
const addItem = document.getElementById('text');


// 3. Write a function to display all items in the #list element
function updateList(item, index, array) {
    // add your code here
   list.innerHTML = "";
   todoItems.forEach(function (item) {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
        });
}
updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here
    const newItem = addItem.value.trim();
    if (newItem) {
        todoItems.push(newItem);
        updateList();
        addItem.value = "";
    }
});


// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
    todoItems.sort();
    updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
    todoItems.length = 0;
    updateList(); 
});