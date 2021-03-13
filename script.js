const inputScreen = document.getElementById('input');
const resultScreen = document.getElementById('result');



function getInputDisplayValue() {
    return inputScreen.value;
}


function addUpInputDisplayValue(value) {
    let currentValue = getInputDisplayValue();
    let newValue = currentValue + value;
    inputScreen.value = newValue;
}


function onInput(event) {
    let inputValue = event.target.innerText;
    addUpInputDisplayValue(inputValue);
    updateResultScreen();
}



function addInputEventForAllButton() {
    let numberBtns = document.querySelectorAll('.number');
    numberBtns.forEach(button => {
        button.addEventListener('click', onInput);
    });

    let calBtns = document.querySelectorAll('.cal');
    calBtns.forEach(button => {
        button.addEventListener('click', onInput);
    });
}


function clearScreen() {
    inputScreen.value = "";
    resultScreen.value = "";
}


function removeLastInput() {
    let newValue = inputScreen.value.slice(0, -1);
    inputScreen.value = newValue;
}


function calc() {
    let inputs = inputScreen.value;
    inputs = inputs.replace("x", "*");
    let result = eval(inputs);
    return result;
}


function equal() {
    let result = calc();
    inputScreen.value = result;
    resultScreen.value = "";
}


function updateResultScreen() {
    let result = calc();
    resultScreen.value = result;
}


addInputEventForAllButton();
