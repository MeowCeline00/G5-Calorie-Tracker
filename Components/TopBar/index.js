import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.greeting}>
        <h2>Hello,</h2>
        <p>User Name</p>
      </div>
      <div className={styles.profileIcon}>
        <Link href="/profile">
          <Image src="/images/profile_icon.svg" alt="Profile" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
