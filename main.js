
const output = document.querySelector("#display");
const numbers = document.querySelectorAll(".number"); // store all the button number elements in Array
const operators = document.querySelectorAll(".op"); // store all the operators

const clear = document.querySelector(".clear");

// operators
const add = (x, y) => x + y;
const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y;

let displayValue = "0";

let firstNum = "";    
let operator = "";      
let secondNum = "";
let currResult = ""; // ongoing tab of current calculated value


//start with storing numbers up to multiple digits into one variable
numbers.forEach((number) => {
    number.addEventListener("click", e => {
        if (operator === "") { // Read first number if no operator has been set
            firstNum += e.target.innerText;
            output.value = firstNum;
        } 
        else { // If operator is set, read second number
            secondNum += e.target.innerText;
            output.value = secondNum;
        }
    })
});

operators.forEach((op) => {
    op.addEventListener("click", e =>{
        operator = e.target.innerText;
    })
})

const calc = function(){

}

// Erases all the stored values and text value within the display window.
const clearAll = function(){
    firstNum = ""
    secondNum = ""
    operator = ""
    output.value = ""
    displayValue = "0"
}