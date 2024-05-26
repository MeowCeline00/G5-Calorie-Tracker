document.addEventListener('DOMContentLoaded', function() {
  const showFormButton = document.getElementById('showFormButton');
  const foodFormContainer = document.getElementById('foodFormContainer');
  const addFoodButton = document.getElementById('addFoodButton');
  const cancelButton = document.getElementById('cancelButton');
  const foodList = document.querySelector('.food-list');
  const calButton = document.querySelector('.calButton');
  const dateList = document.getElementById('dateList');

  let totalCalories = 0;

  const getDayOfWeek = (date) => {
    const dayIndex = date.getDay();
    return dayIndex === 0 ? 6 : dayIndex - 1;
  };

  const currentDate = new Date();
  currentDate.setDate(24);
  currentDate.setMonth(4);
  
  const generateDays = () => {
    const days = [];
    const currentDayOfWeek = getDayOfWeek(currentDate);

    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() - currentDayOfWeek + i);
      days.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate(),
        isToday: date.getDate() === currentDate.getDate(),
      });
    }

    return days;
  };

  const renderDates = () => {
    dateList.innerHTML = '';
    const days = generateDays();
    let activeIndex = currentDate.getDate() - 1;

    days.forEach((day, index) => {
      const dateElement = document.createElement('span');
      dateElement.className = `date ${index === activeIndex ? 'active' : ''} ${day.isToday ? 'currentDay' : ''}`;
      dateElement.innerHTML = `${day.day}<br />${day.date}`;
      dateElement.onclick = () => setActiveIndex(index);
      dateList.appendChild(dateElement);
    });
  };

  const setActiveIndex = (index) => {
    renderDates();
  };

  const showForm = () => {
    foodFormContainer.style.display = 'flex';
  };

  const hideForm = () => {
    foodFormContainer.style.display = 'none';
    clearForm();
  };

  const addList = (foodName, foodAmount, foodCalories) => {
    const newList = `
      <div class="inputContainer">
        <div class="inputBox">
          <input type="text" value="${foodName}" readonly>
          <p>${foodAmount}g</p>
        </div>
        <div class="calories">
          <p class="number">${foodCalories}</p>
          <p class="cal">Cal</p>
        </div>
        <img class="trash" src="/images/trash.png" alt="trashcan" width="30" height="30" />
      </div>
    `;
    foodList.insertAdjacentHTML('beforeend', newList);
    totalCalories += parseInt(foodCalories);
    updateCalButton();
  };

  const deleteItem = (e) => {
    if (e.target.classList.contains('trash')) {
      const itemCalories = parseInt(e.target.closest('.inputContainer').querySelector('.number').textContent);
      totalCalories -= itemCalories;
      e.target.closest('.inputContainer').remove();
      updateCalButton();
    }
  };

  const updateCalButton = () => {
    calButton.textContent = `${totalCalories} cal`;
  };

  const clearForm = () => {
    document.getElementById('foodName').value = '';
    document.getElementById('foodAmount').value = '';
    document.getElementById('foodCalories').value = '';
  };

  showFormButton.addEventListener('click', showForm);
  cancelButton.addEventListener('click', hideForm);

  addFoodButton.addEventListener('click', () => {
    const foodName = document.getElementById('foodName').value;
    const foodAmount = document.getElementById('foodAmount').value;
    const foodCalories = document.getElementById('foodCalories').value;

    if (foodName && foodAmount && foodCalories) {
      addList(foodName, foodAmount, foodCalories);
      clearForm();
      hideForm();
    }
  });

  foodList.addEventListener('click', deleteItem);

  function calculateWithTotalCalories() {
    const totalCalories = document.querySelector('.cal1 span').textContent;
    
    window.location.href = `/Breakfast?totalCalories=${totalCalories}`;
}

const calculateButton = document.getElementById('calculateButton');
if (calculateButton) {
    calculateButton.addEventListener('click', calculateWithTotalCalories);
}

  renderDates();
});
