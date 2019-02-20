const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

const display = document.querySelector('.calculator__display');
var lastButton = display.textContent;
var num1 = '';
var operator = '';
var num2 = '';
var results = '';
const calculate = (num1, operator, num2) => {
    const firstNum = parseFloat(num1)
    const secondNum = parseFloat(num2)
    if (operator === '+') return firstNum + secondNum
    if (operator === '-') return firstNum - secondNum
    if (operator === '*') return firstNum * secondNum
    if (operator === '/') return firstNum / secondNum
  }

keys.addEventListener('click', e => {
    if (e.target.matches('.key--button')) {
        // What is the value of the number?
      const key = e.target;
      const keyContent = key.textContent;

        //If there is no starting number, do not append 0
        if(display.textContent == 0 ){
        // Update the display
        display.textContent = keyContent;

        // Store the last number
        lastButton = keyContent;
        
      } else if (operator !== '' && lastButton == '+' ||
        lastButton == '-' ||
        lastButton == '*' ||
        lastButton == '/'
      ) {
       // if last number was an operator, store it
       operator = lastButton;
       lastButton = '';

        // Reset the display
        display.textContent = keyContent;
        
 
      } else {

        //   Append number if it is not 0
        display.textContent += keyContent;

        // Update the last number
        lastButton += keyContent;

      }



    //   If the button is an operator
    } else if (e.target.matches('.key--operator')){
        const key = e.target;
        const keyContent = key.textContent;


        // Update num1 to be the value of the previous numbers
        num1 = lastButton;
        // Update last number with the value
        lastButton = keyContent;

        // Update the display
        display.textContent = '';
        display.textContent = keyContent;
        operator = keyContent;
 



    } else {
        var num2 = display.textContent;
        var results = calculate(num1, operator, num2);
        display.textContent = results;

    }
});
