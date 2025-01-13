const getStartedButton = document.getElementById('get-started-btn');

getStartedButton.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    console.log('Get Started button clicked!');
});
