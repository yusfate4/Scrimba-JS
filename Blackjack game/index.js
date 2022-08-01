// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
/*
let firstCard = 61;
let secondCard = 9;

let sum = firstCard + secondCard;

if (sum < 21) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("wohoooo!You've got Blackjack");
} else if (sum > 21) {
  console.log("You're out of the game");
}
*/

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
/*
let age = 22;
if (age <= 21) {
    console.log("You can not enter the club!")
} 
else {
    console.log("Welcome")
}
*/

// Check if the person is eligible for a birthday card from the king! (100)
/*
let age = 100;

if (age < 100) {
    console.log("Not eligible")
}
else if (age === 100) {
    console.log("Here is your birthday card from the king!")
}
else {
    console.log("Not eligible, you have already gotten one")
}
*/

// // Jackbox game
// let player = {
//   name: "Per",
//   chips: 145
// }
// let cards = [];
// let sum = 0;
// let hasBlackJack = false;
// let isAlive = false;
// let message = "";
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let cardsEl = document.getElementById("cards-el");
// let playerEl  = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips





// // Create a function , getRandomCard(), that always return the number 5
// function getRandomCard() {
//   let randomNumber = Math.floor(Math.random() * 13) + 1;
//   if (randomNumber > 10) {
//     return 10;
//   } else if (randomNumber === 1) {
//     return 11;
//   } else {
//     return randomNumber;
//   }
// }

// function startGame() {
//   isAlive = true;
//   let firstCard = getRandomCard();
//   let secondCard = getRandomCard();

//   cards = [firstCard, secondCard];
//   sum = firstCard + secondCard;
//   renderGame();
// }
// function renderGame() {
//   cardsEl.textContent = "Cards: ";
//   for (let i = 0; i < cards.length; i++) {
//     cardsEl.textContent += cards[i] + " ";
//   }
//   sumEl.textContent = "Sum: " + sum;
//   if (sum <= 20) {
//     message = "Do you want to draw a new card?";
//   } else if (sum === 21) {
//     message = "You've got Blackjack";
//     hasBlackJack = true;
//   } else {
//     message = "You're out of the game!";
//     isAlive = false;
//   }

//   messageEl.textContent = message;
// }

// // Create a function newCard() that logs out "Drawing a new card from the deck!"
// function newCard() {
//   if (isAlive === true && hasBlackJack === false) {
//     let card = getRandomCard();
//     sum += card;
//     cards.push(card);
//     renderGame();
// }
  
// }

// Arrays
// let list = [
//   "A frontend dev",
//   "BSc. Physiology",
//   "Freecodecamp ADS",
//   "Python, JS",
//   "HTML, CSS"
// ]

// console.log(list[0])
// console.log(list[1])
// console.log(list[2])

// let firstCard = 10
// let secondCard = 4
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// // 2. Store the cards paragraph in a variable called cardsEl

// function startGame() {
//     // 3. Render the cars on the page using this format -> "Cards: 10 4"
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// let myself = [
//   "Dahud Yusuf",
//   "22",
//   true
// ]

// console.log(myself)

// let messages = [
//   "Hey, how's it going?",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)
// messages.pop()
// console.log(messages)

// counting in javascript
// for (let count = 10; count < 21; count += 1) {
//   console.log(count)
// }

// for (let i = 0; i <= 5; i++){
//   console.log(i)
// }

// create a for loop that counts from 10 to 100 in steps of 10
// for (let i = 10; i <= 100; i+= 10){
//   console.log(i)
// }

// let messages = [
//   "Hey, how's it going?",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
//   "Same here!",
//   "Welcome",
//   "Here",
//   "Yusuf"
// ]

// for (let i = 0; i < messages.length; i += 1) {
//   console.log(messages[i])
// }

// let cardss = [7, 3, 9]
// for (i = 0; i < cardss.length; i++){
//   console.log(cardss[i])
// }

// let sentence = ["Hello", "my", "name", "is", "per"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i <= sentence.length; i++) {
// greetingEl.textContent += sentence[i] +" "

// }

// console.log(sentence)

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//   if (player1Time < player2Time) {
//     return player1Time
//   } else if(player2Time < player1Time) {
//     return player2Time
//   } else {
//     return player1Time
//   }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

// function getTotalRaceTime() {
//   return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()
// console.log(totalTime)

// Generating random numbers
// let randomNumber =Math.floor( Math.random() * 7) + 1

// console.log(randomNumber)

// let flooredNumber = Math.floor(3.6632)
// console.log(flooredNumber)

// Create a function, rollDice(), that returns a random number between 1 and 6
// function rollDice(){
//   let randomNumber =Math.floor( Math.random() * 7) + 1
//   return randomNumber
// }

// console.log(rollDice())

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false){
//   showSolution()
// }

// function showSolution() {
//   console.log("Showing the solution.....")
// }


// let likesDocumentaries = true
// let likesStartups = true

// if (likesDocumentaries === true || likesStartups === true) {
//   recommendMovie()
// }

// function recommendMovie() {
//   console.log("Hey, check out this new film we think you will like!")
// }

// JS Objects
// let airBnb = {
//   hostel: true,
//   name: "AirBnb",
//   year: 2022,
//   castle: ["Beautiful"]


// }

// console.log(airBnb.hostel)
// console.log(airBnb.castle)

// Practice
// objects and function
// let person = {
//   name: "Dahud",
//   age: 22,
//   country: "Nigeria"
// }

// function logData() {
//   persons = person.name + " is " + person.age + " years" + " old " + " and " + " lives " + " in " + person.country

// }
// logData()
// console.log(persons)


// if, else statement
// let age = 145

// if (age < 6) {
//   console.log("free")
// } else if (age > 6 && age <= 17) {
//   console.log("child discount")
// } else if (age > 18 && age <= 26) {
//   console.log("student discount")
// } else if (age > 27 && age <= 66) {
//   console.log("full price")
// } else if(age > 66) {
//   console.log("senior citizen discount")
// }


// loops
// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// console.log("The 5 largest countries in the world:")
// for (i = 0; i < largeCountries.length; i++){
//   console.log("- " + largeCountries[i])
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries.pop()
// console.log(largeCountries)
// largeCountries.push("Pakistan")
// console.log(largeCountries)
// largeCountries.shift()
// console.log(largeCountries)
// largeCountries.unshift("China")
// console.log(largeCountries)

// let dayOfMonth = 31
// let weekDay = "Friday"

// if (dayOfMonth === 13 && weekDay === "Friday") {
//   console.log("wow")
// }

// let hands = ["rock", "paper", "scissor"]

// function hand() {
//   let random = Math.floor(Math.random() * 3)
//  return hands [random]
// }

// hand()
// console.log(hand())


// sorting fruits

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function fruits(){
  for (i=0; i < fruit.length; i++){
    // console.log(fruit[i])
    if (fruit[i] ===  "🍎")
    {
      appleShelf.textContent += "🍎" 
    
    }
    else if (fruit[i] === "🍊"){
    orangeShelf.textContent += "🍊" 
    }

  }
}

fruits()
