const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
loadQuotes();
const displayQuotes = quote => {
    // console.log(quote);
    const quoteElement = document.getElementById('quote');
    const quotes = quote.quote;
    quoteElement.innerHTML = `“ ${quotes} ”  `;
}