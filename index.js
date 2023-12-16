let firstCard = 4
let secondCard = 6

sum = firstCard + secondCard

let hasBlackJack = false
let isALive = true
let message = ""

function checkIfWin () {
    if (sum < 21) message = "Do you want to draw a new card?"
    else if (sum === 21) {
        message = "You won! You have a Blackjack! Congratulations!"
        hasBlackJack = true
    } else {
        message = "I'm sorry, You lost! Try again."
        isALive = false
    }

    messageEl = document.getElementById("message-el")
    messageEl.innerText = message

    sumEl = document.getElementById("sum-el")
    sumEl.innerText = sum
}

function drawCard () {
    firstCard = Math.floor(Math.random() * 20) + 1;;
    secondCard = Math.floor(Math.random() * 20) + 1;;
    sum = firstCard + secondCard

    cardsEl = document.getElementById("cards-el")
    cardsEl.innerText = firstCard + " " + secondCard

    checkIfWin()
}

function startGame () {
    console.log("The game is started!")
    drawCard()
}