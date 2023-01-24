// Use .innerHTML to render a Buy! button inside the div container
const containerEl = document.getElementById("container");
const paraEl = document.createElement("p");

// Create a button element
const button = document.createElement("button");

containerEl.appendChild(button);
containerEl.appendChild(paraEl);
button.innerText = "Buy!";

button.id = "mainButton";

// Attach the "click" event to your button
button.addEventListener("click", () => {
  // When clicked, render a paragraph under the button (in the container)
  // that says "Thank you for buying!
  paraEl.textContent = "Thank you for buying!";
});
