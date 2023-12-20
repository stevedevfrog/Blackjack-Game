let cards = []

let hasBlackJack = false
let isALive = true
let message = ""

let messageEl = document.getElementById("message-el")

let playerEl = document.getElementById("player-el")

let player = {
    name: "Steve",
    coins: 50,
    showPlayerStats: function () {
        playerEl.textContent = player.name + " $" + player.coins
    }
}

function getRandomCard () {
    let randomCard = Math.floor( Math.random()*13 ) + 1 // 1-13
    if (randomCard === 1) return 11 // 1 is Ace and it has a value of 11
    else if (randomCard >= 11 & randomCard <= 13) return 10 // 11-13 are J, Q and K with value of 10
    else return randomCard 
}

function checkIfWin () {
    let cardsEl = document.getElementById("cards-el")
    cardsText = "Cards: "

    // Displaying the cards on the page
    for (let i = 0; i < cards.length; i++) {
        cardsText += cards[i] + ", "
    }
    
    cardsEl.innerText = cardsText

    // Checking if the player won
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
    player.showPlayerStats()
    //console.log(player.coins)

    isALive = true
    hasBlackJack = false

    // Generating 2 cards
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    
    cards = [firstCard, secondCard]

    sum = firstCard + secondCard
    
    checkIfWin()
}