import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.navbar}>
        <div className={styles.navItem} onClick={() => router.push('/home')}>
          <Image src="/images/home_icon.svg" alt="Home" width={60} height={60} />
        </div>
        <div className={styles.addButtonContainer} onClick={() => router.push('/add')}>
          <div className={styles.addButton}>
            <Image src="/images/add_icon.svg" alt="Add" width={80} height={80} />
          </div>
        </div>
        <div className={styles.navItem} onClick={() => router.push('/recipes')}>
          <Image src="/images/recipes_icon.svg" alt="Recipes" width={55} height={55} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
