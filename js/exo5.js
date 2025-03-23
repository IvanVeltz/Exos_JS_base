var quotesContainer = document.getElementById("quotes-container");

// Générer les citations
for (var author in quotes) {
    var quoteElement = document.createElement("div");
    quoteElement.innerHTML = `<blockquote>"${quotes[author]}"</blockquote><br><cite>${author}</cite>`;

    quotesContainer.appendChild(quoteElement);
}
