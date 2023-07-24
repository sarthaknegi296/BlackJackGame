


let cardsArr = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEL = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let playerName = prompt("What is your name?");
let noOfChips = prompt("How many chips you want to buy?");

let player = {
    name: playerName,
    chips: noOfChips
}

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard () {
    // Ace is treated as '11'
    // Jack, Queen and King as treated as '10'
    let randomNumber =  Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10) {
        return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }
    else {
        return randomNumber;
    }
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsArr = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEL.textContent = "Cards: ";
    for(let i = 0; i < cardsArr.length; i++) {
        cardsEL.textContent += cardsArr[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20) {
        message = "Do you want to draw a new card ?";
    }
    else if(sum === 21) {
        message = "You've got blackjack!";
        hasBlackJack = true;
    }
    else {
        message = "You are out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    
}

function newCard() {
    console.log("Drawing the new card from the deck!");
    
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        cardsArr.push(card);
        sum += card;
        renderGame();
    }
    
}


