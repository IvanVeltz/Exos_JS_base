const figures = document.querySelectorAll('figure');
const container = document.querySelector('.container');

figures.forEach(figure =>{
    figure.addEventListener('click', ()=>{
        const classContainer = figure.classList[1]; 
        // Récupérer la deuxième classe de la figure(ex: facebook-color)
        if (container.classList.contains(classContainer)){
            container.classList.remove(classContainer);
            // Si la class est déja appliqué, on la supprime
        } else {
            container.classList.remove('facebook-color', 'twitter-color', 'instagram-color');
            // Sinon, On supprime les autres classes color
            container.classList.add(classContainer);
            // Et on ajoute la class
        }
    })
})

