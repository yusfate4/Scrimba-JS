// document.getElementById("count-el").innerHTML = 5

// let count = 0;
// console.log(count)

// var myAge = 23;
// console.log(myAge)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store  the result in myDogAge
// 3. Log myDogAGe to the console

// var myAge = 23;
// var humanDogRatio = 7;
// var myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// Create a variable, bonusPoints. Initialize it as 50.
// Incrase it to 100, Decrement it down to 25, and then finally increase it to 70.

// let bonusPoints = 50;
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// On-click event
// initialize the count as 0;
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML

// let count = 0;
// let countEl = document.getElementById("count-el")
// console.log(countEl)
// function increment() {
//     count = count +1
//    countEl.innerHTML = count
// console.log(count)

// }

// let count1 = 100
// function decrement () {
//     count1 = count1 -1
//     document.getElementById("count-ele").innerHTML = count1
// }

// increment()

// functions
// function countdown () {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// Create a function that logs out the number 42 to the console
// call/invoke the function

// function numbercount() {
//     console.log(42)
// }

// numbercount()

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function lapsum() {
//     total = lap1 + lap2 + lap3;
//     console.log(total)
// }

// lapsum();

// let lapsCompleted = 0;

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }
// incrementLap()

/*
let count = 0;
let countEl = document.getElementById("count-el")
// console.log(countEl)
function increment() {
    count = count +1
   countEl.innerHTML = count
    // console.log(count)

}
// 1. Create a function, save(), which logs out the count when it's called
function save() {
    console.log(count)
}
// save(count)
*/

// strings
/*
let username = "per"
let message = "You have three new notification "
let messageToUser = message + username + "!"
console.log(messageToUser)
*/

// CReate two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g "Hi, my name is "

// Create a third variable, myGreeting, that concatenates the two strings
// Log mt=yGreeting tot the console.

// let name = "Yusuf";
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// console.log(4 + 5)
// console.log("2" + "4")
// console.log("5" + 1)
// console.log(100 + "100")

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
/*
let welcomeEl = document.getElementById("welcome-el")
// Create two variables (name & greeting) that contains your name
// and the geeting we want to render on the page
let name = "Dahud Yusuf"
let greeting = "Welcome back " 
welcomeEl.innerText = greeting + name
// Render the welcome message using welcomeEl.innerText
// message = welcomeEl.innerText

welcomeEl.innerText += " 👋"

console.log(welcomeEl.innerText)

*/

// 1. Grab the save-el paragraph and store it in a varaible called saveEL
/*
let saveEL = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  // 2. Create a variable that countains both the count and the dash separator, i.e "12 - "
  let countObject = count + " - ";
  // 3. Render the variable in the saveEl using innerText
  saveEL.textContent += countObject;
  countEl.textContent = 0;
  count = 0;

  // NB. Make sure to not delete the exising content of the paragraph
  console.log(count);
}

*/

// let firstName = "Yusuf";
// let lastName = " Dahud";
// fullName = firstName + lastName;
// console.log(fullName)

/*
let name = "Linda"
let greeting = "Hi there"

function myGreeting() {
    nameGreet = greeting + ", " + name + "!"
}
myGreeting()
console.log(nameGreet )
*/

let myPoints = 3

// Create two functions, add3Points() and removePoint(), and have them 
// add/remove points to/from the myPoints variable

function add3Points() {
    myPoints += 3
}

function removePoint() {
    myPoints -= 1
  
}
add3Points()
add3Points()
add3Points()
add3Points()
removePoint()




// call the functions to that the line below logs out 10
console.log(myPoints)























