// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

/*let errorEl = document.getElementById("error");

function save() {
    errorEl.textContent = "Something went wrong, please try again"
    // document.getElementById("error").textContent = "Hello Yusuf"
}

*/

// Calculator
let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
    result = num1 + num2
    document.getElementById("sum-el").textContent = "Sum: " + result
}


function subtract() {
    result = num1 - num2
    document.getElementById("sum-el").textContent = "Sum: " + result
}


function divide() {
    result = num1 / num2
    document.getElementById("sum-el").textContent = "Sum: " + result
}


function multiply() {
    result = num1 * num2
    document.getElementById("sum-el").textContent = "Sum: " + result
}