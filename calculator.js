// Variables to store result
let calculation = "";
let result = 0;

// Different button elements
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const calculate = document.querySelector(".calculate");

// Element for result display
const display = document.querySelector(".display");
const paraElement = document.createElement("p");
display.appendChild(paraElement);

// Function to display result on screen
const screenDisplay = () => {
    paraElement.innerHTML = `${calculation}`;
}

// Function to handle clicks on buttons
const handleClick = (event) => {
    value = event.target.textContent;
    if (value === '×') {
        value = '*';
    } else if (value === '÷') {
        value = '/';
    } else if (value === "+/-") {
        calculation = -(calculation);
        screenDisplay();
        return;
    }
    calculation += value;
    screenDisplay();
}

// Handles keyboard input
const handleKeydown = (event) => {
    let key = event.key;
    if (key === "Enter") {
        calculateResult();
    } else if (key === "Escape") {
        clearDisplay();
    } else if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
        calculation += key;
        screenDisplay();
    } else if (key === "Backspace") {
        calculation = calculation.slice(0, -1);
        screenDisplay();
    }
}

// Attaching event listener to the page to listen to keyboard inputs
document.addEventListener("keydown", handleKeydown);

// Function to calculate result
const calculateResult = () => {
    result = eval(calculation);
    calculation = result;
    screenDisplay();
}

// Function to clear display
const clearDisplay = () => {
    calculation = "";
    result = 0;
    screenDisplay();
}

// Loop to attach event listeners to number buttons
numbers.forEach(button => {
    button.addEventListener("click", handleClick);
});

// Loop to attach event listeners to operator buttons
operators.forEach(button => {
    button.addEventListener("click", handleClick);
});

// Attaching event listener to equals button
calculate.addEventListener("click", calculateResult);

// Attaching event listener to clear button
clear.addEventListener("click", clearDisplay);