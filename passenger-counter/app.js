// initialize count and total variable
let count = 0;
let total = 0;

// grab all the DOM elements
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const totalEl = document.getElementById("total-el");

incrementBtn.addEventListener("click", (event) => {
  count++;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", (event) => {
  let countStr = count + " - ";
  saveEl.textContent += countStr;

  total += count;
  totalEl.textContent = total;

  // reset counter variable and HTML after saving
  countEl.textContent = 0;
  count = 0;
});
