function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Querieng DOM elements
const countEl = document.getElementById("count-el");
// Initialise a variable for counting and total
let count = 0;
let total = 0;

// Create two h3's
const h3El = document.createElement("h3");
const h3El1 = document.createElement("h3");
// and give it some content
const content = document.createTextNode("saved entries:" + " ");
const content1 = document.createTextNode("Total: " + " ");
// add the text node to the newly created elements
h3El.appendChild(content);
h3El.setAttribute("id", "save");
h3El1.appendChild(content1);
h3El1.setAttribute("id", "total");

// add the newly created element and its content into the DOM
const buttonEl1 = document.getElementById("save-btn");
const buttonEl = document.getElementById("increment-btn");
// Insert p below the buttons
insertAfter(buttonEl, h3El);
// Insert below the saved entries
insertAfter(buttonEl1, h3El1);

// Add event listener to both increment and save buttons
buttonEl.addEventListener("click", (event) => {
  count++;
  countEl.innerText = count;
});

buttonEl1.addEventListener("click", (event) => {
  h3El.innerText += " " + " " + " " + count + "-" + "-";
  countEl.innerText = count;

  // Sum up and render the same
  total += parseInt(count);
  h3El1.textContent += parseInt(total);

  // reset counter variable and HTML after saving
  count = 0;
  countEl.innerText = count;
});
