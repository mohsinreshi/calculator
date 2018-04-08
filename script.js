function add (a, b) {
  console.log(a + b);
}
function subtract (a, b) {
  console.log(a - b);
}
function multiply (a, b) {
  console.log(a * b);
}
function divide (a, b) {
  console.log(a / b);
}

function operate(a, operator, b) {
  if (operator == '+') return add (a, b);
  else if (operator == '-') return subtract(a, b);
  else if (operator == '*') return multiply(a, b);
  else if (operator == '/') return divide(a, b);
}

const buttons = document.querySelectorAll('.button');
const button = document.querySelector('.button');
const operands = document.querySelectorAll('.operand');
const operando = document.querySelector('.operand');

/*function returnButtonValue(){
  buttons.forEach(button => button.addEventListener('click', function(){
    return button.value;
}))}*/

function operand() {
  operands.forEach(operando => operando.onclick = function() {
    let temp = operando.value;
    return temp.toString();
  })
}

function buttonValue(){
  buttons.forEach(button => button.onclick = function() {
  return button.value;
})}

const equalButton = document.querySelector('.equal');
let a = buttonValue()
  , operator = operand()
  , b = buttonValue();
equalButton.onclick = function() {
  operate(a, operator, b);
}
