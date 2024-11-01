
let previousFib = 0;
let currentFib = 1;

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    const confirmationMessage = document.getElementById('confirmationMessage');
    const emailInput = document.getElementById('emailInput');

    // Calculate next Fibonacci number
    const nextFib = previousFib + currentFib;
    previousFib = currentFib;
    currentFib = nextFib;

    // Display confirmation message with Fibonacci number
    confirmationMessage.textContent = `Thank you for signing up! Fibonacci number: ${nextFib}`;
    confirmationMessage.style.display = 'block';

    // Clear the input field
    emailInput.value = '';
});
