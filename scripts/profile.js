function renderProfilePage() {
    const root = document.getElementById('root');
    const userName = localStorage.getItem('userName') || 'User Name';
    const userPhoto = localStorage.getItem('userPhoto') || './images/profile_icon.svg';
  
    root.innerHTML = `
      <div class="profile-container">
        <div class="back-button" onclick="navigateTo('home')">
          <img src="./images/back_button.svg" alt="Back Button" width="24" height="24" />
        </div>
        <div class="profile-header">
          <h2>Hello,</h2>
          <input type="text" id="userNameInput" value="${userName}" />
          <img src="${userPhoto}" alt="Profile" id="profilePhoto" width="50" height="50" />
          <input type="file" id="photoInput" accept="image/*" />
          <button onclick="saveProfile()">Save</button>
        </div>
        <div class="profile-menu">
          <div class="profile-menu-item" onclick="navigateTo('today')">Today <span>&gt;</span></div>
          <div class="profile-menu-item" onclick="navigateTo('savedDiet')">Saved Diet <span>&gt;</span></div>
          <div class="profile-menu-item" onclick="navigateTo('settings')">Settings <span>&gt;</span></div>
        </div>
      </div>
    `;
  
    document.getElementById('photoInput').addEventListener('change', handlePhotoUpload);
  }
  
  function handlePhotoUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const photoUrl = e.target.result;
      document.getElementById('profilePhoto').src = photoUrl;
    }
  
    reader.readAsDataURL(file);
  }
  
  function saveProfile() {
    const userNameInput = document.getElementById('userNameInput').value;
    const userPhoto = document.getElementById('profilePhoto').src;
  
    localStorage.setItem('userName', userNameInput);
    localStorage.setItem('userPhoto', userPhoto);
  
    navigateTo('home');
  }
  