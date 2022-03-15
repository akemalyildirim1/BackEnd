let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random()*10);

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    let human_diff = Math.abs(humanGuess - targetNumber);
    let computer_diff = Math.abs(computerGuess - targetNumber);
    if(human_diff <= computer_diff){
        return true;
    }
    return false;
};

const updateScore = winner => winner ==='human' ? humanScore++: computerScore++;

const advanceRound = () => currentRoundNumber++;

