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










// Set the deadline date (August 29, 2025 23:59:59)
const deadline = new Date('August 29, 2025 23:59:59').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = deadline - now;
    
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdown);
        const container = document.querySelector('.countdown-container');
        container.innerHTML = `
            <h2 class="countdown-title">Registration Status</h2>
            <div class="closed-message">Registration Closed</div>
        `;
    }
}, 1000);











document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const currentDate = new Date();
    
    timelineItems.forEach(item => {
        const dateString = item.getAttribute('data-date');
        const itemDate = new Date(dateString);
        
        // Remove time components for comparison
        const today = new Date(currentDate.toDateString());
        const eventDate = new Date(itemDate.toDateString());
        
        if (eventDate < today) {
            item.classList.add('past');
        } else if (eventDate.getTime() === today.getTime()) {
            item.classList.add('current');
        }
    });
});