//make equals function evaluate what is on the screen (dont use eval function)

const buttons = document.querySelectorAll('.button');

const screen = document.querySelector('.screen');
const equals = document.querySelector('.equals');

let screenContent = '';

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        screenContent += e.target.dataset.key;
        screen.textContent = screenContent;
    })
});

equals.addEventListener('click', () => {
    screenContent = new Function('return '+screenContent)();
    console.log(screenContent)
})

