// querySelectoAll recupère dans un tableau tous les élément avec la class square
const squares = document.querySelectorAll('.square');
const bottomSquare = document.querySelector('.bottom-square');

// Rajoute un événement au click sur chaque carré
squares.forEach(square => {
    square.addEventListener('click', () => {
        const color = window.getComputedStyle(square).backgroundColor;
        // On récupère la couleur de fond du carré
        bottomSquare.style.backgroundColor = color;
        // On applique cette couleur au carré du bas
    })
})