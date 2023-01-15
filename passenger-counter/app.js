let count = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");

incrementBtn.addEventListener("click", (event) => {
  count.innerHTML = count++;
});
