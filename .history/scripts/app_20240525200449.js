document.addEventListener('DOMContentLoaded', () => {
    navigateTo('landing');
});

function navigateTo(page) {
    switch(page) {
        case 'landing':
            renderLandingPage();
            break;
        case 'home':
            renderHomePage();
            break;
        case 'profile':
            renderProfilePage();
            break;
        case 'lunchCalorie':
            renderLunchCaloriePage();
            break;
    }
}