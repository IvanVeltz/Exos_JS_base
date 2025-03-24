const divIcons = document.querySelectorAll('.icon');
const container = document.querySelector('.container');

divIcons.forEach(divIcon =>{
    divIcon.addEventListener('click', ()=>{
        const classContainer = divIcon.classList[2]; 
        // Récupérer la troisième classe de l'icon(ex: facebook-color)
        const paragraphe = divIcon.querySelector('p');
        const color = window.getComputedStyle(divIcon).backgroundColor;

        if (container.classList.contains(classContainer)){
            container.classList.remove(classContainer);
            // Si la class est déja appliqué, on la supprime
            paragraphe.classList.add('hidden');
            // Et on masque le paragraphe
            divIcon.classList.remove('border-radius');
            // On enleve la class border-radius à la div
            divIcon.classList.remove("shadow-fb", "shadow-twitter", "shadow-instagram");
            // On enleve l'ombre
        } else {
            container.classList.remove('facebook-color', 'twitter-color', 'instagram-color');
            // Sinon, On supprime les autres classes color
            container.classList.add(classContainer);
            // Et on ajoute la class
            divIcons.forEach(div =>{
                div.classList.remove('border-radius');
                // On remet les bord comme au depart à toutes les div des icones
            })

            divIcon.classList.add('border-radius');
            // On applique la class borde-radius à la div en cours

            const paragraphes = document.querySelectorAll('p');
            paragraphes.forEach(p =>{
                p.classList.add('hidden');
                // On masque tous les paragraphe
            })
            
            paragraphe.classList.remove('hidden');
            // On enleve la classe qui masque le paragrpahe
            
            divIcons.forEach(div =>{
                div.classList.remove("shadow-fb", "shadow-twitter", "shadow-instagram");
            })
            // On enleve l'ombre de toutes les icones
            
            if (divIcon.classList.contains("facebook-color")) {
                divIcon.classList.add("shadow-fb");
            } else if (divIcon.classList.contains("twitter-color")) {
                divIcon.classList.add("shadow-twitter");
            } else if (divIcon.classList.contains("instagram-color")) {
                divIcon.classList.add("shadow-instagram");
            }
            // On ajoute la bonne hombre à l'icon cliqué

        }
    })
})

