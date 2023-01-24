// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

const myLeads = [];
const inputBtnEl = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");

inputBtnEl.addEventListener("click", (event) => {
  // Push the value from the inputEl into the myLeads object
  // instead of the hard-coded "www.awesomeleads.com" value
  // Google -> "get value from input field javascript"
  myLeads.push(inputEl.value);
  console.log(myLeads);
});
