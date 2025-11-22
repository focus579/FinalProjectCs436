const display = document.getElementById('display');
const expr = document.getElementById('expression');

const nums = Array.from(document.querySelectorAll('.btn-num'));
const ops = Array.from(document.querySelectorAll('.btn-op'));
const clearBtn = document.getElementById('clear');
const backBtn = document.getElementById('back');
const equals = document.getElementById('equals');
const dotBtn = document.getElementById('dot');

let currentInput = '';
let previousValue = null;
let operation = null;
let waitingForNext = false;

function updateDisplay(v) {
    display.textContent = v === '' ? '0' : v;
}

function updateExpression() {
    if (previousValue !== null && operation !== null) {
        expr.textContent = `${previousValue} ${operation}`;
    } else {
        expr.textContent = '';
    }
}

nums.forEach(button => button.addEventListener('click', () => {
    if(button.id === 'dot') return;

    if (waitingForNext) {
        currentInput = '';
        waitingForNext = false;
    }
    
    if (currentInput === '0') currentInput = '';
    
    currentInput += button.textContent;
    updateDisplay(currentInput);
}));

dotBtn.addEventListener('click', () => {
    if (waitingForNext) {
        currentInput = '0';
        waitingForNext = false;
    }
    if (!currentInput.includes('.')) {
        currentInput = currentInput === '' ? '0.' : currentInput + '.';
        updateDisplay(currentInput);
    }
});

ops.forEach(opBtn => opBtn.addEventListener('click', () => {
    if (currentInput === '' && previousValue === null) return;

    if (previousValue === null) {
        previousValue = parseFloat(currentInput || '0');
    } else if (!waitingForNext) {
        const result = compute(previousValue, parseFloat(currentInput), operation);
        if (result === 'Error') {
            display.textContent = 'Error';
            resetAll();
            return;
        }
        previousValue = result;
        updateDisplay(String(result));
    }

    operation = opBtn.dataset.op;
    waitingForNext = true;
    updateExpression();
}));

equals.addEventListener('click', () => {
    if (operation === null || previousValue === null) return;

    const right = parseFloat(currentInput || previousValue);
    const result = compute(previousValue, right, operation);

    if (result === 'Error') {
        display.textContent = 'Error';
        resetAll();
        return;
    }

    updateDisplay(String(result));
    expr.textContent = `${previousValue} ${operation} ${right} =`;

    currentInput = String(result);
    previousValue = null;
    operation = null;
    waitingForNext = false;
});

clearBtn.addEventListener('click', resetAll);

backBtn.addEventListener('click', () => {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
    }
});

function compute(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '×': return a * b;
        case '÷': return b === 0 ? 'Error' : a / b;
        default: return b;
    }
}

function resetAll() {
    currentInput = '';
    previousValue = null;
    operation = null;
    waitingForNext = false;
    updateDisplay('0');
    expr.textContent = '';
}