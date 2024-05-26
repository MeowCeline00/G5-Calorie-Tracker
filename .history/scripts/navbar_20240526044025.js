function renderNavbar() {
    return `
      <div class="navContainer">
        <nav class="navbar">
          <div class="navItem" onclick="navigateTo('home')">
            <img src="./images/home_icon.svg" alt="Home" width="60" height="60" />
          </div>
          <div class="addButtonContainer">
            <div class="addnewButton" onclick=">
              <img src="./images/add_icon.svg" alt="Add" width="80" height="80" />
            </div>
          </div>
          <div class="navItem">
            <img src="./images/recipes_icon.svg" alt="Recipes" width="55" height="55" />
          </div>
        </nav>
      </div>
    `;
}