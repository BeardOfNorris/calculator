let num1 = null;
let num2 = null;
let operator = null;
let shouldResetScreen = false;

const displayNumber = document.getElementById('displayNumber');
const num2Container = document.getElementById('num2-container');
const numButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalsButton = document.getElementById('button-equals');
const clearButton = document.getElementById('button-clear');

equalsButton.addEventListener('click', getResult);
clearButton.addEventListener('click', clearDisplay);

numButtons.forEach((button) =>
  button.addEventListener('click', () => appendDisplay(button.textContent)),
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperator(button.textContent)),
);

function appendDisplay(number) {
  if (
    displayNumber.textContent === '0' ||
    shouldResetScreen ||
    displayNumber.textContent === 'Error'
  ) {
    displayNumber.textContent = number;
    shouldResetScreen = false;
  } else {
    displayNumber.textContent += number;
  }
}

function setOperator(newOperator) {
  if (operator !== null && !shouldResetScreen) {
    evaluate();
  }
  num1 = Number(displayNumber.textContent);
  operator = newOperator;
  num2Container.textContent = `${num1} ${operator}`;
  shouldResetScreen = true;
}

function evaluate() {
  if (operator === null || shouldResetScreen) return;
  num2 = Number(displayNumber.textContent);
  const result = operate(num1, operator, num2);
  displayNumber.textContent = result;
  num1 = result;
  num2Container.textContent = `${num1} ${operator}`;
}

function getResult() {
  if (num1 === null || operator === null) return;
  num2 = Number(displayNumber.textContent);
  const result = operate(num1, operator, num2);
  displayNumber.textContent = result;
  num2Container.textContent = '';
  num1 = null;
  operator = null;
  shouldResetScreen = true;
}

function clearDisplay() {
  num1 = null;
  num2 = null;
  operator = null;
  displayNumber.textContent = '0';
  num2Container.textContent = '';
  shouldResetScreen = false;
}

function operate(a, op, b) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b === 0 ? 'Error' : a / b;
    default:
      return b;
  }
}
