import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/home" passHref>
        <div className={styles['nav-item']}>
          <Image src="/images/home_icon.svg" alt="Home" width={55} height={55} />
        </div>
      </Link>
      <div className={styles['add-button-container']}>
        <Link href="/add" passHref>
          <div className={styles['add-button']}>
            <Image src="/images/add_icon.svg" alt="Add" width={66.67} height={66.67} />
          </div>
        </Link>
      </div>
      <Link href="/recipes" passHref>
        <div className={styles['nav-item']}>
          <Image src="/images/recipes_icon.svg" alt="Recipes" width={55} height={55} />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
