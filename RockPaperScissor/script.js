const choices = ['rock', 'paper', 'scissors'];
const yourDisplay = document.getElementById("yourDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const result = document.getElementById("result");



function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let res = '';
    if(playerChoice === computerChoice){
        res = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case 'rock':
               res = (computerChoice === 'scissors') ? "YOU WIN!" : "YOU LOSE!";
               break;
            case 'paper':
               res = (computerChoice === 'rock') ? "YOU WIN!" : "YOU LOSE!";
               break;
            case 'scissors':
               res = (computerChoice === 'paper') ? "YOU WIN!" : "YOU LOSE!";
               break;
        }
    }

    yourDisplay.textContent = assignEmoji(playerChoice);
    ComputerDisplay.textContent = assignEmoji(computerChoice);

    yourDisplay.classList.add('choice');
    ComputerDisplay.classList.add('choice');

    if(res === 'YOU WIN!'){
        result.style.color = 'lightgreen';
    }
    else if(res === 'YOU LOSE!'){
        result.style.color = 'crimson';
    }
    else{
        result.style.color = 'yellow';
    }

    result.textContent = res;
    

}

function assignEmoji(c){
    if(c === 'rock'){
        return "✊";
    }
    else if(c === 'paper'){
        return "🖐️";
    }
    else{
        return "✌️";
    }
}