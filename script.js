let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('button'));
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.getAttribute('data-value');

        if (value === 'AC') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
