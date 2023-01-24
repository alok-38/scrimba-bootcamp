// Querying the DOM
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// Add event listener to the button
inputBtn.addEventListener("click", (e) => {
  myLeads.push(inputEl.value);
  // Call the renderLeads() function
  //   Clear the input field
  inputEl.value = "";
  renderLeads();
});

// The renderLeads() function
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
    <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
    </a>
</li>
    `;
  }
  ulEl.innerHTML = listItems;
}
