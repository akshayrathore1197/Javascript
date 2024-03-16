

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const color = e.target.id.toLowerCase();
        console.log(color);
        body.style.backgroundColor = color;
    });
});