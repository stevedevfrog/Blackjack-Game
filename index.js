let firstCard = 4
let secondCard = 6

sum = firstCard + secondCard

let hasBlackJack = false
let isALive = true
let message = ""

if (sum < 21) message = "Do you want to draw a new card?"
else if (sum === 21) {
    message = "You won! You have a Blackjack! Congratulations!"
    hasBlackJack = true
} else {
    message = "I'm sorry, You lost! Try again."
    isALive = false
}

console.log(message)