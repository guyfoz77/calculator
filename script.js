const numberButtons = document.querySelectorAll('.num');
const screen = document.querySelector('.screen')
let screenContent = '';

numberButtons.forEach(number => {
    number.addEventListener('click', function (e) {
        screenContent += e.target.dataset.key;
        screen.textContent = screenContent;
    })
});