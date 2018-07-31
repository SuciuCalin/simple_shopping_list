var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

/*
 *	Prevents the user to enter blank items (all whitespace)
 */
function isValidInput() {
	if (input.value.replace(/^\s+|\s+$/g, '').length == 0) {
		input.value = "";
		return false;
	} else {
			return true;
		}
}

/*
 *	Creates a new list item if the input is valid
 */
function addListAfterClick() {
	if (isValidInput()) {
		createListElement();
	}
}

/*
 *	Creates a new list item on "enter" key press
 */
function addListAfterKeypress(event) {
	if (isValidInput() && event.keyCode === 13) {
		createListElement();
	}
}

/*
 *	Creates a new list item
 */
function createListElement() {
	var li = document.createElement("li");

	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	createListElementButton(li);

	li.addEventListener("click", markListItem);
	input.value = "";
}

/*
 *	Creates a "Delete" button for each list item
 */
function createListElementButton(listElement) {
	var liButton = document.createElement("span");
	liButton.appendChild(document.createTextNode("X"));
	listElement.appendChild(liButton);

	// Removes the list item when clicking the "Delete" button
	liButton.addEventListener("click", function() {
		listElement.parentNode.removeChild(listElement);
	});
}

/*
 *	Toggles the "done" class for the list item
 */
function markListItem() {
	this.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
