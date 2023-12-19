let firstCard = 0
let secondCard = 0
let cards = [
    0,
    0
]

sum = firstCard + secondCard

let hasBlackJack = false
let isALive = true
let message = ""

let messageEl = document.getElementById("message-el")

function getRandomCard () {
    return Math.floor(Math.random() * 20) + 1
}

function checkIfWin () {
    let cardsEl = document.getElementById("cards-el")
    cardsText = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsText += cards[i] + ", "
    }
    
    cardsEl.innerText = cardsText

    if (sum < 21) message = "Do you want to draw a new card?"
    else if (sum === 21) {
        message = "You won! You have a Blackjack! Congratulations!"
        hasBlackJack = true
    } else {
        message = "I'm sorry, You lost! Try again."
        isALive = false
    }

    messageEl.innerText = message

    let sumEl = document.getElementById("sum-el")
    sumEl.innerText = "Sum: " + sum
}

function drawCard () {
    if(hasBlackJack == true) {
        message = "You already won! You can play again if you want."
        messageEl.innerText = message
    }

    else if (isALive === true) {
        let card = getRandomCard()
        cards.push(card) // Add the card to the list of cards
        sum += card // Add the card to the the sum
        checkIfWin()
    }
    else if (isALive == false) {
        message = "You lost! Can't draw a new card. You can try playing again."
        messageEl.innerText = message
    }
}

function startGame () {
    isALive = true
    hasBlackJack = false

    // Generating 2 cards
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    
    cards = [firstCard, secondCard]

    sum = firstCard + secondCard
    
    checkIfWin()
}