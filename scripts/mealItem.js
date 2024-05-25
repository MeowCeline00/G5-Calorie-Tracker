// mealItem.js
function renderMealItem(meal, iconSrc, mealName, calories, onClick = '') {
    return `
      <div class="mealItem_container">
        <div class="mealItem_content">
          <div class="mealHeading">${meal}</div>
          <div class="mealDetails">
            <div class="calorie_container">
              <img src="${iconSrc}" alt="${meal} icon" width="24" height="24" />
              <p>${calories} Cal</p>
            </div>
          </div>
          <p class="mealName">${mealName}</p>
        </div>
        <button class="addButton" onclick="${onClick}">
          <img src="./images/add_button.svg" alt="Add Button" width="24" height="24" />
        </button>
      </div>
    `;
}
