function renderHomePage() {
    const root = document.getElementById('root');
    const userName = localStorage.getItem('userName') || 'User Name';
    const userPhoto = localStorage.getItem('userPhoto') || './images/profile_icon.svg';

    const breakfastCalories = localStorage.getItem('breakfastCalories') || 0;
    const lunchCalories = localStorage.getItem('lunchCalories') || 0;
    const dinnerCalories = localStorage.getItem('dinnerCalories') || 0;
    const snacksCalories = localStorage.getItem('snacksCalories') || 0;

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
          ${renderMealItem('Breakfast', './images/breakfast_icon.svg', '', breakfastCalories, "window.location.href = '/breakfastAddPage/index.html'")}
          ${renderMealItem('Lunch', './images/lunch_icon.svg', '', lunchCalories, "window.location.href = '/lunchAddPage/index.html'")}
          ${renderMealItem('Dinner', './images/dinner_icon.svg', '', dinnerCalories, "window.location.href = '/dinnerAddPage/index.html'")}
          ${renderMealItem('Snacks', './images/snacks_icon.svg', '', snacksCalories, "window.location.href = '/snacksAddPage/index.html'")}
        </div>
      </div>
      
        ${renderNavbar()}
      <div class="totalCalories">
      Total Calories: <span id="totalCalories">${parseInt(breakfastCalories) + parseInt(lunchCalories) + parseInt(dinnerCalories) + parseInt(snacksCalories)}</span> cal
    </div>
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
