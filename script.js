// Password protection functionality
function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const correctPassword = 'auto';
    
    if (passwordInput.value === correctPassword) {
        // Hide password overlay
        document.getElementById('password-overlay').style.display = 'none';
        // Show main content
        document.getElementById('main-content').style.display = 'block';
        // Store in session so user doesn't need to re-enter on page reload
        sessionStorage.setItem('authenticated', 'true');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// Allow Enter key to submit password
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password-input');
    
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkPassword();
            }
        });
        
        // Check if already authenticated in this session
        if (sessionStorage.getItem('authenticated') === 'true') {
            document.getElementById('password-overlay').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        } else {
            // Focus on password input when page loads
            passwordInput.focus();
        }
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
