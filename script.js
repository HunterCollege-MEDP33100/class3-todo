// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    // add more items here
    'chicken', 'bananas', 'soup'

];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const ul = document.getElementById('list');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');
const textInput = document.getElementById('text');  



// 3. Write a function to display all items in the #list element
function updateList() {
    ul.innerHTML = ''; 
    for (let t of todoItems) {
        let li = document.createElement('li');
        li.textContent = t;
        li.addEventListener('click', () => {
            todoItems = todoItems.filter(item => item !== t);
            updateList();
        });

        ul.appendChild(li);
    }
}




// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here
    let text = textInput.value.trim();
    if(text) {
        todoItems.push(text);
        textInput.value = '';
        updateList();
    }
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
    todoItems.sort((a, b) => a.localeCompare(b));
    updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
    todoItems = [];
    updateList();
});