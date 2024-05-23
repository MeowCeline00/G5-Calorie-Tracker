import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/landing.module.css';

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.landing_page}>
        <Image src="/images/logo.svg" alt="Calorie Tracker Logo" width={274} height={274} />
        <h1>Calorie Tracker</h1>
        <div className={styles.button_container}>
          <button onClick={() => router.push('/home')}>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
