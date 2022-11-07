import { RPSstate } from "./game-logic.js";

const createResultAi = (str) => {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result');

    const resultTitleElement = document.createElement('p');
    resultTitleElement.classList.add('result__title');
    resultTitleElement.innerText = str;

    const resultImgContainerElement = document.createElement('div');
    resultImgContainerElement.classList.add('rersult__img-container');

    // const imgElement = document.createElement('img');
    // imgElement.setAttribute('src', `./images/icon-${RPSstate.AIPick}.svg`);

    // resultImgContainerElement.appendChild(imgElement)

    resultContainer.appendChild(resultTitleElement);
    resultContainer.appendChild(resultImgContainerElement);

    return resultContainer;
}

const createResult = (str) => {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result');

    const resultTitleElement = document.createElement('p');
    resultTitleElement.classList.add('result__title');
    resultTitleElement.innerText = str;

    const resultImgContainerElement = document.createElement('div');
    resultImgContainerElement.classList.add('rersult__img-container');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', `./images/icon-${RPSstate.playerPick}.svg`);

    resultImgContainerElement.appendChild(imgElement)

    resultContainer.appendChild(resultTitleElement);
    resultContainer.appendChild(resultImgContainerElement);

    return resultContainer;
}

export const renderBattle = () => {
    const mainElement = document.querySelector('#main');
    mainElement.innerHTML = "";

    const battleElement = document.createElement('div');
    battleElement.classList.add('results');

    battleElement.appendChild(createResult('You picked'));
    battleElement.appendChild(createResultAi('House picked'));

    mainElement.appendChild(battleElement);
}