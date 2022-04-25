let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Generate secret number
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  }
  
//compare computer vs human guess to the secret number and choose a winner  
const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  if (humanGuess > 10){
    alert('Choose a number between 1-10 Next time');
  }
    let computerCompare = Math.abs(secretNumber - computerGuess); //returns the difference as an absolute number
    let humanCompare = Math.abs(secretNumber - humanGuess);
      if ((humanCompare === computerCompare) || (humanCompare < computerCompare)) {
        return true;
      } else {
        return false;
      }
  }

  //updates score for each round
  const updateScore = winner => {
      if (winner === 'human') {
          humanScore ++;
      } else {
          computerScore ++;
      }
  }

  //advances rounds
  const advanceRound = () => {
    currentRoundNumber ++;
  }
