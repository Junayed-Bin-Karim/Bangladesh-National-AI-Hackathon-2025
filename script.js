document.addEventListener('DOMContentLoaded', function() {
    // Get all copy buttons
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    // Add click event to each button
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const number = this.getAttribute('data-number');
            copyToClipboard(number, this);
        });
    });
    
    // Copy function
    function copyToClipboard(text, button) {
        navigator.clipboard.writeText(text).then(function() {
            // Change button text temporarily
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            button.classList.add('copied');
            
            // Reset button after 2 seconds
            setTimeout(function() {
                button.textContent = originalText;
                button.classList.remove('copied');
            }, 2000);
        }).catch(function(err) {
            console.error('Could not copy text: ', err);
        });
    }
});