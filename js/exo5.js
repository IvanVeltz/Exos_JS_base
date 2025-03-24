const body = document.querySelector("body");

// Générer les citations
for (let author in quotes) {
    let quoteElement = document.createElement("div");
    quoteElement.innerHTML = `
        <blockquote>"${quotes[author]}"</blockquote>
        <br>
        <cite>${author}</cite>
        <button class="fav-button">Favori</button>
    `;

    let favButton = document.querySelector('.fav-button');
    // favButton.addEventListener('click', ()=>{
    //     localStorage.setItem(author, quotes[author]);
    // })



    body.appendChild(quoteElement);
}

console.log(localStorage);