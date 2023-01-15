let countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
let count = 0;

incrementBtn.addEventListener("click", (event) => {
  countEl.innerText = count++;
});

saveBtn.addEventListener('click', (event) => {
    
})