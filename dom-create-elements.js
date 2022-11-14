const createGameButton = (btnName) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('choice-button', `choice-button--${btnName}`)
    buttonElement.setAttribute('data-choice', `${btnName}`)

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('choice-button__image-container')

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', `./images/icon-${btnName}.svg`)
    imgElement.setAttribute('alt', `${btnName}`);
    imgContainer.appendChild(imgElement);
    buttonElement.appendChild(imgContainer);

    return buttonElement;
}

export const createGameBoard = () => {
    const mainElement = document.querySelector('#main');

    const gameBoard = document.createElement('div');
    gameBoard.classList.add('game-board', 'game-board--rps')
    
    gameBoard.appendChild(createGameButton('paper'));
    gameBoard.appendChild(createGameButton('rock'));
    gameBoard.appendChild(createGameButton('scissors'));

    mainElement.appendChild(gameBoard);
}
