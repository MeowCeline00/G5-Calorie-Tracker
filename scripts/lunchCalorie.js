function renderLunchCaloriePage() {
    const root = document.getElementById('root');
    const lunchItems = JSON.parse(localStorage.getItem('lunchItems')) || [];
    const totalCalories = lunchItems.reduce((sum, item) => sum + item.calories, 0);

    root.innerHTML = `
      <div class="mainContent">
        <div class="lunch_topBar">
          <h2>Lunch</h2>
          <div class="lunch_icon">
            <img src="./images/lunch_icon.svg" alt="Lunch Icon" />
          </div>
          <div class="lunch_calorie_container">
            <p>${totalCalories}</p>
            <div class="lunch_word_calorie">cal</div>
          </div>
        </div>
        <div class="dateChange">
          <img src="./images/lunchDate.svg" alt="Lunch Date" />
        </div>
        <div class="meal_container">
          <div class="addButtons">
            <div class="addButtonContainer">
              <img src="./images/add_food.svg" alt="Add Food" onclick="addLunchItem()" />
              <p>Add Food</p>
            </div>
            <div class="scanButtonContainer">
              <img src="./images/scan_button.svg" alt="Scan Barcode" onclick="scanBarcode()" />
              <p>Scan Barcode</p>
            </div>
          </div>
          <div class="lunch_items_calories">
            ${lunchItems.map((item, index) => `
              <div class="foodItem">
                <p>${item.name}</p>
                <p>${item.calories} Cal</p>
                <img src="./images/trash_button.svg" alt="Remove" onclick="removeLunchItem(${index})" />
              </div>
            `).join('')}
          </div>
          <button class="calculateButton" onclick="calculateTotalCalories()">Calculate Calories</button>
        </div>
        ${renderNavbar()}
      </div>
    `;
}

function addLunchItem() {
    const name = prompt("Enter food name:");
    const calories = parseInt(prompt("Enter calories:"), 10);
    const lunchItems = JSON.parse(localStorage.getItem('lunchItems')) || [];
    lunchItems.push({ name, calories });
    localStorage.setItem('lunchItems', JSON.stringify(lunchItems));
    renderLunchCaloriePage();
}

function removeLunchItem(index) {
    const lunchItems = JSON.parse(localStorage.getItem('lunchItems')) || [];
    lunchItems.splice(index, 1);
    localStorage.setItem('lunchItems', JSON.stringify(lunchItems));
    renderLunchCaloriePage();
}

function calculateTotalCalories() {
    const lunchItems = JSON.parse(localStorage.getItem('lunchItems')) || [];
    const totalCalories = lunchItems.reduce((sum, item) => sum + item.calories, 0);
    localStorage.setItem('lunchCalories', totalCalories);
    document.getElementById('totalCalories').innerText = `Total: ${totalCalories} Cal`;
    navigateTo('home');
}
