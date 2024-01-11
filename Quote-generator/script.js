let apiQuotes = [];


const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');






//Show New Quote
function newQuote(){
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
   
    quoteText.textContent = quote.text;


}

//GET quotes from API

async function getQuotes() {
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
newQuote();
