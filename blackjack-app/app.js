let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

const player = {
  name: "Alok",
  chips: 145,
};

const playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// Make this function return a random number between 1 and 13
function getRandomCard(max = 13, min = 1) {
  // if 1     -> return 11
  // if 11-13 -> return 10
  const randomValue = Math.floor(Math.random() * (max - min + 1) + min);

  if (randomValue === 1) {
    return 11;
  } else if (randomValue === 11 && randomValue === 13) {
    return 10;
  } else {
    return randomValue;
  }
}

// Semi optimized function
function startGame() {
  isAlive = true;
  // Generate two random numbes
  const generateRandomNumbers = (min, max, times) => {
    const randoms = [];
    for (let i = 0; i < times; i++) {
      randoms.push(Math.floor(Math.random() * (max - min) + min));
    }
    return randoms;
  };
  // Re-assign the cards and sum variables so that the game can start
  cards = generateRandomNumbers(1, 13);
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
