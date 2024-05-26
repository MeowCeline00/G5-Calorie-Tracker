function renderDateComponent() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-GB', options);

    return `
      <div id="dateComponent" style="display: flex; align-items: center; justify-content: center;">
        <span id="prevButton" style="margin: 0 10px; cursor: pointer;">
          <img src="./images/prevButton.svg" alt="prev Date" width="30" height="30" />
        </span>
        <span id="dateDisplay">${formattedDate}</span>
        <span id="nextButton" style="margin: 0 10px; cursor: pointer;">
          <img src="./images/nextButton.svg" alt="next Date" width="30" height="30" />
        </span>
      </div>
    `;
}

function updateDate(newDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = newDate.toLocaleDateString('en-GB', options);
    document.getElementById('dateDisplay').innerText = formattedDate;
}


document.addEventListener('DOMContentLoaded', renderHomePage);