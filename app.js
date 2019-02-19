const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

const display = document.querySelector('.calculator__display');


keys.addEventListener('click', e => {
    if (e.target.matches('button.key--button')) {
      console.log('number');
    } else if (e.target.matches('button.key--operator')){
        console.log('operator');
    } else {
        console.log('something else');
    }
});