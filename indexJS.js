
// Register your button click event listeners after the external script has loaded
let currentValue = '0';
console.log("ggjgkj");

function updateDisplay() {
    document.getElementById('display').innerText = currentValue;
}

function appendValue(value) {
    if (currentValue === '0') {
        currentValue = value;
    } else {
        currentValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentValue = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        currentValue = eval(currentValue).toString();
        updateDisplay();
    } catch (error) {
        currentValue = 'Error';
        updateDisplay();
    }
}

function backspace() {
    currentValue = currentValue.slice(0, -1); // Remove the last character
    if (currentValue === '') {
        currentValue = '0'; // Set to '0' if the result is an empty string
    }
    updateDisplay();
}

let memory = 0;
let currentMemoryId = "memory1"; // Initial memory selection

function memoryClear() {
    memory = 0;
    updateMemoryButtons();
}

function memoryRecall() {
    currentValue = memory.toString();
    updateDisplay();
}

function memoryAdd() {
    memory += parseFloat(currentValue);
    updateMemoryButtons();
}

function memorySubtract() {
    memory -= parseFloat(currentValue);
    updateMemoryButtons();
}

function memoryStore() {
    memory = parseFloat(currentValue);
    updateMemoryButtons();
}

function selectMemoryDropdown() {
    currentMemoryId = document.getElementById('md').value;
    updateMemoryButtons();
}

function updateMemoryButtons() {
    const memoryButtons = ['mc', 'mr', 'mplus', 'mminus', 'ms'];
    for (const buttonId of memoryButtons) {
        const buttonElement = document.getElementById(buttonId);
        if (buttonId === 'ms' || buttonId === 'mplus' || buttonId === 'mminus') {
            buttonElement.classList.add('active');
        } else {
            buttonElement.classList.remove('active');
        }

        if (buttonId === 'mr' && memory === 0) {
            buttonElement.classList.remove('active');
        }
    }
}

function raiseToPower(power) {
    currentValue = Math.pow(power, parseFloat(currentValue)).toString();
    updateDisplay();
}

function applyOperation(operation) {
    switch (operation) {
        case 'sqrt':
            currentValue = Math.sqrt(parseFloat(currentValue)).toString();
            break;
        case 'exp':
            currentValue = Math.exp(parseFloat(currentValue)).toString();
            break;
        case 'mod':
            // Assuming 'mod' means modulus operation
            currentValue = 'Error'; // Modify this based on your specific modulus calculation
            break;
        case 'abs':
            currentValue = Math.abs(parseFloat(currentValue)).toString();
            break;
        default:
            break;
    }
    updateDisplay();
}

function reciprocal() {
    if (parseFloat(currentValue) !== 0) {
        currentValue = (1 / parseFloat(currentValue)).toString();
        updateDisplay();
    } else {
        currentValue = 'Error';
        updateDisplay();
    }
}

function factorial() {
    const num = parseFloat(currentValue);
    if (Number.isInteger(num) && num >= 0) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        currentValue = result.toString();
        updateDisplay();
    } else {
        currentValue = 'Error';
        updateDisplay();
    }
}
    