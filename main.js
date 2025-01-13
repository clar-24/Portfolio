// Select the button
const getStartedButton = document.getElementById('get-started-btn');

// Add event listener for button click
getStartedButton.addEventListener('click', () => {
    // Scroll to the About section
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });

    // Alternatively, display a message
    console.log('Get Started button clicked!');
});