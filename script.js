const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];

//Show New Quote
function newQuote() {
    
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //console.log(quote);
    //Check if author field is blank and replaceut with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknow';
    } else {
        authorText.textContent = quote.author;
    }
    //check quote length to determine styling
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // set Quote, Hide loader


    quoteText.textContent = quote.text; 
    
    //const quote = localQuotes[Math.floor(Math.random() * apiQuotes.length)];
}

//Get Quotes From API
async function getQuotes() {
    
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
              apiQuotes = await response.json();
              newQuote();
    } catch (error) {
        //Catch error here
        //alert(error); //e.x
    }
}

//Tweet a quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event listeners 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On Load
getQuotes();


//newQuote();