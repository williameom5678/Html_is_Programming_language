var display = document.getElementById('display');

var appendNumber = (number) => {
    display.value += number;
};

var performOperation = (operator) => {
    display.value += operator;
};

var clearDisplay = () => {
    display.value = '';
};

var calculateResult = () => {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error: ' + e;
    }
};