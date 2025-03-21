document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication check (for demonstration purposes)
    if (username === 'admin' && password === 'password') {
        // Store user authentication status in local storage
        localStorage.setItem('isAuthenticated', 'true');
        // Redirect to protected page
        window.location.href = 'protected.html';
    } else {
        document.getElementById('error').innerText = 'Invalid username or password';
    }
});