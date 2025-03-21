// Check if the user is authenticated
if (!localStorage.getItem('isAuthenticated')) {
    // If not authenticated, redirect to login page
    window.location.href = 'login.html';
}