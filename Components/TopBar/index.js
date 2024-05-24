import React from 'react';
import Image from 'next/image';
import styles from './TopBar.module.css';

const TopBar = ({ userName, userPhoto }) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.greeting}>
        <h2>Hello,</h2>
        <p>{userName}</p>
      </div>
      <div className={styles.profileIcon}>
        <Image src={userPhoto} alt="Profile" width={24} height={24} />
      </div>
    </div>
  );
};

export default TopBar;
