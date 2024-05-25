document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');
    let currentPage = 'landing';
  
    const renderPage = () => {
      root.innerHTML = '';
      if (currentPage === 'landing') {
        renderLandingPage();
      } else if (currentPage === 'home') {
        renderHomePage();
      } else if (currentPage === 'profile') {
        renderProfilePage();
      }
    };
  
    window.navigateTo = (page) => {
      currentPage = page;
      renderPage();
    };
  
    renderPage();
  });
  