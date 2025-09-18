// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    "grapes", "bread", "tea" 
    // add more items here
];

// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const list = document.getElementById('list');

const sortBtn = document.getElementById('sort');

const clearBtn = document.getElementById('clear');

let inputvalue = document.getElementById('text').value;

// 3. Write a function to display all items in the #list element
function updateList() {
    document.getElementById("list").innerHTML = ''
    for (let i = 0; i < todoItems.length-1; i++){
        document.getElementById("list").innerHTML += todoItems[i] +', '
    }
        document.getElementById("list").innerHTML += todoItems[todoItems.length-1]
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    let inputvalue = document.getElementById('text').value;
    todoItems.push(inputvalue);
    updateList()}
);

console.log(todoItems)

// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    todoItems.sort();
    updateList()
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    todoItems = [''];
    updateList();
});