function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
 const element = document.getElementById(elementId);
 element.classList.add('bg-orange-400')
}
function hideBackgroundColorById(elementId){
 const element = document.getElementById(elementId);
 element.classList.remove('bg-orange-400')
} 

function getElementByValue(elementId){
    const element = document.getElementById(elementId);
    const elementvalue =element.innerText;
    const value = parseInt(elementvalue);
    return value;
}

// text color game shesh kore hide korte

function getElementByTextId(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function setTextElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');


    const rendomNumber = Math.random() * 25;
    const index = Math.round(rendomNumber);

 const alphabet = alphabets[index];
 return alphabet;
}