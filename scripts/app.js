function navigateTo(page) {
    switch (page) {
        case 'home':
            renderHomePage();
            break;
        case 'profile':
            renderProfilePage();
            break;
        case 'lunchCalorie':
            renderLunchCaloriePage();
            break;
        default:
            renderLandingPage();
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderLandingPage();
});