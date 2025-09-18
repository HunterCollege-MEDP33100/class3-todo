// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
// add more items here
let todoItems = ["grapes", "bread", "tea", "eggs", "milk", "cereal"];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
const list = document.getElementById('list');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');
const input = document.getElementById('text')

// add more variables below
todoItems.push("Apple");// Pushes Apple into the list "todoItems"
todoItems.push("Orange");// Pushes Orange into the list "todoItems"
todoItems.push("Lemon");// Pushes Lemon into the list "todoItems"



// 3. Write a function to display all items in the #list element
function updateList() {
    // add your code here
    for (let i = 0; i < items.length; i++) {
      const x = document.createElement("x"); // Create list item
      x.textContent = items[i]; // Set its text
      list.appendChild(x); // Add it to the UL
    }
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here
    if(this.inputMode.valueOf.trim() !== ""){
        todoItems.push(input.value.trim());
        input.value = "";
        updateList();
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
    todoItems = [];
    updateList();
});