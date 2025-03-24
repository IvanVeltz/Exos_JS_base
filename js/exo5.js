const body = document.querySelector("body");
const button = document.createElement("button")
let nb = 1;
// Générer les citations
for (let author in quotes) {
    let quoteElement = document.createElement("div");
    quoteElement.innerHTML = `
        <blockquote>"${quotes[author]}"</blockquote>
        <br>
        <cite>${author}</cite>
        <button id="favori${nb}">Like : <i class="fa-regular fa-heart" style="color: #f10909;"></i></button>
    `;

    body.appendChild(quoteElement);

    // Ajoute la citation dans le local storage si on click sur favori
    let favButton = document.querySelector(`#favori${nb}`);
    let heart = favButton.querySelector('i');
    favButton.addEventListener('click', ()=>{
        if (localStorage.getItem(author) == null){
            localStorage.setItem(author, quotes[author]);
            heart.classList.remove('fa-regular');
            heart.classList.add('fa-solid');
        } else {
            localStorage.removeItem(author);
            heart.classList.add('fa-regular');
            heart.classList.remove('fa-solid');
        }
    })

    // mettre en forme auchargement si la citation est dans le localStorage
    if (localStorage.getItem(author) !== null){
        heart.classList.remove('fa-regular');
        heart.classList.add('fa-solid');
    }

    nb++;
}