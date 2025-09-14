// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    // add more items here
    "grapes", "bread", "tea"
];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const list = document.getElementById('list');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');
const input = document.getElementById('text');



// 3. Write a function to display all items in the #list element
function updateList(index, items) {
    // add your code here

    let li = document.createElement('li');
    li.innerText = index, items;
    list.appendChild(li);

}

todoItems.forEach(updateList)

// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here
    todoItems.push(input.value);
    updateList(todoItems[todoItems.length - 1]);
});

// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
    list.innerHTML = '';
    todoItems.sort();
    todoItems.forEach(updateList);
});



// // 6. Transform items to uppercase when upperBtn is clicked
// upperBtn.addEventListener("click", () => {
//     // add your code here
// });



// 7. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
    todoItems.length = 0;
    list.innerHTML = '';
});