const currencyEl_one = document.getElementById('currency-one')
const currencyEl_two = document.getElementById('currency-two')
const amountEl_one = document.getElementById('amount-one')
const amountEl_two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')


//Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    fetch(`https://v6.exchangerate-api.com/v6/e7808b29f9c653fcac57b115/latest/${currency_one}`)
        .then(res=>res.json())
        .then(data => {
            console.log(data)
        })
}



//Event Listeners
currencyEl_one.addEventListener('change',calculate)
amountEl_one.addEventListener('input',calculate)
currencyEl_two.addEventListener('change',calculate)
amountEl_two.addEventListener('input',calculate)

calculate();