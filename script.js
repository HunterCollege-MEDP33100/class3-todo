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

const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');





// 3. Write a function to display all items in the #list element
function updateList() {
    // add your code here
}

// updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function (item) {
    return todoItems.push(item);
});


console.log(todoItems);

// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
});




// // 6. Transform items to uppercase when upperBtn is clicked
// upperBtn.addEventListener("click", () => {
//     // add your code here
// });




// 7. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
});