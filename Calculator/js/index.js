const display = document.getElementById('display');

const appendNumber = (number) => {
    display.value += number;
};

const performOperation = (operator) => {
    /*switch(operator) {
        case "+":
            display.value += "+"
            break;
        case "-":
            display.value += "-"
            break;
        case "*":
            display.value += "×"
            break;
        case "/":
            display.value += "÷"
            break;
        default:
            break;
    }*/
    display.value += operator;
};

const clearDisplay = () => {
    display.value = '';
};

const calculateResult = () => {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error: ' + e;
    }
};