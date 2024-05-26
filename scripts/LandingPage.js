function renderLandingPage() {
    const root = document.getElementById('root');
    root.innerHTML = `
      <div class="landing_container">
        <div class="landing_page">
          <img src="./images/logo.svg" alt="Calorie Tracker Logo" width="274" height="274" />
          <h1>Calorie Tracker</h1>
          <div class="button_container">
            <button onclick="navigateTo('home')">Enter</button>
          </div>
        </div>
      </div>
    `;
}
