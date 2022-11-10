import { RPSstate } from "./game-logic.js";
import { updateScore } from "./game-logic.js";

const handleAiPick = () => {
    const resultElement = document.querySelector('#ai-result');
    setTimeout(() => {
        resultElement.classList.remove('result__placeholder')
        displayAiPick();
        updateScore();
    }, 3000)
}

const displayAiPick = () => {
    const resultElement = document.querySelector('#ai-result');

    const titleElement = document.querySelector('#ai-title')
    titleElement.innerText = "House picked";


    const resultImgContainerElement = document.createElement('div');
    resultImgContainerElement.classList.add('rersult__img-container', 'result__img-placeholder');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', `./images/icon-${RPSstate.AIPick}.svg`);

    resultImgContainerElement.appendChild(imgElement)

    resultElement.appendChild(resultImgContainerElement);

}

const createResultAi = (str) => {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');

    const resultTitleElement = document.createElement('p');
    resultTitleElement.setAttribute('id', 'ai-title');
    resultTitleElement.classList.add('result-title');
    resultTitleElement.innerText = str;

    const resultElement = document.createElement('div');
    resultElement.setAttribute('id', 'ai-result');
    resultElement.classList.add('result', 'result__placeholder');

    resultContainer.appendChild(resultTitleElement);
    resultContainer.appendChild(resultElement);

    return resultContainer;
}

const createResult = (str) => {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');

    const resultTitleElement = document.createElement('p');
    resultTitleElement.classList.add('result-title');
    resultTitleElement.innerText = str;

    const resultElement = document.createElement('div');
    resultElement.classList.add('result');

    const resultImgContainerElement = document.createElement('div');
    resultImgContainerElement.classList.add('result__img-container');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', `./images/icon-${RPSstate.playerPick}.svg`);

    resultImgContainerElement.appendChild(imgElement)
    
    resultElement.appendChild(resultImgContainerElement);

    resultContainer.appendChild(resultTitleElement);
    resultContainer.appendChild(resultElement);

    return resultContainer;
}

export const renderBattle = () => {
    const mainElement = document.querySelector('#main');
    mainElement.innerHTML = "";

    const battleElement = document.createElement('div');
    battleElement.classList.add('results');

    battleElement.appendChild(createResult('You picked'));
    battleElement.appendChild(createResultAi('House is picking...'));

    mainElement.appendChild(battleElement);

    handleAiPick();
}