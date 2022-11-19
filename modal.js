import { settings } from "./new-app.js";

const dialog = document.querySelector('dialog');
const openDialogBtn = document.querySelector('#rulesBtn');
const closeModalBtn = document.querySelector('#closeRules');
const rulesImg = document.querySelector('#rulesImg');

openDialogBtn.addEventListener('click', () => {
    if (settings.gameMode === 'rps') {
        rulesImg.setAttribute('src', './images/image-rules.svg');
        rulesImg.setAttribute('alt', 'rock, paper, scissors rules');
    } else {
        rulesImg.setAttribute('src', './images/image-rules-bonus.svg')
        rulesImg.setAttribute('alt', 'rock, paper, scissors, lizard, spock rules');
    }

    dialog.showModal();
})

closeModalBtn.addEventListener('click', () => {
    dialog.close();
})

