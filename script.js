
// Commenting all this out as I feel like its the easy way and not in the spirit of the project.
// const buttons = document.querySelectorAll('.button');

// const screen = document.querySelector('.screen');
// const equals = document.querySelector('.equals');

// let screenContent = '';

// buttons.forEach(button => {
//     button.addEventListener('click', function (e) {
//         screenContent += e.target.dataset.key;
//         screen.textContent = screenContent;
//     })
// });

// equals.addEventListener('click', () => {
//     screenContent = new Function('return '+screenContent)();
//     console.log(screenContent)
// })

//get screen number
//when operator button is pressed, move screen number to variable
//get new number
//when operator button is pressed, make the calculation and move answer to the main screen

const numbers = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.op')

const topLeftScreen = document.querySelector('.topLeftScreen');
const topRightScreen = document.querySelector('.topRightScreen');
const bottomScreen = document.querySelector('.bottomScreen');
const equals = document.querySelector('.equals');


let screenContent = '';
let numMemory = '';
let previousOpButton = '';

numbers.forEach(number => {
    number.addEventListener('click', function (e) {
        screenContent += e.target.dataset.key;
        bottomScreen.textContent = screenContent;
    })
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', function (e) {
        if (numMemory == '') {
            numMemory = screenContent;
        } else evaluate(+numMemory, +screenContent, previousOpButton);
        topLeftScreen.textContent = numMemory;
        previousOpButton = e.target.dataset.key;
        topRightScreen.textContent = previousOpButton;
        bottomScreen.textContent = '';
        screenContent = '';
    })
})

equals.addEventListener('click', () => {
    evaluate(+numMemory, +screenContent, previousOpButton);
    bottomScreen.textContent = numMemory;
    screenContent = '';
    previousOpButton = '';
});

function evaluate(a, b, operator) {
    switch(operator) {
        case '+':
            numMemory = a + b;
            break;
        case '-':
            numMemory = a - b;
            break;
        case '*':
            numMemory = a * b;
            break;
        case '/':
            numMemory = a / b;
            break;
    }

}
