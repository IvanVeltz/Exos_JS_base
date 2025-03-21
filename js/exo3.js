const squares = document.querySelectorAll('.square');
// const green = window.getComputedStyle(squares[0]).backgroundColor;

// squares.forEach(square => {
//     square.addEventListener('click', () => {
//         if (window.getComputedStyle(square).backgroundColor === green){
//             square.style.backgroundColor = 'rgb(170,113,108)';
//             square.style.transform = "rotate(360deg) scale(0.9)";
//         } else {
//             square.style.backgroundColor = green;
//             square.style.transform = "rotate(0deg) scale(1)";
//         }
//     })
// })

squares.forEach(square =>{
    square.addEventListener('click', () =>{
        square.classList.toggle('active');
        // toggle rejoute la classe active si elle n'y est pas, et l'enlève si elle y est
    })
})