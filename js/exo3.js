const squares = document.querySelectorAll('.square');
const square = document.querySelector('.square');
const green = window.getComputedStyle(square).backgroundColor;

squares.forEach(squares => {
    squares.addEventListener('click', () => {
        if (window.getComputedStyle(square).backgroundColor === green){

        } else {
            
        }
    })
})