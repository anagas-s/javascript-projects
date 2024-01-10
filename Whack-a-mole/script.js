let score = document.getElementById('score')
let timeLeft = document.getElementById('timeLeft')
let startNewGameBtn = document.getElementById('startNewGame')
let pauseGameBtn = document.getElementById('pauseGame')
let squares = document.querySelectorAll(".square");
let currentScore =0;
let timeRemaining = 60;
let hitPos = null;
let timerId = null;
let randomPositionId = null;
let gameSound = new Audio('./assets/gameMusic.mp3')
let hitSound = new Audio('./assets/hitMusic.mp3')



function randomPosition() {
    squares.forEach((square)=> {
        square.classList.remove("mole")
    })

    let randomSquare = squares[Math.floor(Math.random()*squares.length)];
    randomSquare.classList.add('mole')
    hitPos = randomSquare.id;

}
randomPosition();


function countDown(){
    timeRemaining--;
    timeLeft.innerHTML =  `Time Left: ${timeRemaining}`;
    if(timeRemaining === 0) {
        clearInterval(timerId);
        clearInterval(randomPositionId);
    }
}

function startGame(){
    currentScore = 0;
    timeRemaining =60;
    score.innerHTML = "Your Score: 0";
    timeLeft.innerHTML = "Time Left: 60";
    pauseGameBtn.innerHTML = "Pause"
    //callback function
    gameSound.play();
    timerId =  setInterval(randomPosition,1000);
    randomPositionId =  setInterval(countDown,1000);


}

function pauseResumeGame(){
    if(pauseGameBtn.textContent === 'Pause'){
        gameSound.pause();
        clearInterval(timerId);
        clearInterval(randomPositionId);
        timerId = null;
        randomPositionId = null;
        pauseGameBtn.textContent = 'Resume'
    }else {
        gameSound.play();
        timerId =  setInterval(randomPosition,1000);
        randomPositionId =  setInterval(countDown,1000);
        pauseGameBtn.textContent = "Pause";
    }
    
}



squares.forEach(square => {
    square.addEventListener('mousedown',()=>{
        if(timerId !== null){
        if(square.id === hitPos){
            hitSound.play();
            setTimeout(()=>{
                hitSound.pause();
            },1000)
            
            currentScore++;
            score.innerHTML = `Your Score : ${currentScore}`
            hitPos = null;
        }}
    });
})


startNewGameBtn.addEventListener('click',startGame);
pauseGameBtn.addEventListener('click', pauseResumeGame);