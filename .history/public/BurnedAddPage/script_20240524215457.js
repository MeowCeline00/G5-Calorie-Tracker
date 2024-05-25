document.addEventListener('DOMContentLoaded', function() {
  const showFormButton = document.getElementById('showFormButton');
  const exerciseFormContainer = document.getElementById('exerciseFormContainer');
  const addExerciseButton = document.getElementById('addExerciseButton');
  const cancelButton = document.getElementById('cancelButton');
  const exerciseList = document.querySelector('.exercise-list');
  const calButton = document.querySelector('.calButton');
  const dateList = document.getElementById('dateList');

  let totalCalories = 0;

  const getDayOfWeek = (date) => {
    const dayIndex = date.getDay();
    return dayIndex === 0 ? 6 : dayIndex - 1;
  };

  const currentDate = new Date();
  currentDate.setMonth(5);

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
    exerciseFormContainer.style.display = 'flex';
  };

  const hideForm = () => {
    exerciseFormContainer.style.display = 'none';
    clearForm();
  };

  const addList = (exerciseName, exerciseCalories) => {
    const newList = `
      <div class="inputContainer">
        <div class="inputBox">
          <input type="text" value="${exerciseName}" readonly>
        </div>
        <div class="calories">
          <p class="number">${exerciseCalories}</p>
          <p class="cal">Cal</p>
        </div>
        <img class="trash" src="/images/trash.png" alt="trashcan" width="30" height="30" />
      </div>
    `;
    exerciseList.insertAdjacentHTML('beforeend', newList);
    totalCalories += parseInt(exerciseCalories);
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
    document.getElementById('exerciseName').value = '';
    document.getElementById('exerciseCalories').value = '';
  };

  showFormButton.addEventListener('click', showForm);
  cancelButton.addEventListener('click', hideForm);

  addExerciseButton.addEventListener('click', () => {
    const exerciseName = document.getElementById('exerciseName').value;
    const exerciseCalories = document.getElementById('exerciseCalories').value;

    if (exerciseName && exerciseCalories) {
      addList(exerciseName, exerciseCalories);
      clearForm();
      hideForm();
    }
  });

  exerciseList.addEventListener('click', deleteItem);

  renderDates();
});