// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    "Apple", "Banana", "Orange", "Strawberry", "Pineapple",
    "Grape", "Watermelon", "Peach", "Pear", "Cherry",
    "Lemon", "Lime", "Mango", "Coconut", "Kiwi",
    "Plum", "Avocado"
];


// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
const list = document.getElementById('list');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');
const input = document.getElementById('text');


// 3. Write a function to display all items in the #list element
function updateList() {
    // clear the list before adding items
    list.innerHTML = "";

    // loop through the array and add each item
    for (let i = 0; i < todoItems.length; i++) {
        let li = document.createElement("li");
        li.textContent = todoItems[i];
        list.appendChild(li);
    }
}

updateList();


// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here
});


// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
});


// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
});
