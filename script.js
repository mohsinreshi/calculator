function add (a, b) {
  displayNum.textContent = a + b;
}
function subtract (a, b) {
  displayNum.textContent = a - b;
}
function multiply (a, b) {
  displayNum.textContent = a * b;
}
function divide (a, b) {
  let result = a / b;
  result = Math.floor(result * 100) / 100;
  displayNum.textContent = result.toFixed(2);
}

function operate(a, operator, b) {
  if (operator == '+') return add (a, b);
  else if (operator == '-') return subtract(a, b);
  else if (operator == '*') return multiply(a, b);
  else if (operator == '/') return divide(a, b);
}

  let buttons = document.querySelectorAll('.button')
  let button = document.querySelector('.button');
  let displayNum = document.querySelector('span');
  let num = [];
  buttons.forEach(button => button.onclick = function(){
    if (num.length <= 10) {
      num.push(button.value);
    } else return;
    displayNum.textContent = num.join('');
  });
  let decimalButton = document.querySelector('.decimal');
  decimalButton.onclick = function() {
    if(num.indexOf('.') == -1) {
      if (num.length <= 10) {
      num.push(decimalButton.value);
    }
  } else return;
    displayNum.textContent = num.join('');
  };

  let operateButtons = document.querySelectorAll('.operand');
  let operateButton = document.querySelector('.operand');
  let operand = "";
  let num1 = 0;
  let num2 = 0;
  operateButtons.forEach(operateButton => operateButton.onclick = function() {
    if (num.length == 0 && operateButton.value == '-') num.push(operateButton.value);
    else {
      num1 = parseFloat(displayNum.textContent);
      operand = operateButton.value;
      num.splice(0, num.length);
      displayNum.textContent = num.join('');
      displayNum.textContent = operateButton.value;
    }
  });

  let equalButton = document.querySelector('.equal');
  equalButton.onclick = function() {
    num2 = parseFloat(displayNum.textContent);
    operate(num1, operand, num2);
  }

  let clearButton = document.querySelector('.clear');
  clearButton.onclick = function() {
    num.splice(0, num.length);
    num1 = 0;
    num2 = 0;
    operand = "";
    displayNum.textContent = num.join('');
    if (num.length <= 0) displayNum.textContent = 0;
  }

  let backspaceButton = document.querySelector('.backspace');
  backspaceButton.onclick = function(){
    num.pop();
    displayNum.textContent = num.join('');
    if (num.length <= 0) displayNum.textContent = 0;
  }
