document.addEventListener('DOMContentLoaded', () => {
    navigateTo('landing');
});

function navigateTo(page) {
    switch (page) {
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
            window.location.href = '/lunchAddPage/index.html';
            break;
        case 'addNew':
            window.location.href = '/addPage/Add.html';
            break;
        case 'dinnerCalorie':
            window.location.href = '/dinnerAddPage/index.html';
            break;
        case 'snacksCalorie':
            window.location.href = '/snacksAddPage/index.html';
            break;
        case 'breakfastCalorie':
            window.location.href = '/breakfastAddPage/index.html';
            break;
        case 'burnedCalorie':
            window.location.href = '/burnedAddPage/index.html';
            break;
        default:
            console.error('Invalid page:', page);
            break;
    }
