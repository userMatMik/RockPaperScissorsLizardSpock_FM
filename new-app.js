import { createGameBoard } from "./dom-create-elements.js";
import { renderBattle } from "./create-result.js";

export let settings = null;
export let state = null;
let playerScoreLSKey = null;

let gameModeLs = localStorage.getItem('gameModeLs') || 'rps';

const winningCombinations = {
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    rock: ['scissors', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock'],
}

const gamesSettings = {
    rps: {
        gameMode: 'rps',
        possibleChoices: ['rock', 'paper', 'scissors'],
        playerScoreLsKey: 'rpsPlayerScoreLs',
    },
    rpsls: {
        gameMode: 'rpsls',
        possibleChoices: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
        playerScoreLsKey: 'rpslsPlayerScoreLs',
    }
}

export const updateScore = () => {
    const scoreElement = document.querySelector('.score__points');
    scoreElement.innerText = state.playerScore;
}

const setWinner = () => {
    const playerPick = state.playerPick;
    const aiPick = state.AiPick;

    if (playerPick === aiPick) {
        state = {
            ...state,
            winner: 'draw',
        }
    } else if( winningCombinations[state.playerPick].includes(aiPick)) {
        localStorage.setItem(playerScoreLSKey, state.playerScore + 1)
        state = {
            ...state,
            playerScore: state.playerScore + 1,
            winner: 'player',
        }
    } else {
        localStorage.setItem(playerScoreLSKey, state.playerScore - 1)
        state = {
            ...state,
            playerScore: state.playerScore - 1,
            winner : 'ai',
        }
    }
}

const setAiPick = () => {
    const randomPick = Math.floor(Math.random() * settings.possibleChoices.length);
    state = {
        ...state,
        AiPick: settings.possibleChoices[randomPick],
    }
} 

const setPlayerPick = (choice) => {
    state = {
        ...state,
        playerPick: choice,
    }
}

const bindEvents = () => {
    document.querySelectorAll('.choice-button').forEach((button) => {
        button.addEventListener('click', (e) => {
            setPlayerPick(e.currentTarget.dataset.choice);
            setAiPick();
            setWinner();
            renderBattle();
        })
    })

    const logoElements = document.querySelectorAll('.logo');
    
    logoElements.forEach(logo => {
        logo.addEventListener('click', (e)=>{
            const gameType = document.querySelector('.logo.hidden').getAttribute('id');
            logoElements.forEach(element => element.classList.toggle('hidden'));
            startGame(gamesSettings[gameType]);
            localStorage.setItem('gameModeLs', gameType)
            e.stopImmediatePropagation();
        })
    })
}

const startGame = (gameMode) => {
    settings = gameMode;
    playerScoreLSKey = settings.playerScoreLsKey;
    state = {
        key: settings.playerScoreLsKey,
        playerScore: Number(localStorage.getItem(settings.playerScoreLsKey)) || 0,
        playerPick: null,
        AiPick: null,
        winner: null, 
    }
    createGameBoard(settings);
    bindEvents();
    updateScore();
}

const init = () => {
    if (gameModeLs === 'rps') {
        startGame(gamesSettings.rps);
    } else {
        startGame(gamesSettings.rpsls);
        document.querySelector('#rps').classList.add('hidden');
        document.querySelector('#rpsls').classList.remove('hidden');
    }
}

init();


