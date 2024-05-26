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
                window.location.href = '/lunchAddPage/index.html'; 
                break;
            case 'addNew':
                window.location.href = '/addPage/Add.html'; 
                break;
            case 'snackCalorie':
                window.location.href = '/snacksA/Add.html'; 
                break;
    }
}