let minNum = 1;
let maxNum = 10;
let answer;
let attempts = 0;

function setDifficulty(level){

    if(level === "easy"){
        maxNum = 10;
    }
    else if(level === "medium"){
        maxNum = 50;
    }
    else if(level === "hard"){
        maxNum = 100;
    }

    resetGame();
}

function resetGame(){
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    attempts = 0;

    document.getElementById("rangeText").textContent =
        `Guess a number between ${minNum} - ${maxNum}`;

    document.getElementById("result").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("guessInput").value = "";
}

function checkGuess(){

    let guess = Number(document.getElementById("guessInput").value);
    const result = document.getElementById("result");
    const attemptsText = document.getElementById("attempts");

    if(isNaN(guess)){
        result.textContent = "Please enter a valid number.";
        return;
    }

    if(guess < minNum || guess > maxNum){
        result.textContent = "Out of range!";
        return;
    }

    attempts++;

    if(guess < answer){
        result.textContent = "Too low!";
    }
    else if(guess > answer){
        result.textContent = "Too high!";
    }
    else{
        result.textContent = "🎉 Correct!";
        attemptsText.textContent = `Attempts: ${attempts}`;
    }
}

// auto start
resetGame();