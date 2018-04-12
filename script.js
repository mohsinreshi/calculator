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

  let clearButton = document.querySelector('.clear');
  clearButton.onclick = function() {
    num.splice(0, num.length);
    displayNum.textContent = num.join('');
  }

  let backspaceButton = document.querySelector('.backspace');
  backspaceButton.onclick = function(){
    num.pop();
    displayNum.textContent = num.join('');
  }
