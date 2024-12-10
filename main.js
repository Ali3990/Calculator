
const numbers = document.querySelectorAll(".number") // store all the button number elements in Array

// operators
const add = (x, y) => x + y;
const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y;

let displayValue = "0";

// work on this first, how do I store the number? and after an operator is hit, how do I 
let firstNum;    // first number
let operator;      // operator
let secondNum;    // second number


//start with storing numbers up to multiple digits into one variable
numbers.forEach((number) => {
    number.addEventListener("click", e => {
        if (operator === "") { // Read first number if no operator has been set
            firstNum += e.target.innerText;
            console.log(firstNum)
        } else { //Read second number
            secondNum += e.target.innerText;
            console.log(secondNum)
        }
    })
});

