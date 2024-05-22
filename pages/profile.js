import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('User Name');
  const [userPhoto, setUserPhoto] = useState('/images/profile_icon.svg');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Save the user data (e.g., to a backend or local storage)
    // For now, just navigate back to the home page with updated data
    router.push({
      pathname: '/home',
      query: { userName, userPhoto },
    });
  };

  return (
    <div className={styles.container}>
      <h1>Edit Profile</h1>
      <div className={styles.profilePic}>
        <img src={userPhoto} alt="Profile" className={styles.profileImage} />
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
      </div>
      <div className={styles.userName}>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <button className={styles.saveButton} onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default Profile;
