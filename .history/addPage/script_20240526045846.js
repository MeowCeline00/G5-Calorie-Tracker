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
${renderNavbar()}


const days = generateDays();
let activeIndex = currentDate.getDate() - 1;

const renderDates = () => {
  const dateList = document.getElementById('dateList');
  dateList.innerHTML = '';
  days.forEach((day, index) => {
    const dateElement = document.createElement('span');
    dateElement.className = `date ${index === activeIndex ? 'active' : ''} ${day.isToday ? 'currentDay' : ''}`;
    dateElement.innerHTML = `${day.day}<br />${day.date}`;
    dateElement.onclick = () => setActiveIndex(index);
    dateList.appendChild(dateElement);
  });
};

const setActiveIndex = (index) => {
  activeIndex = index;
  renderDates();
};

const changeDate = (direction) => {
  let newIndex = activeIndex + direction;
  if (newIndex < 0) {
    newIndex = 0;
  } else if (newIndex >= days.length) {
    newIndex = days.length - 1;
  }
  setActiveIndex(newIndex);
};

document.getElementById('prevDate').onclick = () => changeDate(-1);
document.getElementById('nextDate').onclick = () => changeDate(1);

renderDates();
