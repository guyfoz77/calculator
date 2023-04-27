
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

const numbers = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.op')
const buttons = document.querySelectorAll('.button');

const topLeftScreen = document.querySelector('.topLeftScreen');
const topRightScreen = document.querySelector('.topRightScreen');
const bottomScreen = document.querySelector('.bottomScreen');
const equals = document.querySelector('.equals');
const buttonAC = document.querySelector('.AC');
const buttonDel = document.querySelector('.del');
const buttonNeg = document.querySelector('.neg');


let screenContent = '';
let prevAnswer = '';
let previousOpButton = '';

buttons.forEach(button => {
    button.addEventListener('mousedown', (e) => {
        button.classList.add('pressed');
    })
    button.addEventListener('mouseup', (e) => {
        button.classList.remove('pressed');
    })
});

numbers.forEach(number => {
    number.addEventListener('click', function (e) {
        screenContent += e.target.dataset.key;
        bottomScreen.textContent = screenContent;
    })
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', function (e) {
        if (prevAnswer == '') {
            prevAnswer = screenContent;
        } else evaluate(+prevAnswer, +screenContent, previousOpButton);
        
        topLeftScreen.textContent = prevAnswer;
        previousOpButton = e.target.dataset.key;
        topRightScreen.textContent = previousOpButton;
        bottomScreen.textContent = '';
        screenContent = '';
    })
})

equals.addEventListener('click', () => {
    if (prevAnswer == '') {
        prevAnswer = screenContent;
    } else evaluate(+prevAnswer, +screenContent, previousOpButton);
    
    bottomScreen.textContent = prevAnswer;
    screenContent = '';
    previousOpButton = '';
    topLeftScreen.textContent = '';
    topRightScreen.textContent = '';
});

buttonAC.addEventListener('click', () => {
    screenContent = '';
    prevAnswer = '';
    previousOpButton = '';
    topLeftScreen.textContent = '';
    topRightScreen.textContent = '';
    bottomScreen.textContent = '';
})

buttonDel.addEventListener('click', () => {
    screenContent = screenContent.slice(0, -1);
    bottomScreen.textContent = screenContent;
})

buttonNeg.addEventListener('click', () => {
    screenContent = `-${screenContent}`;
    bottomScreen.textContent = screenContent;
})

function evaluate(a, b, operator) {
    switch(operator) {
        case '+':
            prevAnswer = a + b;
            break;
        case '-':
            prevAnswer = a - b;
            break;
        case 'x':
            prevAnswer = a * b;
            break;
        case '÷':
            prevAnswer = a / b;
            break;
    }

}
