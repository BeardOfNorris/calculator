let num1 = null;
let num2 = null;
let operator = null;
let shouldResetScreen = false;

let displayNumber = document.getElementById('displayNumber');
const numButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalsButton = document.getElementById('button-equals');

equalsButton.addEventListener('click', getResult);
numButtons.forEach((button) => button.addEventListener('click', appendDisplay));
operatorButtons.forEach((button) =>
  button.addEventListener('click', setOperator),
);

//updates display based on button click
function appendDisplay(e) {
  if (
    displayNumber.textContent == 0 ||
    shouldResetScreen == true ||
    displayNumber.textContent == 'Error'
  ) {
    displayNumber.textContent = e.target.textContent;
    shouldResetScreen = false;
  } else {
    displayNumber.textContent += e.target.textContent;
  }
}

//sets operator LUL
function setOperator(e) {
  if (operator == null) {
    operator = e.target.textContent;
    num1 = Number(displayNumber.textContent);
    shouldResetScreen = true;
    console.log(num1);
    console.log(operator);
  } else if (operator !== null) {
    num2 = Number(displayNumber.textContent);
    console.log(num2);
    let result = operate(num1, operator, num2);
    displayNumber.textContent = result;
    operator = e.target.textContent;
    num1 = result;
    shouldResetScreen = true;
    console.log('=' + ' ' + result);
  }
}

// clear button/function
const clearButton = document.getElementById('button-clear');
clearButton.addEventListener('click', clearDisplay);

function clearDisplay() {
  shouldResetScreen = false;
  num1 = null;
  num2 = null;
  operator = null;
  displayNumber.textContent = 0;
}

// //these are the seperate math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//this function does the operation
function operate(a, b, c) {
  if (b == '-') {
    return subtract(a, c);
  } else if (b == '+') {
    return add(a, c);
  } else if (b == '/' && c !== 0) {
    return divide(a, c);
  } else if (b == '/' && c == 0) {
    return 'Error';
  } else if (b == '*') {
    return multiply(a, c);
  }
}

function getResult() {
  if (num1 === null || operator === null) {
    return;
  }
  console.log(num1);
  num2 = Number(displayNumber.textContent);
  console.log(num2);
  let result = operate(num1, operator, num2);
  console.log(result);
  displayNumber.textContent = result;
  operator = null;
  shouldResetScreen = true;
}
