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
          <p id="totalCalories">${totalCalories}</p>
          <div class="lunch_word_calorie">cal</div>
        </div>
      </div>
      <div class="dateChange">
        <img src="./images/lunchDate.svg" alt="Lunch date" />
      </div>
      <div class="add_lunch_meal_container">
        <div class="add_lunch_ButtonContainer" onclick="showAddFoodModal()">
          <img src="./images/add_food.svg" alt="Add Food" />
          <p>Add Food</p>
        </div>
        <div class="scanButtonContainer" onclick="scanBarcode()">
          <img src="./images/scan_button.svg" alt="Scan Barcode" />
          <p>Scan Barcode</p>
        </div>
      </div>
      <div class="lunch_items_calories">
          ${lunchItems.map((item, index) => `
            <div class="foodItem">
              <p>${item.name}</p>
              <p>${item.amount} g</p>
              <p>${item.calories} Cal</p>
              <img src="./images/trash_button.svg" alt="Remove" onclick="removeLunchItem(${index})" />
            </div>
          `).join('')}
      </div>
      <button class="calculateButton" onclick="calculateTotalCalories()">Calculate Calories</button>
    </div>
    ${renderNavbar()}
    <div id="addFoodModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="hideAddFoodModal()">&times;</span>
        <h2>Add Food</h2>
        <div class="mealsInputContainer">
        <label for="foodName">Food Name:</label>
        <input type="text" id="foodName" name="foodName">
        <label for="foodAmount">Amount (g):</label>
        <input type="number" id="foodAmount" name="foodAmount">
        <label for="foodCalories">Calories (Cal):</label>
        <input type="number" id="foodCalories" name="foodCalories">
        </div>
        <br />
        <button class="submitButton" onclick="submitLunchItem()">Add</button>
      </div>
    </div>
  `;
}

function showAddFoodModal() {
  document.getElementById('addFoodModal').style.display = 'block';
}

function hideAddFoodModal() {
  document.getElementById('addFoodModal').style.display = 'none';
}

function submitLunchItem() {
  const name = document.getElementById('foodName').value;
  const amount = parseInt(document.getElementById('foodAmount').value, 10);
  const calories = parseInt(document.getElementById('foodCalories').value, 10);
  const lunchItems = JSON.parse(localStorage.getItem('lunchItems')) || [];
  lunchItems.push({ name, amount, calories });
  localStorage.setItem('lunchItems', JSON.stringify(lunchItems));
  hideAddFoodModal();
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
