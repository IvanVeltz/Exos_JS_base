const div = document.querySelector('.carre');
// document.querySelector recupere le premiere élement de class carre


// Ajouter un évenement au clic (premier argument), et appel la fonction du deuxieme argument
div.addEventListener('click', () => {
    const computedStyles = window.getComputedStyle(div);
    // window.getComputedStyle récupére toutes les propriétés de la balise en argument
    
    let message = `Class : ${div.className} \n`;
    message += `- Background color : ${computedStyles.backgroundColor}\n`;
    message += `- Color : ${computedStyles.color}\n`;
    message += `- Height : ${parseInt(computedStyles.height)}\n`
    message += `- Width : ${parseInt(computedStyles.width)}\n`;
    message += `- Display : ${computedStyles.display}\n`;
    message += `- Font : ${computedStyles.fontFamily} (${computedStyles.fontSize})`;

    
    alert(message)
    // On affiche le message dans une boite de dialogue grace à alert
});