let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (user, computer, target) => {
  if (user < 0 || user > 9) {
    alert('Your number is out of range!')
    return
  }
  return getAbsoulteDistance(target, user) <= getAbsoulteDistance(target, computer)
};

const getAbsoulteDistance = (x, y) => Math.abs(x - y)

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++
  }
  if (winner === 'computer') {
    computerScore++
  }
};

const advanceRound = () => currentRoundNumber++