document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        // Hide login form
        document.getElementById('login-form').style.display = 'none';
        
        // Display user info in navbar
        document.getElementById('username-display').textContent = username;
        document.getElementById('user-info').classList.remove('hidden');
    }
});

document.getElementById('logout-btn').addEventListener('click', function() {
    // Hide user info
    document.getElementById('user-info').classList.add('hidden');
    
    // Show login form
    document.getElementById('login-form').style.display = 'flex';
    
    // Clear username input
    document.getElementById('username').value = '';
});






