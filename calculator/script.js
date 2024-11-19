const screen = document.getElementById('screen');
const keys = document.querySelectorAll('.key');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

// Initialize a variable to store the expression
let expression = '';

// Function to update the calculator screen
function updateScreen(value) {
    screen.value = value;
}

// Event listeners for the keys
keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.value;
        expression += keyValue;  // Append the key value to the expression
        updateScreen(expression);  // Display the updated expression
    });
});

// Event listener for the clear button
clearButton.addEventListener('click', () => {
    expression = '';  // Reset the expression
    updateScreen(expression);  // Clear the screen
});

// Event listener for the equal button to calculate the result
equalButton.addEventListener('click', () => {
    try {
        // Evaluate the expression and update the screen with the result
        const result = eval(expression);
        updateScreen(result);
        expression = result.toString();  // Allow for further operations on the result
    } catch (error) {
        updateScreen('Error');  // Display error if the expression is invalid
        expression = '';  // Reset the expression
    }
});
