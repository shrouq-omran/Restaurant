document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        // Simple validation for demonstration
        if (username === '' || password === '') {
            errorMessage.textContent = 'Please fill in both fields.';
        } else if (username === 'resturant' && password === '125') {
            errorMessage.textContent = '';
            // Redirect or perform further actions
            window.location.href = '../home.html'; // Example redirect
        } else {
            errorMessage.textContent = 'Invalid username or password';
        }
    });
});
AOS.init();