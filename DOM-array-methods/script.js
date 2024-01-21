const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')

let data = [];



getRandomUser();
getRandomUser();
getRandomUser();
//fetch random user and add money 

async function getRandomUser() {
    const data = await fetch("https://randomuser.me/api/");
    const json = await data.json();
    
    const user = json.results[0];

    const newUser = {
        name :`${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*1000000),
    }

    addData(newUser);
}


//Add new obj to data array
function addData(obj){
    data.push(obj);
}
