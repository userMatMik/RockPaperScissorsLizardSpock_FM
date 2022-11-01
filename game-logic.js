const winningCombinations = {
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    rock: ['scissors', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock'],
}

let RPSPlayerWinsLS;
let RPSAIWinsLS;

console.log(RPSPlayerWinsLS)

let RPSstate = {
    playerWins: localStorage.getItem(RPSPlayerWinsLS) || 0,
    AIWins: localStorage.getItem(RPSAIWinsLS) || 0,
    playerPick: null,
    AIPick: null,
}

localStorage.setItem(RPSPlayerWinsLS, 9)
localStorage.setItem(RPSAIWinsLS, 6)

console.log(RPSstate)
