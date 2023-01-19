let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// 1. Store the message-el paragraph in a variable called messageEl
const messageEl = document.getElementById("message-el");
// 2. Store the sum paragraph in a variable called sumEl
const sumEl = document.querySelector("#sum-el");
// 3. Store the cards paragraph in a variable called cardsEl
const cardsEl = document.getElementById("cards-el");
// 4. Create a startGame() function. Move the conditional
const gameBtnEl = document.getElementById("game-btn");
const newBtnEl = document.getElementById("new-btn");

// Create a new function called startGame() that calls renderGame()
function startGame() {
  renderGame();
}

const renderGame = () => {
  // 5. Render the cars on the page using this format -> "Cards:
  cardsEl.innerText = `Cards: ${firstCard} ${secondCard}`;
  // 6. Render the sum on the page using this format -> "Sum: 14"
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  // 2. Display the message in the messageEl using messageEl.textContent
  messageEl.textContent = message;
};

newBtnEl.addEventListener("click", () => {
  console.log("Drawing a new card from the deck!");
  // 1. Create a card variable, and hard code its value to a number (2-11)
  let card = 3;
  // 2. Add the new card to the sum variable
  sum += card;
  // 3. Call startGame()
  renderGame();
});
