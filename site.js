const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

let welcomeMessage;
if (isMorning) {
    welcomeMessage = "Good morning! Welcome and thank you for visiting."
} else if (isAfternoon) {
    welcomeMessage = "Good afternoon! Welcome and thank you for visiting."
} else if (isEvening) {
    welcomeMessage = "Good evening! Welcome and thank you for visiting."
}

// Add secret message to the page
document.getElementById('welcome').innerText = welcomeMessage

const secretMessage = "Is this a Zelda reference?"
localStorage.setItem("It's a secret to everybody.", secretMessage)

console.log('Secret message has been stored in localStorage.')