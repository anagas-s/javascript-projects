let score = document.getElementById('score')
let timeLeft = document.getElementById('timeleft')
let startNewGameBtn = document.getElementById('startNewGame')
let pauseGameBtn = document.getElementById('pauseGame')
let squares = document.querySelectorAll(".square");
let currentScore =0;
let timeRemaining = 60;
let hitPos;


function randomPosition() {
    squares.forEach((square)=> {
        square.classList.remove("mole")
    })

    let randomSquare = squares[Math.floor(Math.random()*squares.length)];
    randomSquare.classList.add('mole')
    hitPos = randomSquare.id;

}


function countDown(){
    timeRemaining--;
    timeLeft.innerHTML =  `Time Left: ${timeRemaining}`;
}


squares.forEach(square => {
    square.addEventListener('mousedown',()=>{
        if(square.id === hitPos){
            currentScore++;
            score.innerHTML = `Your Score : ${currentScore}`

            hitPos = null;
        }
    });
})




function startGame(){
    score = 0;
    timeRemaining =60;
    //callback function
    // setInterval(randomPosition,1000);
    // setInterval(countDown,1000);

}


startNewGameBtn.addEventListener('click',startGame);