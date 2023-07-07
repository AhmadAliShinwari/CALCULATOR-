let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    document.getElementById('result').value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += operator;
    document.getElementById('result').value = currentExpression;
}

function clearResult() {
    currentExpression = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        const result = eval(currentExpression);
        document.getElementById('result').value = result;
        currentExpression = '';
    } catch (error) {
        alert('Invalid expression');
    }
}
