function renderHomePage() {
    const root = document.getElementById('root');
    const userName = localStorage.getItem('userName') || 'User Name';
    const userPhoto = localStorage.getItem('userPhoto') || './images/profile_icon.svg';

    root.innerHTML = `
      <div class="mainContent">
        <div class="topBar">
          <div class="greeting">
            <h2>Hello,</h2>
            <p>${userName}</p>
          </div>
          <div class="profileIcon" onclick="navigateTo('profile')">
            <img src="${userPhoto}" alt="Profile" width="50" height="50" />
          </div>
        </div>
        <div class="dateChange">
          ${renderDateComponent()}
        </div>
        <div class="meal_container">
          <div class="meals">
            ${renderMealItem('Breakfast', './images/breakfast_icon.svg', '', '')}
            ${renderMealItem('Lunch', './images/lunch_icon.svg', '', '')}
            ${renderMealItem('Dinner', './images/dinner_icon.svg', '', '')}
            ${renderMealItem('Snacks', './images/snacks_icon.svg', '', '')}
          </div>
        </div>
        ${renderNavbar()}
      </div>
    `;

    let currentDate = new Date();

    document.getElementById('prevButton').addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() - 1);
        updateDate(currentDate);
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() + 1);
        updateDate(currentDate);
    });
}
