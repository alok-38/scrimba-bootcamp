function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Create a new para element
const pEl = document.createElement("p");
// and give it some content
const content = document.createTextNode("saved entries:" + " ");
// add the text node to the newly created div
pEl.appendChild(content);
// add the newly created element and its content into the DOM
const buttonEl = document.getElementById("save-btn");
const buttonEl1 = document.getElementById("increment-btn");
// Insert p below the buttons
insertAfter(buttonEl, pEl);
