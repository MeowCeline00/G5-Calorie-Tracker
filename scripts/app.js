document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});

function navigateTo(page) {
    switch(page) {
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
