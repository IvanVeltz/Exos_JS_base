const container = document.getElementById('quotes-container');

// Récupère les favoris depuis le localStorage
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

// Met à jour les favoris dans le localStorage
function saveFavorites(favs) {
    localStorage.setItem('favorites', JSON.stringify(favs));
}
console.log(quotes[[1]]);
// Vérifie si un auteur est déjà en favori
function isFavorite(index) {
    return getFavorites().includes(index);
}

// Crée un élément de citation
function createQuote(author, quote, index) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('quote');

    const text = document.createElement('p');
    text.textContent = quote;

    const cite = document.createElement('cite');
    cite.textContent = author;

    const button = document.createElement('button');
    button.id = `favori${index}`;
    button.innerHTML = `Like : <i class="fa-heart ${isFavorite(index) ? 'fa-solid' : 'fa-regular'}" style="color: #f10909;"></i>`;

    // Gestion du clic
    button.addEventListener('click', () => {
        const favs = getFavorites();
        const heart = button.querySelector('i');
        if (isFavorite(index)) {
            // Retirer des favoris
            const updated = favs.filter(i => i !== index);
            saveFavorites(updated);
            heart.classList.remove('fa-solid');
            heart.classList.add('fa-regular');
        } else {
            // Ajouter aux favoris
            favs.push(index);
            saveFavorites(favs);
            heart.classList.remove('fa-regular');
            heart.classList.add('fa-solid');
        }
        const fav = getFavorites();
        console.log(fav);
    });

    wrapper.appendChild(text);
    wrapper.appendChild(cite);
    wrapper.appendChild(button);

    return wrapper;
}

// Affiche toutes les citations
function displayQuotes() {

    for (const index in quotes) {
        const quoteEl = createQuote(quotes[index].author, quotes[index].quote, index);
        container.appendChild(quoteEl);
    }
} 

displayQuotes();