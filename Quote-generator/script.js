
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById("loader");

let apiQuotes = [];

//Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide loading 
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}


//Show New Quote
function newQuote(){
    loading();
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    // console.log(quote)
    // console.log(apiQuotes)
    const author = Array.from(quote.author.split(","));
    // console.log(author)
    if(author[0] === null || author[0] === 'type.fit' ){
        authorText.textContent = 'Unknown';
    }else{
    authorText.textContent = author[0];
    }

    //Check Quote length to determine styling
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }

    //set quote, hide loader

   
    quoteText.textContent = quote.text;
    complete();

}

//GET quotes from API

async function getQuotes() {
    loading();
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const data = await fetch(apiUrl)
        apiQuotes = await data.json();
        newQuote();
    }catch (error){
        alert(error)
        //Catch ERROR Here
    }
}

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners

newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

//On Load
getQuotes();