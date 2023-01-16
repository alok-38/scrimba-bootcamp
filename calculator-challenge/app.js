// Query the DOM elements
const addButton = document.getElementById("add-btn");
const subButton = document.getElementById("sub-btn");
const mulButton = document.getElementById("mul-btn");
const divButton = document.getElementById("div-btn");

let firstNum = document.getElementById("num1-el");
let secondNum = document.getElementById("num2-el");

let output = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

addButton.addEventListener("click", (event) => {
  let sum = firstNum + secondNum;
  output.textContent += sum;
});

subButton.addEventListener("click", (event) => {
  firstNum = parseInt(prompt("Enter the first number: "));
  secondNum = parseInt(prompt("Enter the second number: "));
  let difference = firstNum - secondNum;
  output.innerHTML = "Difference: " + difference;
});

mulButton.addEventListener("click", (event) => {
  firstNum = parseInt(prompt("Enter the first number: "));
  secondNum = parseInt(prompt("Enter the second number: "));
  let multiply = firstNum * secondNum;
  output.innerHTML = "Multiply: " + multiply;
});

divButton.addEventListener("click", (event) => {
  firstNum = parseInt(prompt("Enter the first number: "));
  secondNum = parseInt(prompt("Enter the second number: "));
  let divide = firstNum / secondNum;
  output.innerHTML = "Divide: " + divide;
});
