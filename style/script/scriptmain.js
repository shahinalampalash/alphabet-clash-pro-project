
function handleKeyBoardButtonPress(event) {
    // ki press korsi
    const playerPressed = event.key;
    //    ki press korte bolse
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const alphabetElement = currentAlphabetElement.innerText;
    const expectedAlphabet = alphabetElement.toLowerCase();

    if (playerPressed === expectedAlphabet) {

        const currentScore = getElementByValue('current-score');
        const updateScore = currentScore + 1;
        setTextElementById('current-score', updateScore)


        hideBackgroundColorById(expectedAlphabet);
        continueGame()
    }
    else {
      const currentLife = getElementByValue('current-life');
      const updateLife = currentLife -1 ;
      setTextElementById('current-life',updateLife)
    }


}

document.addEventListener('keyup', handleKeyBoardButtonPress)

function continueGame() {
    // random number
    const alphabet = getARandomAlphabet();

    // show display
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElement('home-part');
    showElement('playground-part')
    continueGame()
}