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
