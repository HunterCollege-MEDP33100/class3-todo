// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = ['grapes', 'bread', 'tea'
    // add more items here
];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const list = document.getElementById('list');
const text = document.getElementById('text');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');
const upperBtn = document.getElementById('upper');




// 3. Write a function to display all items in the #list element
function updateList() {
    // add your code here
    list.innerHTML = ""; //clears out anything stored in the element list, so it's blank when running this function
    todoItems.forEach(item => { //for each word in todoitems, we run the code
        const listItem = document.createElement('li');//creates the li element
        listItem.textContent = item; //set the text of listItem to be whatever the item's name is 
        list.appendChild(listItem); //attaches listItem element to the list element so it shows up on the page
    })
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here
    if (text.value !== "") {
        todoItems.push(text.value);
        text.value = "";
        updateList();
    }
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
    todoItems.sort();
    updateList();
});




// 6. Transform items to uppercase when upperBtn is clicked
upperBtn.addEventListener("click", () => {
    // add your code here
    todoItems = todoItems.map(item => item.toUpperCase());
    updateList();
});




// 7. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
    todoItems.length = 0;
    updateList();
});