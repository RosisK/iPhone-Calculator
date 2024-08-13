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

// Function to handle clicks on buttons
const handleClick = (event) => {
    value = event.target.textContent;
    calculation += value;
    screenDisplay();
}

// Function to display result on screen
const screenDisplay = () => {
    paraElement.innerHTML = `${calculation}`;
}

// Loop to attach event listeners to number buttons
numbers.forEach(button => {
    button.addEventListener("click", handleClick);
});

// Loop to attach event listeners to operator buttons

operators.forEach(button => {
    button.addEventListener("click", handleClick);
});

// Attaching event listener to clear button
clear.addEventListener("click", () => {
    calculation = "";
    result = 0;
    screenDisplay();
});

// Attaching event listener to equals button
calculate.addEventListener("click", () => {
    result = eval(calculation);
    calculation = result;
    screenDisplay();
})



























/*
let calculation = "";
let result = 0;

const resultDisplay = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

const handleClick = (event) => {
    const value = event.target.textContent;

    if (value === 'AC') {
        // Clear the calculation and result
        calculation = "";
        result = 0;
        resultDisplay.innerHTML = `<p>${calculation}</p>`;
    } else if (value === '=') {
        try {
            // Use Function constructor instead of eval
            result = new Function('return ' + calculation)();
            resultDisplay.innerHTML = `<p>${result}</p>`;
            calculation = result; // Prepare for new calculations
        } catch (error) {
            resultDisplay.innerHTML = `<p>Error</p>`;
        }
    } else {
        // Handle operators and numbers
        calculation += value;
        resultDisplay.innerHTML = `<p>${calculation}</p>`;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});
*/