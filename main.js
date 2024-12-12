
const output = document.querySelector("#display");
const numbers = document.querySelectorAll(".number"); // store all the button number elements in Array
const operators = document.querySelectorAll(".op"); // store all the operators
const clear = document.querySelector(".clear")
const sign = document.querySelector(".sign")


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


numbers.forEach((number) => {
    number.addEventListener("click", event => {
        if (operator === "") { // Read first number if no operator has been set
            firstNum += event.target.innerText;
            output.value = firstNum;
            console.log(firstNum)
        } 
        else { // If operator is set, read second number
            secondNum += event.target.innerText;
            output.value = secondNum;
            console.log(secondNum)
        }
    })
});

operators.forEach((op) => {
    op.addEventListener("click", event => {
        operator = event.target.innerText;
        console.log(operator)
    })
})

sign.addEventListener("click", event => {
    if (operator === ""){
        output.value = firstNum*-1;
        firstNum *= -1;
        console.log(firstNum);
    }
    else {
        output.value = secondNum*-1;
        secondNum *= -1;
        console.log(secondNum);
    }
        
})

const calc = function(){
    a = Number(firstNum)
    b = Number(secondNum)
    switch (operator){
        case '+':
            output.value = add(a, b);
            firstNum = output.value;
            continueCalc()
            break;
        case '-':
            output.value = subtract(a, b);
            firstNum = output.value;
            continueCalc()
            break;
        case '*':
            output.value = multiply(a, b);
            firstNum = output.value;
            continueCalc()
            break;
        case '/':
            output.value = divide(a, b);
            firstNum = output.value;
            continueCalc()
            break;
    }
}

// Erases all the stored values and text value within the display window.
const allClear = function(){
    firstNum = ""
    secondNum = ""
    operator = ""
    output.value = ""
    displayValue = "0"
}

// This function will clear out the operator and secondNum, so that the calculation can continue in the calc function
const continueCalc = function() {
    secondNum = ""
    operator = ""
}

