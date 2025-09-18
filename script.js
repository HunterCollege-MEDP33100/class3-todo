// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = ["grapes", "bread", "tea"
    // add more items here
];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const inputEl = document.getElementById('text');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');
const list = document.getElementById('list');



// 3. Write a function to display all items in the #list element
function updateList() {
    // add your code here
	list.innerHTML = "";
	todoItems.forEach((text, i) => {
		const li = document.createElement("li");
		li.textContent = text;
		li.dataset.index = String(i);
		list.appendChild(li);
});

}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here
	const value = (inputEl.value || "").trim();
	if (!value) return;
	todoItems.push(value);
	inputEl.value = "";
	updateList();
	inputEl.focus();
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
	todoItems.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
	updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
});