function renderTopBar(userName, userPhoto) {
    return `
      <div class="topBar">
        <div class="greeting">
          <h2>Hello,</h2>
          <br />
          <p>${userName}</p>
        </div>
        <div class="profileIcon" onclick="navigateTo('profile')">
          <img src="${userPhoto}" alt="Profile" width="50" height="50" />
        </div>
      </div>
    `;
  }
  