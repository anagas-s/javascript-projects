let apiQuotes = [];

//Show New Quote
function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    return quote;
}

//GET quotes from API

async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const data = await fetch(apiUrl)
        apiQuotes = await data.json();
        const quote = newQuote();
        console.log(quote)

    }catch (error){
        
        //Catch ERROR Here
    }
}

//On Load
getQuotes();