const squares = document.querySelectorAll('.square');
const square = document.querySelector('.square');
const green = window.getComputedStyle(square).backgroundColor;

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (window.getComputedStyle(square).backgroundColor === green){
            square.style.backgroundColor = 'rgb(170,113,108)';
            square.style.transform = "rotate(360deg) scale(0.9)";
            square.style.transition = "4s";
        } else {
            square.style.backgroundColor = green;
            square.style.transform = "rotate(0deg) scale(1)";
        }
    })
})